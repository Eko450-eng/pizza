import { usePizzaContext } from '../Contexts/ToppingContext/PizzaContext'
import ToppingsCheckbox from './SelectionsViews/ToppingsCheckbox'
import data from '../data/pizza.json'
import MeatSelection from './SelectionsViews/MeatSelection';

interface IPizzaType {
    meat: {
        kind: string,
        mandatorytoppings: string[],
        notallowedtoppings: string[],
    }[],
    specials: string[],
    vegetables: string[]
}

const pizzaData = data['pizza-configurator'].toppings as IPizzaType

const vegetable = pizzaData.vegetables;
const specials = pizzaData.specials;
const meats = pizzaData.meat;

const TopingPicker = () => {

    const { vegetables, special, meat } = usePizzaContext()

    return (


        <div className="topping-picker">
            <h1>Choose your topping</h1>
            <h2>Vegetables</h2>

            <div className="selection-wrapper">
                {vegetable.map((vegetable) => {
                    return <ToppingsCheckbox key={vegetable} type={"vegetable"} title={vegetable} />
                })}
            </div>

            <h2>Specials</h2>

            <div className="selection-wrapper">
                {specials.map((special) => {
                    return <ToppingsCheckbox key={special} type={"special"} title={special} />
                })}
            </div>

            <h2>Meats</h2>

            <div className="selection-wrapper">
                {meats.map((meat) => {
                    return <MeatSelection key={meat.kind} meat={meat} />
                })}
            </div>


            <h3>Selected Items</h3>
            { [...vegetables].map(v=>{
                  return <p key={v}>{v}</p>
            }) }
            { [...special].map(v=>{
                  return <p key={v}>{v}</p>
            }) }

            {[...meat].map(v => {
                return <p key={v}>{v}</p>
            })}
        </div>
    )
}

export default TopingPicker
