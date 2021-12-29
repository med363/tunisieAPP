import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CompR from "./components/component6";

import './App.css'
import Compx from './Proprietes'
import CompD from './components/Modify_comments'
import CompA from './components/Modify_comments2'
import CompH from './components/ComponentsOfAllContacts'
// import Comp4 from "./components/component4";
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
      


/* <div> */
/* <img src="/1.JPG"/><img src="/3PG"/> */
/* <iframe style={{border:"50px solid gray" , borderRadius: "10px"}} width="100%" height="315"
src="https://www.youtube.com/embed/w7es_o012ps?loops=1">
    </iframe> */
    /* </div> */
    
    /* <Route path="/components/component4" component={Comp4} />  */
    // </body>
    
    import Comp3 from "./components/component3";
    import Comp4 from "./components/CompononentForm";
    import Comp from "./components/component1";
    import './App.css';
    import comp2 from "./components/component2";
    import comp5 from './components/component4';
    import comp6 from './components/Component7'

    
    class App extends Component {
      
      render() {
        return (
    <BrowserRouter>
      <div style={{padding:"20px"}} id="menu">
      <Link to="/components/component6"  style={{marginBottom:"100%",tesxtDecoration:"none" ,fontFamily:"SHOWCARD GOTHIC ",float:"left",color:"black",fontSize:"30px"}}>Tunibook</Link>
      <Link to="/components/ComponentForm"  className="link" style={{fontSize:"px",textDecorationLine:"none",color:"black",fontWeight:"bold"}}><span className="wourd">Contacts</span></Link>
      <Link to="/components/component3"  className="link" style={{fontSize:"",textDecorationLine:"none",color:"black",fontWeight:"bold"}}><span className="wourd">Categories</span></Link>
      <Link to="/components/component1"  className="link" style={{fontSize:"",textDecorationLine:"none",color:"black",fontWeight:"bold"}}><span className="wourd">Presentation</span></Link>
      <Link to="/components/component6" className="link" style={{fontSize:"",textDecorationLine:"none",color:"black",fontWeight:"bold"}}><span className="wourd">Home</span></Link>
            </div>
          <Route exact path="/" component={CompR} />
          <Switch>
          <Route  exact path="/components/component6" component={CompR} />
          <Route path="/components/component2" component={comp2} />
          <Route path="/components/component4" component={comp5} />
          <Route path="/components/Component7" component={comp6} />
          <Route  path="/components/component1" component={Comp} />
          <Route path="/Proprietes" component={Compx}/>
          <Route path="/components/component3" component={Comp3} />
          <Route path="/components/ComponentForm" component={Comp4} />
          <Route path="/components/Modify_comments/:id" component={CompD} />
          <Route path="/components/Modify_comments2/:id" component={CompA} />
          <Route path="/components/Modify_comments3/:id" component={CompA} />
          <Route path="/components/ComponentsOfAllContacts" component={CompH}/>
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
