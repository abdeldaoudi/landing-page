import React, { useEffect, useState } from 'react';
import Routes from "./routes";
import { Link, useHistory } from "react-router-dom";

 
function App() {

  const history = useHistory();
  const [path, setPath] = useState("");

  window.addEventListener("load", () => {
    
    if(window.location.pathname === "/contact"){
      setPath(window.location.pathname);
    }
  });


  useEffect(() => {
    const checkPath = () => {
      history.listen((location) => {
        setPath(location.pathname);
      });
    }

    checkPath();

  }, [history]);


  const showContact = path;
  let _contact;
  if(showContact !== "/contact"){
    _contact = (<li><Link to="/contact">Contact Me</Link></li>)
  }


  return (
    <div className="App">
     <div className="container">
        <nav>
          <ul>
            <li><Link to="/"> Coddiwomple </Link></li>
          </ul>
          <ul><div className="logo"><img src="./img/periscope.png"  alt="pac"></img></div></ul>
          <ul>
            {_contact}
          </ul>
        </nav>
      <Routes /> 
     </div>
    </div>
  );
}

export default App;
