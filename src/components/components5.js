import React, {Component} from 'react';
import ToDo from './ToDo';
import {addsRef} from "../config/firebase"
import '../App.css'
class Ri extends Component {


  state = {
    inputText: '',
    inputDec:'',
    tasks: [],
    tab:[]
  }

  handleAddClick = () => {
    if (this.state.inputText.trim() !== '') {
      const tasksList = this.state.tasks;
      const table= this.state.tab;
      tasksList.push(this.state.inputText);
      table.push(this.state.inputDec);
      this.setState({
        tasks: tasksList,
        tab:table,
        inputText: '',
        inputDec:''

      })
    }
  }
    handleSubmit = (event) => {
      event.preventDefault();
      console.log('from handleSubmit');
      console.log('this.refs.ideas: ', this.refs.ideas.value);
      addsRef.push().set({
        ideas: this.refs.ideas.value,
      })
      // this.refs.aider.reset()
  }

  render() {
    
    return (
      <div  style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40,color:"black"}}>
        <div  ref="aider" onInput={this.handleSubmit}>
          <div>
           <h2 style={{textShadow: "2px 2px 4px #000000",color:"white"}}>{this.props.textContent}</h2>
           <input ref="ideas"   rows="10" cols="60"
            style={{width: 500, height: 30}} 
            value={this.state.inputText} 
            onChange={(event) => this.setState({inputText: event.target.value})}
            />
        {/* <br/>
          // <textarea ref="ideas"   rows="10" cols="68.5"
         
          //   value={this.state.inputDec} 
          //   onChange={(event) => this.setState({inputDec: event.target.value})}
          //   placeholder="Put You description " 
          >Subject:
          your description:</textarea><br/> */}
          <button className="ux" onClick={this.handleAddClick} >Add</button>
          </div>
        </div>
        {this.state.tasks.map((item) => {
          return <ToDo task={item} />
        })}
         {this.state.tab.map((item) => {
          return <ToDo tas={item} />
        })}
      </div>
    )
  }
}

export default Ri;