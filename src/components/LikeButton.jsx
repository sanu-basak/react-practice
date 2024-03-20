import { useState } from "react"
import { HeartIcon, SpinnerIcon } from "../icons"

const LikeButton = () => {
    const [liked,setLiked] = useState(false)
    const [isFetching,setIsFetching] = useState(false)
    const [error,setError] = useState(null)

    const handleLikeButton  = async () => {
        setIsFetching(true)
        setError(null)

        try {

            const data = await fetch("https://www.greatfrontend.com/api/questions/like-button",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    action: liked ? "unlike" : "like"
                })
            })

            const json = await data.json()

            if(data.status >=200 && data.status <= 300){
                setLiked(!liked)
            }else{
                setError(json.message)
            }
            console.log(json)

        } finally {
            setIsFetching(false)
        }

    }

    return (
        <div>
            <button disabled={isFetching} className={`like-btn ${liked ? "liked" : ""} `} onClick={handleLikeButton}>
                {
                    isFetching ? <SpinnerIcon/> : <HeartIcon/> } {liked ? 'Liked' : 'Like' }
              
                
            </button>
            <h1>{error}</h1>
        </div>
       
    )
}

export default LikeButton