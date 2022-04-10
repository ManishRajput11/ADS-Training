import React ,{useState} from 'react'



export default function Staaateassignment () {
    const[firststate,usefirststate]=useState('')
    const[secondstate,usesecondstate]=useState('click me!!!!!!!')
    function helloo(){
        if(firststate.length==0){
            usefirststate('hello manish')
            usesecondstate('heyaaaa')
        }else{
            usefirststate('')
            usesecondstate('click me!!!!!!!')
        }
        
    } 
  return (

    <div>
        <h1>let's get started</h1>
        {firststate}
        <button onClick={helloo}  >{secondstate}  </button>
    </div>
  )
}
