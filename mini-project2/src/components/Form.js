import React, { useEffect, useState } from "react";

function Form({onCancel,onSubmit,renderTask,actionName}) {
  
  console.log("form render task:",renderTask,actionName);
  const [task, setTask] = useState(renderTask);
  const [addUpdate,setActionName] = useState(actionName);
  useEffect(()=>{
    setTask(renderTask);
  },[renderTask]);
  useEffect(()=>{
    setActionName(actionName);
  },[actionName]);

  const handleChange = (ev)=>{
    let name=ev.target.name;
    let value=ev.target.value;
    setTask(task=>{
      return {
        ...task,
        [name]:value,
      }
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
      onSubmit(task)
  }
  const handleCancel = ()=>{
    onCancel()
  }
  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form action="" method="POST" className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="taskName"
              value={task.taskName || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              name="level"
              value={task.level || 'Medium'}
              onChange={handleChange}
              id="inputDs"
              className="form-control"
              required="required"
            >
              <option value={'Small'}>Small</option>
              <option value={'Medium'}>Medium</option>
              <option value={'High'}>High</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            {addUpdate}
          </button>
          <button 
              onClick={handleCancel}
              type="button" 
              className="btn btn-default">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
