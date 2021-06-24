
import Container from './components/container/container.conponent'
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();
  
    this.state = {
      name: 'Jon',
    }
  }

  render() {
    
    return (
      <Container />
      
      );
    }
}

export default App;
