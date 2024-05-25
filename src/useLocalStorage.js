import { useDebugValue, useEffect, useState } from "react";

function getLocalStorage(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));

    if (savedValue)  return savedValue;

    if (initialValue instanceof Function) return initialValue();

    return initialValue;
}

/**
 * @description use to store and retrive the data store in the localStorage
*/
export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => getLocalStorage(key, initialValue));


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])


    // useDebbugValue works only inside the custom hooks

    useDebugValue(value) // show the value in the label next to the custom hook name
    // it available for development and production

    // to show the state of this hook

    return [value, setValue]
}