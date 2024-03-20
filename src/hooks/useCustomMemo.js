import { useEffect, useRef } from "react"

const useCustomMemo = (cb,deps) => {
    //variable or state -> cached value
    const memoisedRef = useRef(null)

    const isEqual = (prevDeps,nextDeps) => {
        if(prevDeps === null) return false
        if(prevDeps.length !== nextDeps.length) return false
        for(let i=0; i<prevDeps.length;i++){
            if(prevDeps[i] !== nextDeps[i]) return false
        }

        return true
    }
    // changes in deps
    if(!memoisedRef.current || !isEqual(memoisedRef.current.deps,deps)){
        memoisedRef.current = {
            value: cb(),
            deps
        }
    }
    //Cleanup logic

    useEffect(() => {
        return () => {
            memoisedRef.current = null
        }
    },[])
    // return the memoised value - if any
    return memoisedRef.current.value
}

export default useCustomMemo