import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Componenets/Header/Header';
import Register from './Componenets/LoginRegistration/Register';
import Login from './Componenets/LoginRegistration/Login';
import EditText from './Componenets/EditText/EditText';
import Home from './Componenets/Home/Home';
import Control from './Componenets/FontController/Control';
function App() {
  return (
    <Router>
      <div className="App">

            <Header/>
       
            <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/edittext" component={EditText}/>
            <Route path="/control" component={Control}/>
            <Route exact path="/" component={Home}/>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
