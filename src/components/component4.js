import React from 'react';
// import ki from "./component4"
import Ki from "./EducationTodo";
// import './style.css';
export default ()=>{
 
  return(
      <div style={{display:'flex',justifyContent:"space-around",marginTop:"5%"}}>
        <Ki textContent="Your ideas about Education" />
      </div>
  )
  }
// / import React,{Component} from "react";

// class Ki extends Component {

//     state = {
//     name: 'Education',
//     photo: "/11.JPG",
//     description: 'education in tunisia has much probem of infrastucture'
//   }

//   handleAiClick = () => {
//    this.setState({
//     name: 'Politics',
//     photo: "/10.JPG",
//     description: 'it\'s importane to be free on what to do,but there are many polics people no known what is important to do for get up whith country.'
//    })
//    }

//    handleCiClick = () => {
//     this.setState({
//     name: 'Health',
//     photo: "/12.JPG",
//     description: 'Medcin in our country are good and they have a good competence in these domaine but there are not a good area to practise it.suchb as there are not a materiel,hospitals...'  })

//    }

//    handleBiClick = () => {
//     this.setState({
//     name: 'Education ',
//     photo: "/11.JPG",
//     description: 'education in tunisia has much probem of infrastucture'
//     })
//    }

//    render() {
//     return (
//      <div>
//          <div style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>
//             <button className="ux" style={{ padding: '1em', border: ' 1px none #CCC', borderRadius: '1em'}} onClick={this.handleAiClick}>Ain drahem</button>
//             <button className="ux" style={{ padding: '1em', border: ' 1px none #CCC', borderRadius: '1em'}} onClick={() => this.handleCiClick()}>Ain snoussi</button>
//             <button className="ux" style={{ padding: '1em', border: ' 1px none #CCC', borderRadius: '1em'}} onClick={() => this.handleBiClick()}>Kerkennah</button>
//          </div>

//        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
//            <h1 style={{ textShadow:"1px 1px 10px blue"}}>{this.state.name}</h1>
//            <img style={{width:'20%',height:'20%', borderRadius: "20px"}} src={this.state.photo} />
//            <p style={{textIndent:30,fontWeight:"bold",color:"red"}}>{this.state.description}</p> 
//        </div>

// </div>




// )
// }
// }
// export default Ki;
// // import {Link} from "react-router-dom";
// export default ()=>{
//     return(
//         <div>
//             <h1>COMP 4</h1>
//             <img src="https://www.robohash.org/amin4" />
//             {/* <Link to="/components/component1">click to move to component1</Link>
//             <Link to="/components/component3">click to move to component3</Link> */}
//         </div>
//     )
// }