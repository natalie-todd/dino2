import React from 'react'

const Skilllist = ({skills}) => {
    return (
        skills.map(skill => { <li key={skill}>{skill}</li>
        })
    );
}

export default Skilllist;

