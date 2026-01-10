import { useId } from "react";

function UseIdLearning(){

    let inpId = useId();
    let inpId2 = useId();
    let inpId3 = useId();

    return(
        <>
        <h2>Component : </h2>
        <input type="checkbox" id={inpId} />
        <label htmlFor={inpId}>Rule 1</label>
        <hr />
        <input type="checkbox" id={inpId2} />
        <label htmlFor={inpId2}>Rule 2</label>
        <hr />
        <input type="checkbox" id={inpId3} />
        <label htmlFor={inpId3}>Rule 3</label>
        <hr />
        </>
    )
}

export default UseIdLearning;