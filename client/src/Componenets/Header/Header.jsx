import React, { Component } from 'react'
import Avatar from 'react-avatar';
import jwt_decode from "jwt-decode";

import { Link, withRouter, Redirect } from "react-router-dom";
export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
        firstName:'',
        lastName:'',
        email:''
    }
  }

  componentDidMount(){
    if (localStorage.getItem("userLoginToken") !== null) {

      const token = localStorage.userLoginToken;
      const decoded = jwt_decode(token);
      this.setState({
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        email: decoded.email   
      });
    }
  }


  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("userLoginToken");  
    setTimeout(()=>{
      window.location.replace("/login");
    },50)

  }


    render() {

const loginLink = (
  <ul className="navbar-nav">
  <li className="nav-item dropdown" style={{float:'right'}}>
        
  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <Avatar name={this.state.firstName + " " + this.state.lastName} round="50%" size='35'/> Hello {this.state.firstName}
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <a className="dropdown-item" href="#">Profile</a>
    <a className="dropdown-item" href="#">Settings</a>
    <a className="dropdown-item" onClick={this.logOut.bind(this)}>Logout</a>
  </div>

</li>
</ul>
  
)

const userLink = (
  <ul className="navbar-nav">

     <li className="nav-item" style={{float:'right'}}>
        <Link className="nav-link" to='/login'>Singn In</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to='/register'>Sign Up</Link>
      </li>


  </ul>
 
)

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/'>Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
   
      <li className="nav-item">
        <Link to='/edittext' className="nav-link" href="#">Change Letters</Link>
      </li>
      <li className="nav-item">
      <Link to='/control' className="nav-link" href="#">Change Font</Link>
      </li>
      <li className="nav-item">
      <Link to='/datacontrol' className="nav-link" href="#">Add Daily Summary</Link>
      </li>
      <li className="nav-item">
      <Link to='/stats' className="nav-link" href="#">Daily Statistics</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

    </ul>
  </div>


 
  {localStorage.userLoginToken ? loginLink : userLink}



</nav>
        )
    }
}
