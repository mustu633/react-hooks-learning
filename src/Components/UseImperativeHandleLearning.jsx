// This file is act as a Parent component which call its child component : "ChildComponent"
// For this example child component was created named as : ChildComponent, its file name is : ChildComponent.jsx

import { useRef } from "react";
import ChildComponent from "./ChildComponent.jsx";

function UseImperativeHandleLearning() {

    const childRef = useRef();

    function handleConsole() {
        console.log(childRef);
    }

    return (
        <>
            <h5>UseImperativeHandleLearning Component.</h5>
            <ChildComponent ref={childRef} />
            <button onClick={() => childRef.current.handleClear()}>Reset</button>
            <button onClick={() => childRef.current.handleFocus()}>Focus</button>
            <button onClick={handleConsole}>console</button>
        </>
    )
}

export default UseImperativeHandleLearning;