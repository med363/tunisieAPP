// import React from "react";
// import Ri from "./components5";
// export default ()=>{
//     return(
//         // <div style={{display:'flex',justifyContent:"space-around"}}>
//         //     <img src="/images.jpg" alt="tunisia" style={{marginRight:"10%"}}/>
//         //     <p style={{textIndent:30,fontWeight:'bold',textAlign:'justify',color:'red'}}>
//         //      Tunisia represents beautiful white sand beaches, green oases and yellow sands of the Sahara, behind which one can see sharp mountain peaks. The mild Mediterranean climate, the clean and warm Mediterranean Sea. Unfortunately, it needs solutions so that the infrastructure is well and many problem such as . 
//         //     </p>

//         // </div>
//         <div style={{display:'flex',justifyContent:"space-around",marginBottom:"50%"}}>
//      {
//      alert("let's check some places are homeless by gouverment")
//      }
//             <img src="/11.JPG" style={{width:150,height:20,marginLeft:"10%",marginRight:"20%",marginTop:'20%',marginBottom:"60%",borderRadius: "20px"}}/>
//             <Ri textContent='Your Views'/>
            
//         </div>
//     )
// }

import React from 'react';
// import ki from "./component4"
import Ri from "./components5";
// import './style.css';
export default ()=>{
 
  return(
      <div style={{display:'flex',justifyContent:"space-around",marginTop:"5%"}}>
        <Ri textContent="Your ideas about Politics" />
      </div>
  )
  }
// import React,{Component} from "react";
// import "../App.css"
// import {Link} from 'react-router-dom'
// // const sections =['health','Politics','Education']

// class Ki extends Component {

//     state = {
//     name: 'Education',
//     photo: "/11.JPG",
//     description: 'education in tunisia has much probem of infrastucture.in this way gouverment should building schools,university.and stop private education in private schools'
//   }

//   handleAiClick = () => {
//    this.setState({
//     name: 'Politics',
//     photo: "/10.JPG",
//     description: 'it\'s importane to be free on what to do,but there are many polics people no known what is important to do for get up whith country.if all people of politics STEAL'
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
//     description: 'education in tunisia has much probem of infrastucture.in this way gouverment should building schools,university.and stop private education in private schools'
//     })
//    }

//    render() {
    
//     return (
//      <div>
//          <div style={{marginTop: 100, display: 'flex', justifyContent: 'center'}}>
//             <button className="ux" style={{ padding: '1em', border: ' 1px none #CCC'}} onClick={this.handleAiClick}>Politics</button>
//             <button className="ux" style={{ padding: '1em', border: ' 1px none #CCC'}} onClick={() => this.handleCiClick()}>Health</button>
//             <button className="ux" style={{ padding: '1em', border: ' 1px none #CCC'}} onClick={() => this.handleBiClick()}>Education</button>
//          </div>
//    {/* {sections.map(el=> <button className="ux" style={{ padding: '1em', border: ' 1px none #CCC'}} onClick={this.handleAiClick}>{el}</button>
// )} */}

//        <div style={{marginTop:"10%",display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
//            <h1 style={{ marginRight:"80%",color:"WHITE"}}>{this.state.name}</h1>
//            <div style={{justifyContent:"space-around",display:"flex"}}>
//            <p style={{textIndent:30,fontWeight:"bold",color:"WHITE",marginTop:"5%"}}>{this.state.description}</p> 
          
//          <img className="imag" style={{width:'20%',height:'20%',cursor:'pointer'}} src={this.state.photo} onClick={()=>window.location="/components/component3"} title="click here to suggection some ideas" />
     
//            </div>
//        </div>

// </div>




// )
// }
// }
// export default Ki;