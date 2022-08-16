import { createContext, FC, useContext, useState } from 'react'
import { IPizzaContextProps } from './Interfaces/IPizzaContextProps'
import { IPizzaInitialState } from './Interfaces/IPizzaInitialState'
import { errorNotification } from '../../Helpers/Notifications'
import { changeTopping } from './Effects/changeTopping'

const PizzaContext = createContext<IPizzaContextProps>(null as any)


export const PizzaProvider: FC<IPizzaInitialState> = ({ children }) => {
    // Die toppings
    const [vegetables, setVegetables] = useState<Set<string>>(new Set())
    const [special, setSpecial] = useState<Set<string>>(new Set())
    const [meat, setMeat] = useState<Set<string>>(new Set())

    // Damit keiner im nachinein topping raus/rein nehmen kann
    const [disallowed, setDisallowed] = useState<Set<string>>(new Set())
    const [mandatory, setMandatory] = useState<Set<string>>(new Set())

    const checkMeat = (currentState: Set<any>, kind: string, mandatory: Array<string>, notAllowed: Array<string> ) => {
        const newSet = new Set(currentState)

        // resete das Set für fleisch
        if(currentState.has(kind)){
            newSet.delete(kind)
            setMandatory(new Set())
            setDisallowed(new Set())
            return newSet
        }

        // Check ob mandatory zutaten gegeben sind
        const containsMandatory = () => {
            let all = mandatory.length
            for(let i = 0; i<mandatory.length; i++){
                if(( special.has(mandatory[i] ) || ( vegetables.has(mandatory[i])) )){
                    setMandatory( current => current.add(mandatory[i]) )
                    all--
                    if(all === 0) return false
                }
            }
            errorNotification(`For ${kind} you also need to choose ${mandatory.join(' and ')}`)
            return true
        }

        // Check ob illegale zutaten gegeben sind
        const hasNotAllowed = () => {
            if(notAllowed !== undefined){
                for(let i = 0; i<notAllowed.length; i++){
                    setDisallowed( current => current.add(notAllowed[i]) )
                    console.log(disallowed)
                    if(( vegetables.has(notAllowed[i]) ) || ( vegetables.has(notAllowed[i]) )){
                        errorNotification(`You cant have ${kind} with ${notAllowed[i]}`)
                        return currentState
                    }
                } return false
            }
        }

        // Check ob bereits ein fleisch ausgewählt wurde
        if (meat.size !== 0) return currentState
        if(( containsMandatory() ) || ( hasNotAllowed() )) return currentState
        // Füge fleisch zur pizza hinzu
        newSet.add(kind)
        return newSet
    }

    const addVegetable = (value:any, type:string) => setVegetables(current => changeTopping(current, value, type, disallowed, mandatory))
    const addSpecial = (value:any, type:string) => setSpecial(current => changeTopping(current, value, type, disallowed, mandatory))
    const addMeat = (name:string, mandatory:any, notAllowed:any) => setMeat(current => checkMeat(current, name, mandatory, notAllowed))

    const value = {
        vegetables,
        special,
        addVegetable,
        addSpecial,
        addMeat,
        meat,
    }

    return <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
}

export const usePizzaContext = (): IPizzaContextProps => useContext<any>(PizzaContext)
