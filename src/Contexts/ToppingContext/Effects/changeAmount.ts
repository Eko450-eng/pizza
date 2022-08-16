import { usePizzaContext } from "../PizzaContext"

export const toggleState = (currentState: Set<string>, value: string, type:string) => {
    const newSet = new Set(currentState)
    if(currentState.has(value)){
        newSet.delete(value)
        return newSet

    }else if((type === "special") && (currentState.size !== 0)) {
        return newSet
    }else if((type === "meat") && (currentState.size !== 0)) {
        return newSet
    }
    newSet.add(value)
    return newSet
}

