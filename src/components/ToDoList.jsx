import { useState,useEffect } from "react"

const List = ({item,index,onDelete,onEdit}) => {
    const [editText,setEditText] = useState(item)
    const [isEditText,setIsEditText] = useState(false)

   

    const handleEdit = () => {
        setIsEditText(true)
    }

    const handleSave = () => {
        onEdit(editText,index)
        setIsEditText(false)
    }
    
    return (
        <div className="todo-item">
            {
                isEditText ? (<input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>) : <span>{item}</span>
            }
           
            <div >
                {
                    isEditText ? (
                        <button style={{marginLeft:"10px",backgroundColor:"lightGreen",cursor:"pointer"}} onClick={handleSave}>Save</button>
                    ) : <button style={{marginLeft:"10px",backgroundColor:"lightGreen",cursor:"pointer"}} onClick={handleEdit}>Edit</button>
                }
                <button style={{marginLeft:"10px",backgroundColor:"red",cursor:"pointer"}} onClick={() => onDelete(index)}>Delete</button>
                
            </div>
            
        </div>
    )
}

const ToDoList = () => {
    const [items,setItems] = useState('')
    const [list,setList] = useState([])
    
    const handlerAddTodo = () => {
        setList([...list,items])
        localStorage.setItem("todoList", JSON.stringify(list));
        setItems('')
    }

    const deleteItems = (index) => {
        const updatedList = [...list]
       
        updatedList.splice(index,1)
        console.log(updatedList)
        setList(updatedList)
        localStorage.setItem("todoList", JSON.stringify(updatedList))
    }

    const editItem = (editText,index) => {
        const updatedList = [...list]
        updatedList[index] = editText
        setList(updatedList)
        localStorage.setItem("todoList", JSON.stringify(updatedList))
    }

   // Load list from local storage when component mounts
  useEffect(() => {
    const storedList = localStorage.getItem("todoList")
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);


    return (
        <div className="job-main-container">
            <h1>Todo List</h1>
            <div className="search-input">
                <input className="text-input" type="text" placeholder="Enter you todo item" value={items} onChange={(e) => setItems(e.target.value)}/>
                <button className="text-btn" onClick={handlerAddTodo}>Add List</button>
            </div>
            <div className="todo-list">
                {
                    list.map((item,index) => <List key={index} item={item} index={index} onDelete={deleteItems} onEdit={editItem}/>)
                }
            </div>
        </div>
    )
}

export default ToDoList