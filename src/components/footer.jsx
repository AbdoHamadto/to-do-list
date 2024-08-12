import { useState } from "react";

const Footer = ({deleteAll,newData ,data, showAll, noCommplete, commplete}) => {

    const [num, setNum] = useState(1)
    const all = () => {
        showAll()
        setNum(1);
    }
    const noDone = () => {
        const filter = newData.filter((item) => item.stateTask === false)
        noCommplete(filter)
        setNum(2);
    }
    const done = () => {
        const filter = newData.filter((item) => item.stateTask === true)
        commplete(filter)
        setNum(3)
    }


    const clear = () => {
        data = []
        deleteAll(data)
    }
    return (
        <>
            <div className="num-tske">{data.length} item left</div>
            <div className="optian">
                <span className={num === 1 ? "active" : ""} onClick={all}>All </span>
                <span className={num === 2 ? "active" : ""} onClick={noDone}>Active </span>
                <span className={num === 3 ? "active" : ""} onClick={done}>Complete</span>
            </div>
            <div className="delete-all" onClick={clear}>Clear Completed</div>
        </>
    )
}

export default Footer;