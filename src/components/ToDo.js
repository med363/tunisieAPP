import React, {Component} from 'react';
import {link} from 'react-router-dom'
class ToDo extends Component {

    state = {
        done: false
    }
    
    render() {

        let textDecorationStyle;
        if (this.state.done === true) {
            textDecorationStyle = 'line-through'
        } else {
            textDecorationStyle = 'none'
        }

        return (
            <div style={{border:"3px solid lightgray",background:"blue"}}>
            <div style={{ marginTop: 10, padding: 4, width: '60%'}}>
                <p style={{}}
    onClick={() => this.setState({done: !this.state.done })}><b >Subject: {this.props.task}</b><b>Description: {this.props.tas}</b></p>
            </div>
            </div>
        )

    }
}

export default ToDo;