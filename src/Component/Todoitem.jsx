import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Todoitem = (props) => {
  const [iscomplate, setIscomplate] = React.useState(props.item.iscomplate);
  const [isfev, setfev] = React.useState(props.item.fevrate);
  let red = {
    color: "black",
  };
  let green = {
    color: "rgb(88, 88, 88)",
    textDecoration: "line-through",
    backgroundColor: "#ffff)",
  };
  let checked ={
    color: "orange"
  };
  let notchecked ={
    color: "rgb(129, 129, 129)"

  };
  return (
    <div className="TodoItem" style={!iscomplate ? red : green}>
      <div>
        <div>
        <input
          type="checkbox"
          checked={props.item.iscomplate}
          onChange={(e) => {
            setIscomplate(e.target.checked);
            props.markascomplate(props.item.id, e.target.checked);
            props.setsort(uuidv4());
          }}
        />
      </div>
      <div>{props.item.value}</div>
        </div>
      <span
        onClick={() => {
          props.markasfev(props.item.id,props.item.fevrate);
          props.setsort(uuidv4());
          setfev(uuidv4())
        }}
        className="fa fa-star"
        style={props.item.fevrate ? checked : notchecked}
      ></span>
      <div className="deleteicon" onClick={()=>{props.removeds(props.item.id)}}>🗑</div>
    </div>
  );
};