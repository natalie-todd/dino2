import React from 'react';
import Skilllist from './Skilllist';

const Profiles = ({ showSkills, employeeinfo, toggleVisibility }) => {

    return (
        <ul id='profiles'>
            {employeeinfo.map((employee, index) =>
                <li key={name} onClick={() =>
                    toggleVisibility(name)}>
                    <div className='profile-card'>
                        <header className='profile-header'>
                            <img src={employee.image} />
                            <h2>{employee.name}</h2>
                            <Skilllist />
                        </header>
                        <section className={showSkills == name ? 'skills-container'
                            : 'skills-container hidden'}>
                            <h4>Skills</h4>
                            <ul className='skills-list'>
                                <Skilllist skills={skills} />
                            </ul>
                            </section>
                    </div>
                </li>)}
        </ul>
    )
}

export default Profiles;

