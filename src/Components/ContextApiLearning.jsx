// here we create a name context so that we access name and also the function to change the name in all component. we try to get access and chnge name from another component named as : AccountDetail.jsx


import { createContext, useState } from "react";

const NameContext = createContext();

export const NameProvider = ({ children }) => {

    const [myName, setMyName] = useState("Mustafa");

    function changeName(newName) {
        setMyName(newName);
    }

    return (
        <NameContext.Provider value={{ myName, changeName }}>
            {children}
        </NameContext.Provider>
    )
}

export default NameContext;