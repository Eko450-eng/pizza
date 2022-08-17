import { usePizzaContext } from '../Contexts/ToppingContext/PizzaContext'
import data from '../data/pizza.json'
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { errorNotification } from '../Helpers/Notifications';
import Sections from './UIComponents/Sections';
import MeatSelection from './UIComponents/MeatSelection';
import FoodCard from './UIComponents/FoodCard';
import DocumentTitle from 'react-document-title'

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
const vegetablesData = pizzaData.vegetables;
const specialsData = pizzaData.specials;
const meatsData = pizzaData.meat;

const TopingPicker = () => {
    const navigate = useNavigate()
    const { vegetables, special, meat } = usePizzaContext()

    const handleOrder = () =>{
        if(vegetables.size !== 0) return navigate("/checkout")
        errorNotification("Please choose at least one vegetable!")
    }

    return (
        <DocumentTitle title="Pizza Configurator">
            <div className="topping-picker">
                <h1>Welcome, please choose your topping</h1>

                <Sections step="STEP 1" kind="vegetable" data={ vegetablesData } />
                <Sections step="STEP 2" kind="special" data={ specialsData } />

                <div className="sections">
                    <div>
                        <h2>STEP 3</h2>
                        <h3>Meat</h3>
                    </div>

                    <div className="selection-wrapper">
                        {meatsData.map((meat) => {
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
                    onClick={()=>handleOrder()}
                    styles={() => ({
                            root: {
                                border: 0,
                                height: 100,
                                paddingInline: 20,
                                marginBottom: 70,
                                fontSize: 20,
                                '&:hover': {
                                    backgroundColor: "#A3BE8C",
                                },
                            },
                        })}

                >
                    Order Now
                </Button>

            </div>
        </DocumentTitle>
    )
}

export default TopingPicker
