import './App.css'
import Tabs from "../components/tabs.jsx";
import Tabs2 from "../components/tabs2.jsx";
import {useState} from "react";
import Home from "../pages/home.jsx";
import Today from "../pages/today.jsx";
import Weekly from "../pages/weekly.jsx";
import Monthly from "../pages/monthly.jsx";

function App() {

  const [page, setPage] = useState(0);

  return <>
    <div className="navbar">
      <h2 className="navbar__title kanit-bold">
        Habits
      </h2>
      <Tabs2 page={page} setPage={setPage} />
    </div>
    <div className="navbar__line"></div>

    <div className="mainbody">
      {page===0? <Home/> : page===1? <Today/> : page===2? <Weekly/> : <Monthly/> }
    </div>


  </>
}

export default App
