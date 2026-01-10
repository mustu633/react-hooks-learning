import { useState, useDeferredValue, useTransition } from "react";

function UseDeferredValueLearning() {
    const [city, setCity] = useState("Skardu");

    // transition hook
    const [isPending, startTransition] = useTransition();

    // deferred (slow) version of city
    const deferredCity = useDeferredValue(city);

    function handleChange() {
        startTransition(() => {
            setCity("Islamabad");
        });
    }

    // heavy component (fake slow work)
    function HeavyComponent({ city }) {
        let total = 0;
        for (let i = 0; i < 1000000000; i++) {
            total += i;
        }
        return <h3>City Data Loaded for: {city}</h3>;
    }

    return (
        <>
            <h2>Current city is: {city}</h2>

            {/* Loading shown ONLY when React is busy */}
            {(isPending || city !== deferredCity) && <h1>Loading...</h1>}

            <HeavyComponent city={deferredCity} />

            <button onClick={handleChange}>Change City</button>
        </>
    );
}

export default UseDeferredValueLearning;
