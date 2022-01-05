import React from "react";
import {Link} from "react-router-dom"

class TopBar extends React.Component{

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="contacts">Contacts</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="groups">Groups</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="campaign">Campaign</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="sendingmail">Sent Mail</Link>
      </li>
    </ul>
  </div>
</nav>
    );
  };
}
  
export default TopBar;