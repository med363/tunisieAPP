import React, {Component} from 'react';
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
            <div style={{ marginTop: 10, padding: 4, width: '60%'}}>
                <p style={{boxShadow:'0px 10px 5px 1px gray'}}
                 onClick={() => this.setState({done: !this.state.done})}>{this.props.task}</p>
            </div>
        )

    }
}

export default ToDo;