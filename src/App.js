import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log('Constructor');
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    console.log('ComponentDidMout')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }));
  }


  render() {

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })


    console.log('render');
    return (
      <div className='App'>
        <br></br>
        <br></br>
        <input className='search-box' type='search' placeholder='search monster'
          onChange={(e) => {
            const searchField = e.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField }
            })
          }

          } />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>)
  }
}

export default App;
