import { useMemo, useState } from "react"
import useCustomMemo from "../hooks/useCustomMemo"

const CustomUseMemo = () => {
    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(100)
    

    const sqaureCounter1 = () => {
        console.log('Expensive calculation here')
        return counter1 * counter1
    }

    // const memoised = useMemo(sqaureCounter1,[counter1])
    const memoised = useCustomMemo(sqaureCounter1,[counter1])
    
    return (
        <div style={{margin: "0 auto",textAlign:"center"}}>
            <h1>Counter1 : {counter1}</h1>
            <button onClick={() => setCounter1(counter1+1)}>Increment</button>
            <h2>Squared value : {memoised}</h2>
            <h1>Counter2 : {counter2}</h1>
            <button onClick={() => setCounter2(counter2-1)}>Decrement</button>
        </div>
    )
}

export default CustomUseMemo