import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Service from './Pages/Service';

function App() {
  return (
    <>
    <Switch>
     <Route  exact path="/" component={Home} />
     <Route  exact path="/about" component={About} />
     <Route  exact path="/service" component={Service} />
     <Route  exact path="/contact" component={Contact} />
     <Redirect to="/"/>
     </Switch>
    </>
  );
}

export default App;
