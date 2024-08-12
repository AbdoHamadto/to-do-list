import { useState } from "react";
import deleteTaske from "../images/icon-cross.svg"

const List = ({data, stTaske, removeTaske}) => {
    
    const [reload, setReload] = useState(true)
    const state = (index) => {
        data[index].stateTask = !data[index].stateTask;
        stTaske(data)
        setReload(!reload)
    }
    
    const remove = (index) => {
        removeTaske(index)
    }
    
    return (
        <>
            {data.map((item, index) => 
                <li key={item.id} >
                    <div className="taske"  >
                        <input id={item.id} className={item.stateTask ? "done" : ""} type="checkbox" onClick={() => state(index)} />
                        <label htmlFor={item.id} className={item.stateTask ? "done" : ""} > {item.taske}  </label>
                    </div>
                    <div className="del" onClick={() => remove(item.id)}><img src={deleteTaske}/></div>
                </li>)
            }
        </>
    )
}

export default List;