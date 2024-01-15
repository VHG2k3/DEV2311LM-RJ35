import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import ListTask from "./components/ListTask";
import Control from "./components/Control";
import Form from "./components/Form";

function App() {
  // 5.1:
  // Tạo mock data
  const listTasks = [
    {taskId:1, taskName:"Học lập trình frontend",level:"Small"},
    {taskId:2, taskName:"Học lập trình reactjs",level:"Medium"},
    {taskId:3, taskName:"Lập trình với Frontend - Reactjs",level:"High"},
    {taskId:4, taskName:"Lập trình Fullstack (PHP, Java, NetCore)",level:"Small"},
  ]

  // const listTasks=[]
  // tạo state lưu mockData
  // const [tasks, setTasks] = useState(listTasks);
  const [tasks, setTasks] = useState(()=>{
    const lists = JSON.parse(localStorage.getItem("DEV2302LMRJ_TASKS"));
      if(lists === null || lists.length ===0){
        return listTasks;
      }else{
        return lists;
      }
  });
 
  // khi tasks thay đổi thì cập nhật localStorage
  useEffect(()=>{
    // localStorage.setItem("DEV2302LMRJ_TASKS",JSON.stringify(tasks))
    // setData(tasks)
  },[tasks])

  // task: add, edit
  let initTask = {
    taskId: 0,
    taskName:'',
    level: 'Medium',
  }
  const [task, setTask] = useState(initTask);
  // flag: add, edit
  const [actionName,setActionName] = useState("Add");
  // 5.2 toggle form
  const [isToggle, setToggle] = useState(false);

  // sự kiện cancel form
  const handleCancel = () => {
    setToggle(false);
  };

  // sự kiện add task / edit task
  const handleAddOrEditTask = (toggle,actionName,task) => {
    setToggle(toggle);
    setActionName(actionName);
    if(task==null)
      setTask(initTask)
    else
      setTask(task)
  };
 

  // Thêm mới / Sửa một task vào listtask
  const handleSubmit=(task)=>{
    let list=[...tasks];
    // xử lý trường hợp thêm mới
    if(actionName==="Add"){
      setTasks(prev =>{
        const taskIdAdd = ()=>{
          let idMax = 0;
          for (let i = 0; i < list.length; i++) {
            if(idMax < list[i].taskId){
              idMax = list[i].taskId;
            }
          }
          return idMax;
        };
        const taskAdd = {
          taskId:taskIdAdd()+1,
          taskName:task.taskName,
          level:task.level
        }
        list=[...prev,taskAdd]
        localStorage.setItem("DEV2302LMRJ_TASKS",JSON.stringify(list))
        setToggle(false);
        return [...prev,taskAdd]
      })
    }else{
      setTasks(prev=>{
        for (let index = 0; index < prev.length; index++) {
            if(prev[index].taskId === task.taskId){
              prev[index] = task;
              break;
            }          
        }
        list = [...prev];
        localStorage.setItem("DEV2302LMRJ_TASKS",JSON.stringify(list))
        setToggle(false);
        return [...prev];
      })
    }
    
  }
  // sự kiện xóa
  const handleDelete = (task)=>{
    let list = []
    setTasks(prev=>{
      for (let index = 0; index < prev.length; index++) {
        if(prev[index].taskId === task.taskId){
          prev.splice(index,1);
        }          
      } 
      list=[...prev];
      localStorage.setItem("DEV2302LMRJ_TASKS",JSON.stringify(list))
      return [...prev];
    })
   
  }

  // search
  const [keyword,setKeyWord] = useState();
  const handleSearch=(keyBySearch)=>{
    console.log("keyBySearch:",keyBySearch);
    setKeyWord(keyBySearch);
  }
  useEffect(()=>{
    const lists = JSON.parse(localStorage.getItem("DEV2302LMRJ_TASKS"));
    if(keyword ===undefined || keyword==="" || keyword===null){
      if(lists===null || lists.length === 0)
        setTasks(listTasks)
      else 
        setTasks(lists);
    }else{
      let dataFilter = tasks.filter(x=>x.taskName.includes(keyword))
      setTasks(dataFilter);
    }
  },[keyword])

  // state sort
  const [sort, setSort] = useState('');

  // Sort
  const handleSort=(sort)=>{
    setSort(sort);
  }
  // khi sort thay đổi
  useEffect(()=>{
    console.log("App:",sort);
    if(sort !=''){
      if(sort.nameBy === "Name"){
        if(sort.orderBy ==="ASC"){
          let dataSort = tasks.sort((x,y)=>{
                let nameX = x.taskName.toUpperCase();
                let nameY = y.taskName.toUpperCase();
                return nameX>nameY?1:(nameX<nameY)?-1:0;
              });
          setTasks([...dataSort])
        }else{
          let dataSort = tasks.sort((x,y)=>{
            let nameX = x.taskName.toUpperCase();
            let nameY = y.taskName.toUpperCase();
            return nameX>nameY?-1:(nameX<nameY)?1:0;
          });
          setTasks([...dataSort])
        }
      }else if(sort.nameBy === "Level"){
        if(sort.orderBy ==="ASC"){
          let dataSort = tasks.sort((x,y)=>{
                let nameX = x.level.toUpperCase();
                let nameY = y.level.toUpperCase();
                return nameX>nameY?1:(nameX<nameY)?-1:0;
              });
              setTasks([...dataSort])
        }else{
          let dataSort = tasks.sort((x,y)=>{
            let nameX = x.level.toUpperCase();
            let nameY = y.level.toUpperCase();
            return nameX>nameY?-1:(nameX<nameY)?1:0;
          });
          setTasks([...dataSort])
        }
      }
    }
  },[sort])

  // renderForm
  const elementForm = isToggle ? <Form 
                                    onCancel={handleCancel} 
                                    onSubmit={handleSubmit}
                                    actionName={actionName}
                                    renderTask={task} /> : "";
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control onAddTask={handleAddOrEditTask} onSearch={handleSearch} onSort={handleSort}/>
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {/* <Form />  */}
      {elementForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask renderTasks={tasks} onEdit={handleAddOrEditTask} onDelete={handleDelete} />
    </div>
  );
}

export default App;
