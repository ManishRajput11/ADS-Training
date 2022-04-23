import React ,{useState} from 'react'

export default function () {
    const[firststate,setfirststate]= useState('');
   const[secondstate,setsecondstate]= useState('');

    function hiii(){
      if(firststate.length==0){
        setfirststate('hii how r you')
        setsecondstate('hello ')
      }else{
        setfirststate('')
        setsecondstate('')
      }
    }
  return (
    <div>
    <h1>let's get started!</h1>
    {firststate}
    <button onClick={hiii}>{secondstate} click me</button>
    

</div>
  )
  }