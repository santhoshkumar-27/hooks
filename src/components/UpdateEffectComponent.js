import { useState } from "react"
import useUpdateEffect from "../customhooks/useUpdateEffect"

export default function UpdateEffectComponent() {
    const [value, setCount] = useState(() => 10);
    useUpdateEffect(() => alert(0), [value]);
//    useEffect trigges when mount time and update time also
//  this custom hooks avoid initial run and only run in the udpateing

    return (
        <div>
            <div>{value}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}