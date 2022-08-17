import { Button } from "@mantine/core"
import { usePizzaContext } from "../../Contexts/ToppingContext/PizzaContext"
import FoodCard from "./FoodCard"

// Interface für die Props
interface MeatSelectionProps {
    meat: {
        kind: string,
        mandatorytoppings: string[],
        notallowedtoppings: string[],
    }
}

function MeatSelection( props: MeatSelectionProps) {
    const { addMeat, meat } = usePizzaContext()
    const kind = props.meat.kind
    const selected = meat.has(kind)
    const picked = meat.size === 1

    return <Button
                // Accessability
                role="switch"
                aria-checked={selected}

                className="card selected"
                // Bei conditional styling mit mantine ist dies die best practice
                styles={() => ({
                        root: {
                            backgroundColor: selected ? "#A3BE8C" : "#00000000",
                        },
                    })}
                radius="xl"
                color={ picked ? "red" : "blue" }
                onClick={() => addMeat(kind, props.meat.mandatorytoppings, props.meat.notallowedtoppings)}
            >
                <FoodCard name={kind}/>
            </Button>
}
export default MeatSelection
