import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="navbar">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/dashboard">Dashboard</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          if(state == true){
            <Route path="/profile">
                <Profile />
            </Route>
          }
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return( 
        <React.Fragment>
            <h2>Home</h2>
            <h2>If not logged in cant access, Profile & Dashboard</h2>
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