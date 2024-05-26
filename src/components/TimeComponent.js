import { useState } from "react"
import useTimeout from "../customhooks/useTimeout"

export default function TimeComponent() {
    const [value, setCount] = useState(10);
    const { clear, reset } = useTimeout(() => setCount(0), 1000);
    // Every time this component re-render the callback function creates
    // a new reference

    return (
        <div>
            <div>{value}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={clear}>Clear Timeout</button>
            <button onClick={reset}>Reset Timeout</button>
        </div>
    )
}