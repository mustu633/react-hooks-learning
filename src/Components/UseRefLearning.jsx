import { useRef, useState } from "react";

function UseRefLearning() {

    const [count, setCount] = useState(0);
    function handleOnClick (){
        setCount((prev)=> prev + 1);
    }

    const inpRef = useRef()

    const secondCount = useRef(0);

    console.log("component is rerendered")
    function controlFocus(){
        inpRef.current.placeholder = "Controll focus start";
        inpRef.current.focus();
    };

    function controlCount(){
        secondCount.current = secondCount.current + 1;
        console.log(secondCount);
    };

    return (
        <>
            <input type="text" placeholder="Type something ..." ref={inpRef} />
            <button onClick={controlFocus}>Focus</button>
            <hr />
            <h3>second count by useRef: {secondCount.current}</h3>
            <button onClick={controlCount}>Count</button>
            <hr />
            <h1>Count by useState: {count}</h1>
            <button onClick={handleOnClick}>Increase</button>
        </>
    )
}

export default UseRefLearning;