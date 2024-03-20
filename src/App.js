
import './App.css';
import FileExplorer from './components/FileExplorer';
import { fileExplorerData } from "./utils/fileExplorerData"
import { useState } from "react"


// import ProductPagination from './components/ProductPagination';

function App() {
  const [explorer,setExplorer] = useState(fileExplorerData)
    console.log(explorer)
   return (
    <>
      {/* <ProductPagination/> */}
      <div className='main-table'>
        <FileExplorer explorer={explorer}/>
      </div>
      
    </>
   )
}

export default App;
