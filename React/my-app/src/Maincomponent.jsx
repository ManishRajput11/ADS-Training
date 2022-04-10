
import React ,{useState} from 'react'
import Maincomponent2 from './Maincomponent2'
export default function Maincomponent() {
    const [Fordata,setForData]=useState([])
    function noname(){
        fetch('https://swapi.dev/api/films/')
        .then((response)=>{
           return response.json()
        })
        .then((data)=>{
            const moviedata=data.results.map(moviedata=>{
                return {
    
                    title:moviedata.title,
                }
            })
            setForData(moviedata)
        })
    }
  return (
    <div>
        <button onClick={noname}>To Fetch data</button><br/>
        <Maincomponent2 data={Fordata}/>
    </div>
  )
}