import React from "react";

class TopBar extends React.Component{

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Mail Campaign</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="contacts">Contacts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="groups">Groups</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="campaign">Campaign</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="sentmail">Sent Mail</a>
      </li>
    </ul>
  </div>
</nav>
    );
  };
}
  
export default TopBar;