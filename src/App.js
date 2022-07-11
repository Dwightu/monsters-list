import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/SearchBox';
import { useState, useEffect } from 'react';


import React from 'react'

function App() {
  const [searchField, setSearchField] = useState(''); //[value,setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  // const [string]



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    setFilteredMonsters(monsters.filter((monster) => {
      console.log('Filtered Monsters changes')
      return monster.name.toLocaleLowerCase().includes(searchField)
    }))
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }


  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Roledox</h1>
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder={'Search Monsters'} />
      <CardList monsters={filteredMonsters} />
    </div>)
}

// Method 2
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     console.log('ComponentDidMout')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       }));
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }
//     }
//     )
//   }

//   render() {
//     console.log('App render')
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })


//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Roledox</h1>
//         <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder={'Search Monsters'} />
//         <CardList monsters={filteredMonsters} />
//       </div>)
//   }
// }

export default App;
