import { useState } from "react";

function UseStateLearning() {

    const [count, setCount] = useState(0);

    const [isLike, setIsLike] = useState(true);

    console.log("component is rerendered")


    function handleOnClick (){
        setCount((prev)=> prev + 1);
    }

    function handleLike(){
        setIsLike(!isLike);
    }

    return (
        <>
            <h3>{isLike ? "Like" : "Unlike"}</h3>
            <h1>Count: {count}</h1>
            <button onClick={handleOnClick}>Increase</button>
            <button onClick={handleLike}>Like</button>
        </>
    )
}

export default UseStateLearning;