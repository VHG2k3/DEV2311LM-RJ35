import React from "react";
import Task from "./Task";

function ListTask({renderTasks , onEdit,onDelete }) {
  // event edit task
  const handleEditTask = (toggle,actionName,task)=>{
    onEdit(toggle,actionName,task)
  }

  const handleDelete = (task)=>{
    onDelete(task)
  }
  let elementTask = renderTasks.map((task,index)=>{
    return <Task key={index} 
            renderTask={task} 
            stt={index+1} 
            onEdit={handleEditTask}
            onDelete={handleDelete}/>
  })
  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <Task /> */}
           {elementTask}
        </tbody>
      </table>
    </div>
  );
}

export default ListTask;
