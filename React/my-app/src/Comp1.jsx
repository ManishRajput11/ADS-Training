import React from 'react'
import Comp2 from './Comp2'
import Heading1  from './Heading1'
import Composition from './Composition'

export default function Comp1() {
    var obj={
        name:'Manish',
        age:'22'
    }
  return (
    <Composition>
        This is Comp 1
        <Heading1/>
        <h1>Heading 2</h1>
        <h1>Heading 3</h1>

        <Comp2  details={obj.name}/>
        <Comp2  details={obj.age}/>

    </Composition>
  )
}
