import React from 'react'
export default function Maincomponent2(props) {

  return (
    <div>
        {props.data.map((val)=>{
         return <h1>{val.title}</h1>
        })}
    </div>
  )
}