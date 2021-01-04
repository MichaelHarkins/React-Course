import React, {Component} from "react";
import styles from './BurgerIngredient.module.css'
import PropsTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        let ingredient;

        console.log(this.props.type);
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={styles.BreadBottom}/>;
                break;
            case ('bread-top'):
                ingredient = (<div className={styles.BreadTop}>
                    <div className={styles.Seeds1}/>
                    <div className={styles.Seeds2}/>
                </div>);
                break;
            case ('meat'):
                ingredient = <div className={styles.Meat}/>
                break;
            case ('cheese'):
                ingredient = <div className={styles.Cheese}/>
                break;
            case ('salad'):
                ingredient = <div className={styles.Salad}/>
                break;
            case ('bacon'):
                ingredient = <div className={styles.Bacon}/>
                break;
            default:
                ingredient = null;
        }
        console.log(ingredient);
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropsTypes.string.isRequired
}

export default BurgerIngredient;