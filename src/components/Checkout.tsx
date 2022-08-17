import { usePizzaContext } from "../Contexts/ToppingContext/PizzaContext"
import DocumentTitle from 'react-document-title'

function Checkout() {
    const { vegetables, meat, special } = usePizzaContext()
    const order = [ ...vegetables, ...meat, ...special ]
    const total: Array<number> = []

    // Ein random number generator für Preise (Gute marketing strategie)
    const randomPrice = () =>{
        // Gibt eine zahl bis 10 mit 2 nachkommastellen aus und speichert sie ab
        const num = Math.round(Math.random() * 1000) / 100;
        total.push(num)
        return num
    }

    return(
        <DocumentTitle title="Checkout">
            <div className="checkout">
            <h2>Checkout</h2>
            <p>Great, your order is listed bellow</p>
                <ul>
                    {   order.map((i) => {
                            // adding to the total price
                            const price = randomPrice()
                            return <div key={i} className="checkout-wrapper">
                                {/* Hier teile ich das List item nur auf um es besser stylen zu können in CSS */}
                            <li>
                                <span className="capitalize">{ i } </span>
                                { `${ price } €` }
                            </li>
                            </div>
                        })
                    }
                </ul>
                {/* Rechne alles zusammen und zeige total */}
                <h3 className="total-price">{`Your total is ${(total.reduce((prev, current) => prev + current, 0)).toFixed(2) } €` }</h3>
            </div>
        </DocumentTitle>
    )

}
export default Checkout
