import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Comp from "./components/component1";
import Comp2 from "./components/component2";
import Comp3 from "./components/component3";
import Comp4 from "./components/CompononentForm";
// import Comp4 from "./components/component4";
import './App.css';

class App extends Component {
  
  render() {
    return (
//       <body>
//         {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
// <script src="/__/firebase/7.6.0/firebase-app.js"></script>

// {/* <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries --> */}
// <script src="/__/firebase/7.6.0/firebase-analytics.js"></script>

// {/* <!-- Initialize Firebase --> */}
// <script src="/__/firebase/init.js"></script>
//         {/* <p>im the viper</p> */}

//       {/* // <div> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRlYRhrItW1yRnfrorLh4ZwylN7gvbRJT2UsKggmvOTfp-Iaru" class="imgtest" /></div> */}
      <BrowserRouter>
       <div>
      {/* <img src="/1.JPG"/><img src="/3.JPG"/> */}
      <iframe style={{borde:"50px solid gray" , borderRadius: "10px"}} width="100%" height="315"
       src="https://www.youtube.com/embed/w7es_o012ps?loops=1">
      </iframe>
       </div>
   
            <div style={{textShadow:"1px 1px 10px red",display: 'flex',justifyContent: 'space-around', backgroundColor: 'red',width:'100%'}}>
            <Link to="/components/component1" style={{color:"white", textDecorationLine:'none'}}>Home</Link>
            <Link to="/components/component2" style={{color:"white" , textDecorationLine:'none'}}>Notification</Link>
            <Link to="/components/component3" style={{color:"white",  textDecorationLine:'none'}}>Solution</Link>
            <Link to="/components/ComponentForm" style={{color:"white",  textDecorationLine:'none'}}>Contact</Link>

            </div>
            
        <Switch>
          <Route path="/" component={Comp} exact />
          <Route  path="/components/component1" component={Comp} />
          <Route path="/components/component2" component={Comp2} />
          <Route path="/components/component3" component={Comp3} />
          <Route path="/components/ComponentForm" component={Comp4} />
          {/* <Route path="/components/component4" component={Comp4} /> */}

        </Switch>
      </BrowserRouter>
      // </body>
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
