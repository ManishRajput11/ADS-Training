import React ,{useState} from 'react'

export default function () {
    const [firststate ,setfirststate]= useState('');


    function hello(){
        if(firststate.length==0){

            setfirststate('this is new!');
        }else{
            setfirststate('')
        }
    }
    
    
  return (
    <div>
        <h1> let's get started!!!</h1>
        <h1>{firststate}</h1><br></br>
        <button  onClick={hello} > toggle paragraph </button>
        
    </div>
  )
}
