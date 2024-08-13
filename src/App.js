import Input from "./components/Input";
import Board from "./components/Board";
import { useState } from "react";
function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="px-12">
      <div className="flex flex-col justify-center items-center py-4 gap-4">
        <h1 className="text-xl font-semibold">To Do Board</h1>
        <Input taskList = {taskList} setTaskList = {setTaskList}/>
      </div>
      <div className="flex flex-col gap - 4 sm:grid sm:grid-cols-3 px:4 sm:px-8 md:px-10">
        {
          taskList.map( (task, index) => 
            <Board 
            task = {task} key = {index} index = {index} taskList={taskList} setTaskList={setTaskList}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
