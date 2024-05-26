import { useState } from "react"
import useDebounce from "../customhooks/useDebounce"

export default function DebounceComponent() {
    const [value, setCount] = useState(10);
     useDebounce(() => setCount(0), 1000, [value]);
    // Every time this component re-render the callback function creates
    // a new reference

    return (
        <div>
            <div>{value}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}