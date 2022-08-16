import { createContext, FC, useContext, useState } from 'react'
import { IPizzaContextProps } from './Interfaces/IPizzaContextProps'
import { IPizzaInitialState } from './Interfaces/IPizzaInitialState'
import { toggleState } from './Effects/changeAmount'
import { errorNotification } from '../../Helpers/Notifications'

const PizzaContext = createContext<IPizzaContextProps>(null as any)


export const PizzaProvider: FC<IPizzaInitialState> = ({ children }) => {
    const [vegetables, setVegetables] = useState<Set<string>>(new Set())
    const [special, setSpecial] = useState<Set<string>>(new Set())
    const [meat, setMeat] = useState<Set<string>>(new Set())

    const checkMeat = (currentState: Set<any>, kind: string, mandatory: Array<string>, notAllowed: Array<string> ) => {
        const newSet = new Set(currentState)

        if(currentState.has(kind)){
            newSet.delete(kind)
            return newSet
        }

        const containsMandatory = () => {
            let all = mandatory.length
            for(let i = 0; i<mandatory.length; i++){
                if(( special.has(mandatory[i] ) || ( vegetables.has(mandatory[i])) )){
                    all--
                    if(all === 0){

                        return false
                    }
                }
            }
            errorNotification(`For ${kind} you also need to choose ${mandatory.join(' and ')}`)
            return true
        }

        const hasNotAllowed = () => {
            if(notAllowed !== undefined){
                for(let i = 0; i<notAllowed.length; i++){
                    if(( vegetables.has(notAllowed[i]) ) || ( vegetables.has(notAllowed[i]) )){
                        errorNotification(`You cant have ${kind} with ${notAllowed[i]}`)
                        return currentState
                    }
                }
                return false
            }
        }

        if (meat.size !== 0){
            return currentState
        }else if(( containsMandatory() ) || ( hasNotAllowed() )){
            return currentState
        }else{
            newSet.add(kind)
            return newSet
        }
    }


    const addVegetable = (value:any, type:string) => setVegetables(current => toggleState(current, value, type))
    const addSpecial = (value:any, type:string) => setSpecial(current => toggleState(current, value, type))
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
