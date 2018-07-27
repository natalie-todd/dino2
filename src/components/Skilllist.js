import React from 'react'

const Skilllist = ({ skills }) => {

    return (

        skills.map(skill => {
            return <li key={skill} >
                {skill} </li>
        })
    );
}

export default Skilllist;

