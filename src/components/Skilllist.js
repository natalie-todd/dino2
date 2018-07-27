import React from 'react'

const Skilllist = ({skills}) => {
    return (
        skills.map(skills => { 
        return <li key={skills}>{skills}</li>
        })
    );
}

export default Skilllist;

