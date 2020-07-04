// import React from 'react'
// export default  ()=>{
//     <div>
       
//        <input
           
             
//     style={{width: 500, height: 30}} 
//     // name='commentair
//     onChange={(e)=>this.setState({item:e.target.value})}
//     />
//     <button className="ux" onClick={this.handleSubmit}>Add</button>
//     </div>


// }
// import React,{useState} from 'react'
// [input,setInput]=useState('')
// export default ()=>{
//     return(<div>
//     handleChange=(e)=>{
//         setInput:{e.target.value}
//     }
//     <input value='text'></input>
//     </div>)
// }
import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

export default class CompD extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments_politics:"",
            item:"",
            id:''
        }
    }
    handleChange = event => {
        this.setState({
            comments_politics:event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const comment = {
            comments_politics: this.state.comments_politics
        }
        axios.put(`http://localhost:5000/comments2/${this.props.match.params.id}`, comment)
        .then(res => {
            if (res.status == 200) {
                this.props.history.push('/components/component2')
            }
        })
        .catch((err) => console.log(err))
    }
    componentDidMount() {
        const commentId = this.props.match.params.id;
        axios.get(`http://localhost:5000/comments2/${commentId}`)
        .then((res) => {
            console.log({res});
            this.setState({
                comments_politics  : res.data.comments_politics,
                id: res.data._id 
            })
        })
        .catch(err => alert(err))
        // console.log('id:: ', this.props.match.params.id)
    }
    render() {
        console.log(this.state)
        return (
   
           
            <div style={{marginRight:"12px",marginTop:"100px",marginLeft:"30%"}}>
            <h2 style={{marginLeft:"60px"}} className="title">{this.props.textContent}</h2>
            
            <input  
            style={{width: 500, height: 30}}
            type='text'
             value={this.state.comments_politics}
            name='comments_politics'
            onChange={this.handleChange}
            // onChange={(e)=>this.setState({item:e.target.value})}
            />
            <button className="ux" onClick={this.handleSubmit}>Modify comments</button>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "15%",color:"black",borderLeft:"1px solide blue ",background:"lightblue",marginRight:"12px",marginTop:"100px"}}>
            
            
            
            </div>
     
                    
                    
                    {/* < Link to='/contacts'><input style={{ marginLeft: "6%" }} type="submit" value="add contact" /></Link> */}

                
            </div>
        )
    }
}