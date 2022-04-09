import React,{useRef,useEffect} from 'react'

export default function Foruseeffect() {
    const inputvalue=useRef()
    function handelclick(){
        console.log(inputvalue.current.value)
    }
    useEffect(toconsole)
    function toconsole(){
        console.log('useeffect is called in call back function')
    }
    useEffect(()=>{
        console.log('another method of use effect')
    })
    
  return (
    <div>
        <input  type="text"  ref={inputvalue}/>
        <button onClick={handelclick}>Click me</button>
    </div>
  )
}
