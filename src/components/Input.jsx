import { useState } from "react";

const Input = ({taskList, setTaskList}) => {
    const [input,setInput] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input]);
    }
    return (
        <>
           <div>
                <form className="flex flex-row items-center gap-3">
                    <input className= "border rounded-lg text-lg py-1.5 px-2.5"type="text" placeholder="Add a task" value={input} onChange={(e) => {
                        setInput(e.target.value);
                    }}/>
                    <button className = "bg-violet-400 rounded-lg px-3.5 py-2 text-white font-semibold hover:opacity-70"onClick={handleAddTask}>Add</button>
                </form>
           </div>
        </>
    )
}

export default Input;