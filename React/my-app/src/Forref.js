import React,{useRef} from 'react'

export default function Forref() {
    const inputvalue=useRef()
    function handelclick(){
        console.log(inputvalue.current.value)
    }
    
  return (
    <div>
        <input  type="text"  ref={inputvalue}/>
        <button onClick={handelclick}>Click me</button>
    </div>
  )
}
