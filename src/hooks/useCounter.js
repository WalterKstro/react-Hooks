import { useState } from "react"

const useCounter = (initialState = 0) => {

    const [state, setState] = useState(initialState)

    const increment = () => {
        setState( state + 1 )
    }
    const decrement = () => {
        state === 1 ? setState( initialState ) : setState( state - 1 )
    }
    const reset = () => {
        setState( initialState )
    }

    return  {
        counter : state,
        increment,
        decrement,
        reset
    }
}
export default useCounter
