import { useReducer } from "react"

const initState = 0
const ACTIONS = {
    INCREASE: "increase",
    DECREASE: "decrease",
    RESET: "reset"
}
const reducer = (state, action) => {
    switch (action.type) {
        case "increase":
            return state + 1
        case "decrease":
            return state - 1
        case "reset":
            return initState
    }
}

export default function UseReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl">Count {state}</h1>
            <button onClick={() => dispatch({ type: ACTIONS.INCREASE })}>Increase</button>
            <button onClick={() => dispatch({ type: ACTIONS.DECREASE })}>Decrease</button>
            <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
        </div>
    )
}
