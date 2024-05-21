import { useEffect, useState } from "react"

export function List({
    getItems
}) {

    const [state, setState] = useState(() => []);

    useEffect(() => {
        setState(getItems(0));
        console.log('this is updated')
    }, [getItems])
    return (
        <ul>
            {
                state.map((list, index) => (<li key={index}>{list}</li>))
            }
        </ul>
    )
}