import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import NavBar from './NavBar';



function App() {
  return (
    <>
    <NavBar />
     <Switch> 
        {/* switch will show first match only */}
        <Route exact path='/' component={Home} />    
        {/* route will show exact path to direct component */}
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/service' component={Service} />
        <Redirect to='/' />   
        {/* redirect use for by default */}
     </Switch>
     
    </>
  );
}

export default App;
