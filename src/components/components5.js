import React, {Component} from 'react';
import ToDo from './ToDo';
import axios from 'axios' 
// import {addsRef} from "../config/firebase"
import '../App.css'
export default class Ri extends Component {
constructor(props){
  super(props)
    this.state={
      // comments:'',
      tasks: [],
      
      inputText: ''
    }
  
}

handleChange = event => {
  
  if (this.state.inputText.trim() !== '') {
    const tasksList = this.state.tasks;
  tasksList.push(this.state.inputText)
    this.setState({
      // [event.target.name]: event.target.value,
   tasks: tasksList,
   inputText: ''    
    })

} 
 }
handleSubmit = event => {
    event.preventDefault();
    const comment = {
        comments: event.target.value,

    }
    axios.post('http://localhost:5000/comments', comment)
    .then(res => {
      console.log('res: ', res);
      this.setState({comments: res.data})
  
  })
      
    .catch((err) => console.log(err))
} 


//   state = {
//     
//     inputDec:'',
//     ,
//     tab:[]
//   }

//   handleAddClick = () => {
//     if (this.state.inputText.trim() !== '') {
//       
//       const table= this.state.tab;
//       ;
//       table.push(this.state.inputDec);
//       this.setState({
//        
//         tab:table,
//         
//         inputDec:''

//       })
//     }
//   }
//    componentWillMount=()=>{
// alert("Thanks for add you opinion")
//    }



//     // handleSubmit = (event) => {
//     //   event.preventDefault();
//     //   console.log('from handleSubmit');
//     //   console.log('this.refs.ideas: ', this.refs.ideas.value);
//     //   addsRef.push().set({
//     //     ideas: this.refs.ideas.value,
//     //   })
//       // this.refs.aider.reset()
//   }

render() {
    
    return (
      <div  style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "15%",color:"black"}}>
        <div  >
          <div>
           <h2 style={{marginLeft:"60px"}} className="title">{this.props.textContent}</h2>
           <input
           
             
            style={{width: 500, height: 30}} 
            // name='commentaire'
            value={this.setState.inputText} 
            onChange={this.handleChange}
            />
        {/* <br/>
          // <textarea ref="ideas"   rows="10" cols="68.5"
         
          //   value={this.state.inputDec} 
          //   onChange={(event) => this.setState({inputDec: event.target.value})}
          //   placeholder="Put You description " 
          >Subject:
          your description:</textarea><br/> */}
          <button className="ux" onSubmit={this.handleSubmit}   >Add</button>
          </div>
        </div>
      {this.state.tasks.map((item) => {
          return <ToDo  task={item} />
        })}
         {/* {this.state.tab.map((item) => {
          return <ToDo tas={item} />
        })} */}
        
      </div>
    )
};

}