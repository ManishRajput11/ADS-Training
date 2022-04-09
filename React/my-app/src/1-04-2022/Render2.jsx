import React from 'react'

export default function Render2() {
    let arr=[
        {name:'mainsh'},
        {fname:'ramesh'},
        {name:'suresh'},
    ]
    var names= arr.map((listitem)=>{
        return <li>{listitem.name || listitem.fname}</li>
     })
  return (
    <div>
         {names}
    </div>
  )
}
