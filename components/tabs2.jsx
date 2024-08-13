import "./tabs2.css"

const Tabs2 = ({page, setPage}) => {


    return <div className="tabs2">
        <div className="tabs2__seq">
            <button onClick={()=>{setPage(1)}} className={"tabs2__seq__button" +
                " kanit-regular "+((page===1)?"tabs2__seq__button--active":"")}>
                today
            </button>
            <div className={"tabs2__seq__line "+((page===1)?"tabs2__seq__line--active":"")}></div>
        </div>
        <div className="tabs2__seq">
            <button onClick={()=>{setPage(2)}} className={"tabs2__seq__button" +
                " kanit-regular "+((page===2)?"tabs2__seq__button--active":"")}>
               weekly
            </button>
            <div className={"tabs2__seq__line "+((page===2)?"tabs2__seq__line--active":"")}></div>
        </div>
         <div className="tabs2__seq">
            <button onClick={()=>{setPage(3)}} className={"tabs2__seq__button" +
                " kanit-regular "+((page===3)?"tabs2__seq__button--active":"")}>
                monthly
            </button>
            <div className={"tabs2__seq__line "+((page===3)?"tabs2__seq__line--active":"")}></div>
        </div>
    </div>
}


export default Tabs2
