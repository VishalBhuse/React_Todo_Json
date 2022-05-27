import React, { useState } from 'react'

const Pagi = (props) => {
        
    const [current, setcurrent] = useState(0);

    return (
    <div className='pagi_button'>
        
        <button 
        disabled={current < 1}
        onClick={()=>{
            props.setpage(props.page-1)
            setcurrent(current-1)
        }}
        >{"Prev"}</button>

        <button
        
        disabled={ props.page * 4 > props.limits   }

        onClick={()=>{
            props.setpage(props.page+1)
            setcurrent(current+1)
        }}
        >{"Next"}</button>
    </div>
  )
}

export default Pagi