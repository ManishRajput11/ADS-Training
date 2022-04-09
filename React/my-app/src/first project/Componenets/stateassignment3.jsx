import React ,{useState} from 'react'

export default function () {
    const[firststate,setfirststate]= useState('');
    const[secondstate,setsecondstate]= useState('heya');

    function hiii(){
        
        switch(firststate.length){

             case 0:
                 setsecondstate('clicked mee');
                 setfirststate('let him go');
                 break;
            default:
                 setsecondstate('heya');
                 setfirststate('');
    
         }

        }
        
 
       
    
    
    
  return (
    <div>
    <h1>let's get started!</h1>
    {firststate}
    <button onClick={hiii}> {secondstate}</button>
    

</div>
  )
  }