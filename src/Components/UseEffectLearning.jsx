import { useEffect, useState } from "react";

function UseEffectLearning() {

    const [count, setCount] = useState(0);

    const [isLike, setIsLike] = useState(true);

    console.log("component is rerendered")


    function handleOnClick() {
        setCount((prev) => prev + 1);
    }

    useEffect(()=>{
        console.log("useEffect run due to component run")
        setIsLike(!isLike);
    }, [count])

    return (
        <>
            <h3>{isLike ? "Like" : "Unlike"}</h3>
            <h1>Count: {count}</h1>
            <button onClick={handleOnClick}>Increase</button>
        </>
    )
}

export default UseEffectLearning;