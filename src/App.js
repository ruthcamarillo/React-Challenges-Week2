import './App.css'
import React from 'react';
import BasicInfo from './BasicInfo';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: [
        {
          name: 'Roooot',
          number: 777777777,
          dob: 'Feb, 13 2000'
        },
        {
          name: 'Herb',
          number: 88888888888,
          dob: 'Jan, 4 1998'
        },
        {
          name: 'Scoob',
          number: 9999999999,
          dob: 'April 1 1867'
        }
      ]
    }

  }
  render() {
    return (
      <div>
        <BasicInfo person={this.state.person} />
        <ul>
          {this.state.person.map(person => (
            <li key={person.name}>
              <BasicInfo person={person} />
            </li>
          ))}
        </ul>

      </div>
    )
  };
}

export default App;
