import React from "react";

export const Todo = (props) => {
  const [value, setvalue] = React.useState("");
  

  return (
    <div>
        <h1 style={{color:"#ffff"}}>
            Todo List
        </h1>
        <button className="addbtn"
        onClick={() => {
          if(value!==""){
            props.todoin(value);
            setvalue("");
          }
        }}
      >
        +
      </button>

      <input className="inputtodos"
        type="text"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
        value={value}
        placeholder="Add a to-do..."
      />
      
    </div>
  );
};