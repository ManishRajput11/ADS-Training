import React ,{useState,useEffect}from 'react'

export default function Foruseeffect2() {

   
 const [statename,setStatename]=useState('mainsh')
 const [company,setCompany]=useState('Ads')
 let [btechbranch,btechnewbranch]=useState('iiiiiiiiiiiiiiiit');



 
 function tochange(){
    setStatename('rajput')
 }
 function tochangecompnayname(){
     setCompany('ribbon')
 }
 function colleage (){
    btechnewbranch('cse')
 }
  
 useEffect(()=>{
    console.log("statename is changed")
 },[statename])


  return (
    <div>
        <h1 onClick={tochange}>{statename}</h1>
        <h1 onClick={tochangecompnayname}>{company}</h1>
        <h1 onClick={colleage} style={{cursor:'pointer'}}>{btechbranch}</h1>   
    </div>
  )
}
