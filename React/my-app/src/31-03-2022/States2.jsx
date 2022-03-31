import React, { useState } from 'react'

export default function States2() {
    const [name, setName] = useState("Manish")
    const [fname, setFname] = useState("rajput")
    const [age, setAge] = useState('21')
    function changestate() {
        setName('MANISH')
        setFname('RAJPUT')
        setAge('22')
    }
    return (
        <div>


            <div>{name}</div>
            <div>{fname}</div>
            <div>{age}</div>
            <h2>click on the button to see the changes</h2>
            <button onClick={changestate}>Click me</button>

        </div>


    )
}
