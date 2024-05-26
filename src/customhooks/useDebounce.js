import { useCallback, useEffect, useRef } from "react"
import useTimeout from "./useTimeout"

export default function useDebounce(callback, delay, dependency) {
    const { reset, clear } = useTimeout(callback, delay);
    useEffect(reset, [...dependency, reset]);
    useEffect(clear, [])
}