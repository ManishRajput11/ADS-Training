import React ,{useState} from 'react'

export default function () {
    const[firststate,setfirststate]= useState('');
    const[secondstate,setsecondstate]= useState('heya');

    function hiii(){
        // if(firststate.length==0){
        //     setsecondstate('clicked mee');
        //     setfirststate('let him go');
        // }else{
        //     setsecondstate('heya');
        //     setfirststate('');
        // }
 
        if(firststate==''){
            setsecondstate('clicked mee');
            setfirststate('let him go');
        }
        else{
             setsecondstate('heya');
             setfirststate('');
             }





        // switch(firststate.length){

        //     case 0:
        //         setsecondstate('clicked mee');
        //         setfirststate('let him go');
        //         break;
        //     default:
        //         setsecondstate('heya');
        //         setfirststate('');
    
        // }
    
    }
    
  return (
    <div>
    <h1>let's get started!</h1>
    {firststate}
    <button onClick={hiii}> {secondstate}</button>
    

</div>
  )
  }