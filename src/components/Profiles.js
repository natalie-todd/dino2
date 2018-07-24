import React from 'react'
import Skilllist from './Skilllist';

export default function Profiles({ employeeinfo }) {

    return (

        <ul id='profiles'>
            {
                employeeinfo.map((employee, index) => (
                    <li key={index}>
                        <div className='profile-card'>
                            <header className='profile-header'>
                                <img src={employee.image} />
                                <h2>{employee.name}</h2>
                                <Skilllist />
                            </header>
                        </div>
                    </li>
                ))}
        </ul>
    );
}
