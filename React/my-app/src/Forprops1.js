import React ,{useState} from "react"
function Forprops1(props){
    const [car,setcar]= useState('bmw')
    

    function changing(){
        return setcar()
    }

    
    return(
        <div>

            <h1>hello everyone</h1>
            <h2>{props.name}</h2>
            <h3>{car }</h3>
            <button onClick={changing}>uyg</button>



        </div>
    ) 
}
export default Forprops1
