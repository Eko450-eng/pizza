import { Button } from "@mantine/core"
import { usePizzaContext } from "../../Contexts/ToppingContext/PizzaContext"
import { image } from "../../styles/icons/images"

function ToppingsCheckbox({ title, type }:{ title:string, type:string }) {
    const { addVegetable, addSpecial, vegetables, special } = usePizzaContext()

    const selected = vegetables.has(title) || special.has(title)

    return <Button
                className={selected ? "selection-card selected" : "selection-card"}
                radius="xl"
                    color={"red"}
                    onClick={() => {
                        switch(type){
                            case "vegetable":
                                addVegetable(title, type)
                                return
                            case "special":
                                addSpecial(title, type)
                                return
                        }
                    }}
            >
                {
                    image[title] &&
                        <img className="img margin-1" src={image[title]} title={`An image of delicious looking ${title}`} alt={`of delicious looking ${title}`} />
                }
            {title}
            </Button>
}
export default ToppingsCheckbox
