import React,{useState} from 'react'

export default function Form() {
    const [value,setValue]=useState()
    function handelchange(event){
        const val=event.target.value;
        console.log(val)
        setValue(event.target.value)
    }
    function handelsubmit(event){
        event.preventDefault()
      console.log(value)
    }
  return (
    <div>
        <form onSubmit={handelsubmit}>
            <input type="text" onChange={handelchange}/>
            <input type="submit" />
        </form>
    </div>
  )
}
