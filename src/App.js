import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Comp from "./components/component1";
import Comp2 from "./components/component2";
import Comp3 from "./components/component3";
// import Comp4 from "./components/component4";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>hear we are going to create   three website</h1>
          <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'lightblue'}}>
            <Link to="/components/component1">Home</Link>
            <Link to="/components/component2">Profile</Link>
            <Link to="/components/component3">Notificattion</Link>
            {/* <Link to="/components/component4">Amin 4</Link> */}
          </div>
        </div>
        <Switch>
          <Route path="/components/component1" component={Comp} />
          <Route path="/components/component2" component={Comp2} />
          <Route path="/components/component3" component={Comp3} />
          {/* <Route path="/components/component4" component={Comp4} /> */}

        </Switch>
      </BrowserRouter>

    )
  }
}

export default App






















// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
