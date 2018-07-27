import React from 'react';
import Skilllist from './Skilllist';

const Profiles = ({ showSkills, employeeinfo, toggleVisibility }) => {
    return (
        employeeinfo.map(({employee, skills, image}) => <li key={employee} 
        onClick={() =>
                toggleVisibility(employee)}>
                <div className='profile-card'>
                    <header className='profile-header'>
                        <img src={image} />
                        <h2>{employeeinfo.name}</h2>
                        {/* <Skilllist /> */}
                    </header>
                    <section className={showSkills == employee ? 'skills-container'
                        : 'skills-container hidden'}>
                        <h4>Skills</h4>
                        <ul className='skills-list'>
                            <Skilllist skills={skills} />
                        </ul>
                    </section>
                </div>
            </li>)
    )
}

export default Profiles;

