import { Button } from "@mantine/core"
import { usePizzaContext } from "../../Contexts/ToppingContext/PizzaContext"
import FoodCard from "./FoodCard"

function ToppingsCheckbox({ title, type }:{ title:string, type:string }) {
    const { addVegetable, addSpecial, vegetables, special } = usePizzaContext()

    const selected = vegetables.has(title) || special.has(title)
    const picked = special.size === 1

    return <Button
                // Accessability
                role="switch"
                aria-checked={selected}

                className="card"
                // Conditional styling mit mantine ist dies die best practice
                styles={() => ({
                        root: {
                            backgroundColor: selected ? "#A3BE8C" : "#00000000",
                        },
                    })}
                radius="xl"
                color={ picked && type === "special" ? "red" : "blue" }
                onClick={ () => {
                    switch( type ){
                        case "vegetable":
                            addVegetable( title, type )
                            return
                        case "special":
                            addSpecial( title, type )
                            return
                    }
                }}
            >
                <FoodCard name={ title } />
            </Button>
}
export default ToppingsCheckbox
