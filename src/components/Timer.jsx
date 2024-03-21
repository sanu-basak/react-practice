import {useRef, useState} from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const timerRef = useRef()

    const handleStart = () => {
        timerRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1000)
        },1000)
       
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const handleStop = () => {
        clearInterval(timerRef.current)
    } 

    return (
        <div>
            <div>
                <h1>Timer - Stopwatch</h1>
                <h1>Timer : {formatTime(timer)}</h1>
            </div>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
           
        </div>
    )
}

export default Timer