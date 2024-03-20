import { useState } from "react"

const FileExplorer = ({explorer}) => {
    const [expand,setExpand] = useState(false)
    if(explorer.isFolder){
        return (
            <div style={{marginTop5: 5}}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span> 📁 {explorer.name}</span>
                </div>
                <div style={{display:expand? "block" : "none",paddingLeft:5}}>
                    {
                        explorer.items.map((exp) => {
                            return <FileExplorer key={exp.id} explorer={exp}/>
    
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <span className="file"> 🗒️{explorer.name}</span>
        )
    }
    
}

export default FileExplorer