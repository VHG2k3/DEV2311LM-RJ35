import React, { useEffect, useState } from "react";

function Control({onAddTask,onSearch,onSort}) {

  const handleAddTask = ()=>{
    onAddTask(true,"Add", );
  }
  const [keyword,setKeyWord]=useState();
  const handleSearch=()=>{
    onSearch(keyword)
  }
  const handleChange=(ev)=>{
    console.log("key:",ev.target.value);
    setKeyWord(ev.target.value)
  }
  // sort
  var sort = {
    nameBy:'',
    orderBy:''
  }
  const [sortBy, setSortBy] = useState(sort)
  const handleSortChange= (name,orderBy)=>{
    sort = {
      nameBy:name,
      orderBy:orderBy
    }
    setSortBy(sort);
  }
  useEffect(()=>{
    console.log(sortBy);
    onSort(sortBy);
  },[sortBy])

  return (
    <div className="row">
      {/* SEARCH : START */}
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
            value={keyword} 
            name="keyword"
            onChange={handleChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-info" type="button"
              onClick={handleSearch} >
              Go!
            </button>
          </span>
        </div>
      </div>
      {/* SEARCH : END */}
      {/* SORT : START */}
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a href="/#" role="button" onClick={()=>handleSortChange("Name","ASC")}>
                Name ASC
              </a>
            </li>
            <li>
              <a href="/#" role="button" onClick={()=>handleSortChange("Name","DESC")}>
                Name DESC
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a href="/#" role="button" onClick={()=>handleSortChange("Level","ASC")}>
                Level ASC
              </a>
            </li>
            <li>
              <a href="/#" role="button" onClick={()=>handleSortChange("Level","DESC")}>
                Level DESC
              </a>
            </li>
          </ul>
          <span className="label label-success label-medium">
            {sortBy.nameBy.toUpperCase()}-{sortBy.orderBy.toUpperCase()}</span>
        </div>
      </div>
      {/* SORT : END */}
      {/* ADD : START */}
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button 
          onClick={handleAddTask}
          type="button" 
          className="btn btn-info btn-block">
          Add Task
        </button>
      </div>
      {/* ADD : END */}
    </div>
  );
}

export default Control;
