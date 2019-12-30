import React, {Component} from 'react';
import ToDo from './ToDo';
import {addsRef} from "../config/firebase"

class Ri extends Component {

  state = {
    inputText: '',
    tasks: []
  }

  handleAddClick = () => {
    if (this.state.inputText.trim() !== '') {
      const tasksList = this.state.tasks;
      tasksList.push(this.state.inputText);
      this.setState({
        tasks: tasksList,
        inputText: ''
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
      <div style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40}}>
        <div ref="aider" onInput={this.handleSubmit}>
           <h2>{this.props.textContent}</h2>
          <input ref="ideas" 
            style={{width: 500, height: 30}} 
            value={this.state.inputText} 
            onChange={(event) => this.setState({inputText: event.target.value})} 
          />
          <button className="ux" onClick={this.handleAddClick} style={{height: 35, marginLeft: 4}}>Add</button>
        </div>
        {this.state.tasks.map((item) => {
          return <ToDo task={item} />
        })}
      </div>
    )
  }
}

export default Ri;