import React, { useState } from 'react'
import './index.css';
import Itemhs from './Items';


export default function App() {
  const [task, settask]=useState("");
  const [items ,setitem]=useState([])
function listitem(){
  setitem((olditems)=>{
    return [...olditems, task]
  })
  settask("")
}
const deleteitem=(id)=>{
  console.log("hey")
  setitem((olditems)=>{
    return olditems.filter((arrele,index)=>{   return index!==id}
  )
  })
}

  return (
    
    <>
    <div className='maindiv'>
    <div className='centerdiv'>
    <h1 className='heading'>To-Do List</h1>
    <div className='inp'><input type='text' placeholder="Enter Tasks"   required value={task} onChange={(e)=>{settask(e.target.value)}}/>
    <button onClick={listitem}>+</button>
   </div>
    <div className='scrollitem'>
    <ol>
     { items.map((itemval,idx)=>{
     return <Itemhs content={itemval}  id={idx} key={idx} delete={deleteitem}/>
     }
     )}
    </ol>
    </div>
    </div>
    
    </div>
    </>
  )
}

