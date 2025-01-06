import React, { Component } from 'react';
import Event from './components/Event';
import Props_example from './components/Props';
import Conditions from './components/Conditions';
import List_example from './components/List';
import Form from './components/Form';
class App extends Component {
  render() {
    return (
      <div>
        <Form />
        {/* <Event />
        <Props_example name='Ranjana' />
        <Conditions />
        <List_example /> */}
      </div>
    );
  }
}

export default App;
