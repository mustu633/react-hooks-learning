// Here we access and change the name that we create using context api
import { useContext, useRef, useState } from "react";
import NameContext from "./ContextApiLearning";

function AccountDetail() {

    const { myName, changeName } = useContext(NameContext);

    const[inpData, setInpData] = useState("");

    const inpRef = useRef();

    function handleInpData(){
        setInpData(inpRef.current.value);
    }

    return (
        <>
            <h2>Your current Name is : {myName}</h2>
            <hr />
            <p>Change your Name : </p>
            <input type="text" placeholder="Type your new Name here .." ref={inpRef} onChange={handleInpData}/>
            <br />
            <br />
            <button onClick={() => changeName(inpData)}>Change Name</button>
        </>
    )
}

export default AccountDetail;