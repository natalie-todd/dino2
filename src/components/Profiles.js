import React from 'react'

export default function Profiles({ employee }) {

    return (
        <ul id='profiles'>
            {
                employee.map(employee => (
                    <li key={employee.id}>
                        <img src={employee.image} />
                        <h2>{employee.name}</h2>
                    </li>
                ))}
        </ul>
    );
}
