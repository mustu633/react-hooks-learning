import { useImperativeHandle, useRef, forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => {

    const inpRef = useRef();

    useImperativeHandle(ref, () => ({
        handleClear: () => {
            inpRef.current.value = "";
        },
        handleFocus: () => {
            inpRef.current.focus();
        },
    }));

    return (
        <>
            <hr />
            <input ref={inpRef} type="text" placeholder="Type Something ..." />
            <br /><br />
        </>
    );
});

export default ChildComponent;
