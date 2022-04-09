import React from 'react'

export default function Render() {
    let arr=[
        {name:'mainsh'},
        {fname:'ramesh'},
        {name:'suresh'},
    ]
  return (
    <div>
      <ul>
         {arr.map((listitem)=>{
        return <li>{listitem.name || listitem.fname}</li>
     })}
     
        </ul>  
      
    </div>
  )
}
