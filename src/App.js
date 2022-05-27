import React, { useEffect } from 'react';
import './App.css';
import { Todo } from './Component/Todo';
import { Todolist } from './Component/Todolist';

function App() {
  const [todo, settodo]= React.useState([]);

  
const todomain = ()=>{

  fetch("http://localhost:3004/posts")
  .then((res)=> res.json())
  .then((d)=>{
    console.log(d)
    settodo(d)
  })
}

useEffect(()=>{
  todomain()
},[])
    

  const todoinput=(str)=>{
   
    // settodo([...todo ,{ id: Date.now(), iscomplate: false, fevrate: false, value: str }])
  
    fetch("http://localhost:3004/posts",{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         iscomplate: false, fevrate: false, value: str
      })
    })
    todomain(); 
  }

  const markascomplate =(id,statas)=>{
   
    fetch(`http://localhost:3004/posts/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        iscomplate: statas
      })
    })
    todomain()
  }

  const markasfev =(id,statas)=>{
   
    fetch(`http://localhost:3004/posts/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fevrate: (!statas)
      })
    })
    todomain()
  }

  const removeds=(id)=>{
    fetch(`http://localhost:3004/posts/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    todomain()

  }

  return (
    <div className="App">
      <Todo  todoin={todoinput} />
      <Todolist 
       todos={todo}
       markascomplate={markascomplate}
        markasfev={markasfev}
        removeds={removeds}
        />
    </div>
  );
}

export default App;