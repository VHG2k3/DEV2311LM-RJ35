import React from "react";

function Task({renderTask,stt,onEdit,onDelete}) {
  const handleEditTask = (renderTask)=>{
    onEdit(true,"Update",renderTask)
  }
  const handleDelete = (task)=>{
    if(window.confirm('Bạn có chắc chắn xóa không?')===true)
      onDelete(task)
  }
  let level = "";
  if(renderTask.level==="Small"){
    level=<span className="label label-default">Small</span>
  }else if(renderTask.level==="Medium"){
    level=<span className="label label-info">Medium</span>
  }else{
    level=<span className="label label-danger">High</span>
  }
  return (
    <>
      <tr>
        <td className="text-center">{stt}</td>
        <td>
          {renderTask.taskName}
        </td>
        <td className="text-center">
          {level}
        </td>
        <td>
          <button type="button" className="btn btn-warning"
            onClick={()=>handleEditTask(renderTask)}>
            Edit
          </button>
          <button type="button" className="btn btn-danger" 
            onClick={()=>handleDelete(renderTask)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Task;
