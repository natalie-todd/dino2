import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Profiles from './components/Profiles'
// import Skilllist from '.components/Skilllist';
const dinoData = './dinosaurs.json'

class App extends Component {
  state = {
    employeeinfo: null
  }

  componentDidMount() {
    this.seeEmployees();
  }

  seeEmployees = () => {
    return fetch(dinoData)
      .then(res => res.json())
      .then(employeeinfo => this.setState({ employeeinfo }));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section id='profiles-container'>
            <h2>Profiles</h2>
            {this.state.employeeinfo ? <Profiles employeeinfo={this.state.employeeinfo} /> : null}
            
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
