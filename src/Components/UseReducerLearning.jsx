import { useReducer } from "react";

function CountReducer(state, action){
    switch (action.type) {
        case "Increament":
            return state + action.value;
        case "Decreament":
            return state - action.value;
        case "Reset":
            return action.value;
        default:
            state;
    }
}

function UseReducerLearning (){

    const [count, dispatch] = useReducer(CountReducer, 0);

    return(
        <>
        <h5>count : {count}</h5>
        <button onClick={()=> dispatch({type: "Increament", value: 1})}>Increament</button>
        <button onClick={()=> dispatch({type: "Decreament", value: 1})}>Decreament</button>
        <button onClick={()=> dispatch({type: "Reset", value: 0})}>Reset</button>
        </>
    )
}

export default UseReducerLearning;