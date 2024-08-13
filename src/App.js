import Input from "./components/Input";
import Board from "./components/Board";
import { useState } from "react";
function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <h1>TO DO BOARD</h1>
      <Input taskList = {taskList} setTaskList = {setTaskList}/>
      <div>
        {
          taskList.map( (task, index) => 
            <Board 
            task = {task} key = {index} index = {index} taskList={taskList} setTaskList={setTaskList}
            />
          )
        }
      </div>
      <Board />
    </>
  );
}

export default App;
