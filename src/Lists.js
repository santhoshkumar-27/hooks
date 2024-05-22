import { useMemo, useDeferredValue } from "react";


export function List({ input }) {
    const list_size = 20000;
    const inputDeferred = useDeferredValue(input)
    /*
        use deferred value as input value and it will wait the particular input state need to updating finishing
        if during the updating state it will give the old value, of original state will done the updating and render and not distrubed the any of its
        useDeferredvalue gives the new value updated
        so the useMemo take care of their work
    */
    const list = useMemo(() => {
        if (!input) {
            return []
        }
        let l = [];
        for (let i = 1; i < list_size; i++) {
            l.push(inputDeferred);
        }
        return l;
    }, [inputDeferred])
    return (
        <ul>{
            list.map((li, i) => <li key={i}>{li}</li>)
        }</ul>
    )
}