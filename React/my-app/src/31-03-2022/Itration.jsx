import React from 'react'

export default function Itration() {
    const arr = [
        { name: 'manish' },
        { name: 'ramesh' },
        { name: 'suresh' },
    ]
    return (
        <div>
            <ul>
                {arr.map((el) => {
                    return (<li>{el.name}</li>)
                })}

            </ul>
        </div>
    )
}
