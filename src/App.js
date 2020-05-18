import React from 'react';
import Add from './Add'

import data from './data.json'

import './App.css';

const columns_data = data

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Add test =  {columns_data} />
      </div>
    )
  }
}


export default App

