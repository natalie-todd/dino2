import React, { Component } from 'react';
import Skilllist from './Skilllist';

export default class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = { notshowing: true };

        this.toggleList = this.toggleList.bind(this)
    }

    toggleList = () => {
        const { notshowing } = this.state;
        this.setState({ notshowing: !notshowing })
    }

    componentDidMount() {
        console.log(this.props.employeeinfo)
    }
    render() {
        return (
            console.log(employeeinfo)
            <ul id='profiles'>

                employeeinfo.map((employee) => (
                  
                         <li key={employee.id}>
                    <div className='profile-card'>
                        <header className='profile-header'>
                            <img src={employee.image} />
                            <h2>{employee.name}</h2>
                            <Skilllist />
                        </header>
                    </div>
                </li>
                ))
            </ul>
        )
    }
}
