import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
     <Route  exact path="/" component={Home} />
     <Route  exact path="/about" component={About} />
     <Route  exact path="/service" component={Service} />
     <Route  exact path="/contact" component={Contact} />
     <Redirect to="/"/>
     
     </Switch>
     <Footer/>
    </>
  );
}

export default App;
