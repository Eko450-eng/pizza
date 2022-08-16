export const changeTopping = (currentState: Set<string>, value: string, type:string, disallowed: Set<string>, mandatory: Set<string>) => {
    const newSet = new Set(currentState)

    // Check ob die zutaten sicher entfernt werden können
    if( currentState.has(value) && !mandatory.has(value) ){
        newSet.delete(value)
        return newSet
    }

    // Check ob die zutaten sicher hinzugefügt werden dürfen
    if( type === "special" && currentState.size && !disallowed.has(value) ) return newSet
    if( type === "meat" && currentState.size && !disallowed.has(value) ) return newSet

    // Füge die zutaten hinzu wenn sie hinzugefügt werden dürfen
    if( !disallowed.has(value) ) newSet.add(value)
    return newSet
}

