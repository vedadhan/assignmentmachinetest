import React, { Component } from 'react';
import ButtonAppBar from './Containers/Header';
//import NestedGrid from './Containers/Demo';
//import DesignNew from './Containers/Design';
import {Home} from './Containers/Home';

class App extends Component {
  
  render() {
    
  return (
    <div>
      <ButtonAppBar />
      <Home />
      
    </div>
  );
}
}

export default App;
