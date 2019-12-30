import React,{Component} from "react";

class Ki extends Component {

    state = {
    name: 'Kerkennah',
    photo: "/b.JPG",
    description: 'The islands and islets of Kerkennah offer a wild and sometimes virgin nature, a perfect destination for those who want to change their air and get away from city life. The weather in Kerkennah is mild and pleasant throughout the year, and the beaches are of incomparable beauty.but it is isolate from sfax .when,there is a storm '
  }

  handleAiClick = () => {
   this.setState({
    name: 'Ain drahim',
    photo: "/a.JPG",
    description: 'Aïn Draham seems to have been created for the happiness of those who aspire to a peaceful vacation, far from the din of overcrowded and noisy tourist cities, far from the sea and far from the desert where the pleasures of swimming or trips in the great south can be as exciting as it is tiring.but it was sad because my rules have not any protective support.'
   })
   }

   handleCiClick = () => {
    this.setState({
    name: 'Ain snoussi',
    photo: "/c.JPG",
    description: 'I\'m sad because my rules is destracted.'  })

   }

   handleBiClick = () => {
    this.setState({
    name: 'Kerkennah ',
    photo: "/b.JPG",
    description: 'The islands and islets of Kerkennah offer a wild and sometimes virgin nature, a perfect destination for those who want to change their air and get away from city life. The weather in Kerkennah is mild and pleasant throughout the year, and the beaches are of incomparable beauty.but it is isolate from sfax .when,there is a storm .'
    })
   }

   render() {
    return (
     <div>
         <div style={{marginTop: 20, display: 'flex', justifyContent: 'space-around'}}>
            <button className="ux" style={{ padding: '1em', border: ' 1px solid #CCC', borderRadius: '1em'}} onClick={this.handleAiClick}>Ain drahem</button>
            <button className="ux" style={{ padding: '1em', border: ' 1px solid #CCC', borderRadius: '1em'}} onClick={() => this.handleCiClick()}>Ain snoussi</button>
            <button className="ux" style={{ padding: '1em', border: ' 1px solid #CCC', borderRadius: '1em'}} onClick={() => this.handleBiClick()}>Kerkennah</button>
         </div>

       <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
           <h1 style={{ textShadow:"1px 1px 10px red"}}>{this.state.name}</h1>
           <img style={{width:'20%',height:'20%', borderRadius: "20px"}} src={this.state.photo} />
           <p style={{textIndent:30,fontWeight:"bold",color:"white"}}>{this.state.description}</p>
       </div>

</div>




)
}
}
export default Ki;
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