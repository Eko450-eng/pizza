import { usePizzaContext } from '../Contexts/ToppingContext/PizzaContext'
import ToppingsCheckbox from './SelectionsViews/ToppingsCheckbox'
import data from '../data/pizza.json'
import MeatSelection from './SelectionsViews/MeatSelection';
import FoodCard from './FoodCard';
import { Button } from '@mantine/core';

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
            <h1>CHOOSE YOUR TOPPING</h1>
            <div className="sections">
                <div>
                    <h2>STEP 1</h2>
                    <h3>Vegetables</h3>
                </div>
                <div className="selection-wrapper">
                    {vegetable.map((vegetable) => {
                        return <ToppingsCheckbox key={vegetable} type={"vegetable"} title={vegetable} />
                    })}
                </div>
            </div>

            <div className="sections">
                <div>
                    <h2>STEP 2</h2>
                    <h3>Specials</h3>
                </div>


                <div className="selection-wrapper">
                    {specials.map((special) => {
                        return <ToppingsCheckbox key={special} type={"special"} title={special} />
                    })}
                </div>
            </div>

            <div className="sections">
                <div>
                    <h2>STEP 3</h2>
                    <h3>Meat</h3>
                </div>

                <div className="selection-wrapper">
                    {meats.map((meat) => {
                        return <MeatSelection key={meat.kind} meat={meat} />
                    })}
                </div>
            </div>

            <h3>Selected Items</h3>

            <div className="selection-wrapper">
                { [...vegetables].map(v=>{
                    return <div key={v}><FoodCard name={v} /></div>
                }) }

                { [...special].map(v=>{
                    return <div key={v}><FoodCard name={v} /></div>
                }) }

                {[...meat].map(v => {
                    return <div key={v}><FoodCard name={v} /></div>
                })}
            </div>

            <Button
                color="red"
                radius="xl"
                uppercase
                styles={(theme) => ({
                        root: {
                            border: 0,
                            height: 100,
                            paddingLeft: 80,
                            paddingRight: 80,
                            fontSize: 50,
                            '&:hover': {
                                backgroundColor: "#A3BE8C",
                            },
                        },
                    })}

            >
                Order Now
            </Button>

        </div>
    )
}

export default TopingPicker
