import { useEffect } from "react";

/**
 * @description use to log the the state of application when changes
*/
export default function useLoggerValue(value) {
    useEffect(() => {
        console.log('useLoggerValue', value)
    }, [value])
}