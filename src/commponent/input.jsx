import { useState } from "react";

const Input = ({data , reception}) => {
    const [title, setTitle] = useState("")
    const [count, setCount] = useState(0)
    const handleKeyDown = (event) => {
        const key = event.key;
        if (key === 'Enter' && title.trim() !== "") {
            setCount(count + 1)
            const newData = [...data, {id: count, taske: title, stateTask: false}]
            reception(newData)
            setTitle("")
        }
    };
    return (
        <>
            <input type="text" placeholder="Creat a new todo..." className="input" onKeyDown={handleKeyDown} onChange={(e) => setTitle(e.target.value)} value={title}/>
        </>
    )
}

export default Input;