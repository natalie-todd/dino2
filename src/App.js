import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Profiles from './components/Profiles'

const dinoData = './dinosaurs.json'

class App extends Component {
  state = {
    employeeinfo: [],
    showSkills: false, 
  }

  componentDidMount() {
    this.seeEmployees();
  }

  seeEmployees = () => {
    return fetch(dinoData)
      .then(res => res.json())
      .then(employeeinfo => this.setState({ employeeinfo }));
  }

  toggleVisibility = (name) => {
    if(this.state.showSkills==name) {
      name=false;
    }
    this.setState({showSkills: name})
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section id='profiles-container'>
            <h2>Profiles</h2>
            <Profiles employeeinfo={this.state.employeeinfo}
            showSkills={this.state.showSkills}
            toggleVisibility={this.toggleVisibility}/> 
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
