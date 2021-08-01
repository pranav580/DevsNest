import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
export default function App() {
    const [log, setLog] = useState(false);
    const [Login, setLogin] = useState("Login");

  return (
    <Router>
      <div>
        <nav>
          <div className="navbar">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              {log === true ? (
            <>
              <Link to="/profile">
                Profile
              </Link>
              <Link to="/dashboard">
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                Profile
              </Link>
              <Link to="/">
                Dashboard
              </Link>
            </>
          )}
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
           </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route >
            <Home path="/" Login={Login} setLogin={setLogin} setLog={setLog} log={log}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home({Login , setLogin , setLog, log}) {
  return( 
        <React.Fragment>
            <h2>Home</h2>
            <h2>If not logged in cant access, Profile & Dashboard</h2>
            <button onClick={()=>{
                    // log ==="false" ? (
                        setLogin("Logout");
                        setLog(true);
                    // ):
                    //     setLogin("Login");
                    //     setLog("false");
                    // )
            }}>{Login}</button>

        </React.Fragment>
        );
}

function About() {
  return <h2>About</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}
function Dashboard(){
  return <h2>Dashboard</h2>;
}