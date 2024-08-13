const Board = ({task, index, taskList, setTaskList}) => {
    function handleDelete() {
        let ind = taskList.indexOf(task);
        const [...newList] = taskList;
        newList.splice(ind, 1);
        setTaskList(newList);
    }
    return (
        <div className = "max-w-xl flex flex-col justify-center items-center border text-center text-lg pt-3 pb-4 px-4 md:px-6">
            <p>{task}</p>
            <button className = "bg-red-500 rounded border px-2 py-1 text-white mt-4" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Board;