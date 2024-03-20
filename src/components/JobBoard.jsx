import { useEffect, useState } from "react"

const JOB_API_ENDPOINTS = `https://hacker-news.firebaseio.com/v0`
const ITEMS_PER_PAGE = 6

const JobBoard = () => {

    const [items,setItems] = useState([])
    const [itemIds,setItemIds] = useState(null)
    const [currentPage,setCurrentPage] =  useState(0)
    
   

    const fetchJobData = async (currPage = 0) => {

        let itemList = itemIds

        if(itemList == null){
            const response = await fetch(JOB_API_ENDPOINTS+"/jobstories.json")
            itemList = await response.json()
            setItemIds(itemList)
        }
        
        const itemIdsForPage = itemList.slice(
            currPage * ITEMS_PER_PAGE,
            currPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        )

        const itemsForPage = await Promise.all(
            itemIdsForPage.map((itemId) => 
            fetch(`${JOB_API_ENDPOINTS}/item/${itemId}.json`).then((response) => response.json()))
            
        )

        console.log(itemsForPage)
        setItems([...items,...itemsForPage])
        
        
    }

    useEffect(() => {
        fetchJobData()
    },[])

    return (
        <div className="job-main-container">
            <h1>Job Board</h1>
            {
                items.map((item) => {
                    return (
                        <div className="job-card" key={item.id}>
                            <span>{item.title}</span>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <span>{item.by}</span>
                                <span>{item.time}</span>
                            </div>
                        </div>
                    )
                })
            }
           
            <div>
                <button onClick={() => fetchJobData(currentPage+1)} className="load-more">Load More</button>
            </div>
        </div>
    )
}

export default JobBoard