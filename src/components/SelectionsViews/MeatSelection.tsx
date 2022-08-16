import { Button } from "@mantine/core"
import { usePizzaContext } from "../../Contexts/ToppingContext/PizzaContext"
import { image } from "../../styles/icons/images"

interface MeatSelectionProps {
    meat: {
        kind: string,
        mandatorytoppings: string[],
        notallowedtoppings: string[],
    }
}

function MeatSelection( props: MeatSelectionProps) {
    const { addMeat, meat } = usePizzaContext()
    console.log(props)
    const kind = props.meat.kind

    const selected = meat.has(kind)

    return <Button
                className={selected ? "selection-card selected" : "selection-card"}
                radius="xl"
                    color={"red"}
                    onClick={() => {
                        addMeat(kind, props.meat.mandatorytoppings, props.meat.notallowedtoppings)
                    }}
                >

                    {
                        image[kind] &&
                            <img className="img margin-1" src={image[kind]} title={`An image of delicious looking ${kind}`} alt={`of delicious looking ${kind}`} />
                    }

                    { props.meat.kind }
            </Button>
}
export default MeatSelection
