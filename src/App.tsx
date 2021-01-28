import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';


//styling
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';

function App() {
  return <div className="container">
    <div className="App">
	  	<Navbar />
	  	<Switch>
	  		<Route exact path="/"><Main /></Route>
	  		<Route path="/projects"><Projects /></Route>
	  		<Route path="/contact"><Contact /></Route>
	  	</Switch>
    </div>
  </div>
  
}

export default App;
