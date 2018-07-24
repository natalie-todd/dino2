import React from 'react';
import Skilllist from './Skilllist';

export default function Profiles({ employeeinfo }) {
    // export default class Profiles extends Component {
    //     constructor(props) {
    //         super(props)
    //         this.state = { notshowing: true };

    //         this.toggleList = this.toggleList.bind(this)
    //     }

    //     toggleList = () => {
    //         const { notshowing } = this.state;
    //         this.setState({ notshowing: !notshowing })
    //     }

    //     componentDidMount() {
    //         console.log(this.props.employeeinfo)
    //     }
    return (
        <ul id='profiles'>
            {employeeinfo.map((employee, index) =>
                <li key={index}>
                    <div className='profile-card'>
                        <header className='profile-header'>
                            <img src={employee.image} />
                            <h2>{employee.name}</h2>
                            <Skilllist />
                        </header>
                    </div>
                </li>)}
            </ul>
        )
    }

