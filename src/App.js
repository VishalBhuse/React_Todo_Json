import React, { useEffect, useState } from 'react';
import './App.css';
import Pagi from './Component/Pagi';
import { Todo } from './Component/Todo';
import { Todolist } from './Component/Todolist';
import axios from 'axios';


function App() {
  const [todo, settodo]= React.useState([]);
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(0);

  console.log(page)
  
const todomain = ()=>{

  axios.get(`http://localhost:3004/posts?_page=${page}&_limit=4`)
  .then((d)=>{
    console.log(d)
    settodo(d.data)
    setlimit(d.headers['x-total-count'])
    console.log(limit)
  })
}

useEffect(()=>{
  todomain()
},[page])
    

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
        <Pagi limits={limit} page={page} setpage={setpage}/>
    </div>
  );
}

export default App;