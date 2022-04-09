import React from 'react'
import  ReactDOM  from 'react-dom'

export default function Forportals() {
    
  return (
    <div>
        <h1>this is portal component</h1>
       {ReactDOM.createPortal(<div>this is portal</div>,document.getElementById('portals'))}
    </div>
  )
}
