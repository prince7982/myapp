import React, { useEffect, useState } from 'react'

function MyEffect() {
    const [x,y]=useState("ravi");

    const myelem = (e)=>{
        console.log(e.target.value);
        y(e.target.value);
    }

    const showmsg = ()=>{
        //alert("welcome to reactjs");
        console.log("welcome to");
    }

    useEffect(()=>{
        showmsg();
    },[])

  return (
    <div>
        <input type='text' value={x} onInput={myelem}/>

        <h1>my data list {x}</h1>
    </div>
  )
}

export default MyEffect