import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Componenets/Header/Header';
import Register from './Componenets/LoginRegistration/Register';
import Login from './Componenets/LoginRegistration/Login';
import EditText from './Componenets/EditText/EditText';
import Home from './Componenets/Home/Home';
import Control from './Componenets/FontController/Control';
import DataControl from './Componenets/FontController/DataControl';
import Stat from './Componenets/Charts/BarChart';
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
            <Route path="/datacontrol" component={DataControl}/>
            <Route exact path="/" component={Home}/>
            <Route path="/stats" component={Stat}/>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
