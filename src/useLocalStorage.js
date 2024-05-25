import { useEffect, useState } from "react";

function getLocalStorage(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));

    if (savedValue)  return savedValue;

    if (initialValue instanceof Function) return initialValue();

    return initialValue;
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => getLocalStorage(key, initialValue));


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])


    return [value, setValue]
}