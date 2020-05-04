import React, {Component} from 'react';
import {link} from 'react-router-dom';
import axios from 'axios'

class ToDo extends Component {

    state = {
        done: false,
        comments:[],
        // id:0
    }
    componentDidMount() {
        
        axios.get('http://localhost:5000/comments')
            .then(res => {
                console.log('res: ', res);
                this.setState({comments: res.data})
            
            })
            

            .catch(err => console.log('err: ', err))    
    }
    // updateContact = (value) => {
    //     this.setState({
    //         contacts: value
    //     });
    // };
    

    // handleDelete = (id) => {
    //     axios.delete(`http://localhost:5000/comments/${id}`)
    //         .then((res) => {
    //             if (res.status == 200) {
    //                 this.setState((prevState) => {
    //                     return {
    //                         comments: prevState.comments.filter((item) => item._id != id)
    //                     }
    //                 })
    //             }
    //             console.log('delete res:: ', res)
    //         })
    // }
    
    render() {

        let textDecorationStyle
        if (this.state.done === true) {
            textDecorationStyle = 'line-through'
        } else {
            textDecorationStyle = 'none'
        }

        return (
        <div style={{borderLeft:"1px solide blue ",background:"lightblue",marginRight:12}}>
           
             {/* {this.state.comments.map((i)=>( */}
            {/* <div key={i._id} style={{}}> */}
                <p style={{margin:'12px'}}
    onClick={() => this.setState({done: !this.state.done })}><b >{this.props.task}</b> </p>
            
            <div>
            {/* <button onClick={(id) => this.handleDelete}>delet</button> */}
            <button >delet</button>
            <button>modofy</button>
            </div>
            </div>
            // ))}
        // </div>    
          
           
        )

    }
}

export default ToDo;