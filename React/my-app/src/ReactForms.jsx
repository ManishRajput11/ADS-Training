import React, { useState } from 'react'

function ReactForms() {
    const [inputvalue,setInputvalue]=useState('')

    function handelchange (e){
        setInputvalue(e.target.value)
    }
  return (
    <div>
        <form>
            <input type="text" value={inputvalue} onChange={handelchange}/>
        </form>
    </div>
  )
}

export default ReactForms