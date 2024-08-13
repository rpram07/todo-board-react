const Board = ({task, index, taskList, setTaskList}) => {
    function handleDelete() {
        let ind = taskList.indexOf(task);
        const [...newList] = taskList;
        newList.splice(ind, 1);
        setTaskList(newList);
    }
    return (
        <>
            <p>{task}</p>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default Board;