import { image } from "../styles/icons/images"

// Interface für die Props
type FoodCardProps = {
    name: string
}

function FoodCard(props: FoodCardProps) {
    const name = props.name

    return <div className="card">
        { image[ name ] && <img className="img margin-1" src={ image[name] } title={`An image of delicious looking ${ name }`} alt={`of delicious looking ${ name }`} /> }
        { name }
    </div>
}
export default FoodCard
