import { useId } from "react"

export function EmailFrom() {
    const id = useId();
    // it will give same id when its render but in the same order before
    // if we use dom api to mainipulate these it will not work
    // we need to use of useRef
    return (
        <>
            <label htmlFor={id}>Email</label>
            <input id={id} name="email" />
        </>
    )
}