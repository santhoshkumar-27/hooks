import { useId } from "react"

export function EmailFrom() {
    const id = useId();
    // it will give same id when its re-render after the initial render of ui but in the same order before
    // if we use dom api to mainipulate these it will not work
    // we need to use of useRef
    return (
        <>
            <label htmlFor={`${id}-email`}>Email</label>
            <input id={`${id}-email`} name="email" />
        </>
    )
}