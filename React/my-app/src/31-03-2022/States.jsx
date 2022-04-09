import React,{useState} from 'react'

export default function States() {
    const [name, setName]=useState("Manish")
    function changestate (){
        setName('Rajput')
        
    }
  return (
    <div>
        <h1>{name}</h1>
        <h2> if you want to know last name click button</h2>
        <button onClick={changestate}>Click me</button>
    </div>

  )
}
