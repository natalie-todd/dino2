import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Profiles from './components/Profiles'

const dinoData = './dinosaurs.json'

class App extends Component {
  state = {
    employeeinfo: []
  }

  componentDidMount() {
    this.seeEmployees();
  }

  seeEmployees = () => {
    return fetch(dinoData)
      .then(res => res.json())
      .then(employee => this.setState({ employee }));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section id='profiles-container'>
            <h2>Profiles</h2>
            <Profiles employee={this.state.employee} />
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
