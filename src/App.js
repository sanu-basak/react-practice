
import './App.css';
// import FileExplorer from './components/FileExplorer';
// import { fileExplorerData } from "./utils/fileExplorerData"
import { useEffect, useState } from "react"
// import JobBoard from './components/JobBoard';
import ToDoList from './components/ToDoList';
import Timer from './components/Timer';
import QuizApp from './components/QuizApp';
// import LikeButton from './components/LikeButton';
// import CustomUseMemo from './components/CustomUseMemo';
// import ProgressBar from './components/ProgressBar';
// import ProductPagination from './components/ProductPagination';

function App() {
    // const [explorer,setExplorer] = useState(fileExplorerData)
    // const [value,setValue] = useState(0)
    // useEffect(()=> {
    //   setInterval(() => {
    //     setValue((val) => val+1)
    //   },100)
    // },[])
    return (
      <>
        {/* <ProductPagination/> */}
        {/* <div className='main-table'>
          <FileExplorer explorer={explorer}/>
         
        </div> */}

        {/* <ProgressBar getValue={value}/> */}
        {/* <CustomUseMemo/> */}
        {/* <LikeButton/> */}
        {/* <JobBoard/> */}
        {/* <ToDoList/> */}
        {/* <Timer/> */}
        <QuizApp/>
        
      </>
   )
}

export default App;
