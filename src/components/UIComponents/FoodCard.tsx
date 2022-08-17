import { image } from "../../styles/icons/images"

// Interface für die Props
type FoodCardProps = {
	name: string
}

function FoodCard(props: FoodCardProps) {
	const name = props.name

	return <div className="card">
		{image[name] && <img loading="lazy" className="img margin-1" src={image[name]} title={`An image of delicious looking ${name}`} alt={`of delicious looking ${name}`} />}
		<p className="capitalize">
			{name}
		</p>
	</div>
}

export default FoodCard
