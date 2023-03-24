import React from 'react';
import './App.css';
import BasicInfo from './BasicInfo';

class App extends React.Component {
  constructor(props) {
    super(props);

    // We declare the state as shown below
    this.state = {
      person: {
        name: "Root Camarillo",
        number: '777 - 777 - 7777',
        dob: 'Feb 13, 2000'
      }
    }
  }


  render() {
    return (
      <div>
        <h2>Random People</h2>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}





export default App;
