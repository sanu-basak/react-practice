import { useEffect, useState } from "react"

const ProgressBar = ({getValue = 0}) => {
    const [percent,setPercent] = useState(getValue)

    useEffect(() => {
        setPercent(Math.min(100,Math.max(getValue,0)))
    },[getValue])
    return (
        <div className="progress-main-container">
            <span>Progress Bar</span>
            <div className="progress">
                <span style={{color:percent > 49 ? "white" : "black"}}>{percent.toFixed()}%</span>
                <div style={{width:`${percent}%`}}></div>
            </div>
        </div>
        
    )
}

export default ProgressBar