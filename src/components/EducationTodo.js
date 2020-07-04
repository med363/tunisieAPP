import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {CompD} from './Modify_comments'
import axios from 'axios'
import { Form } from 'react-bootstrap';

class ToDo extends Component {

    state = {
        comments_education:[],
        item:"",
        id:''
    }
    componentDidMount() {
        
        axios.get('http://localhost:5000/comments3')
            .then(res => {
                console.log('res: ', res);
                this.setState({comments_education: res.data})
            
            })
            

            .catch(err => console.log('err: ', err))    
    }
    componentDidUpdate(prevprops,prevState){
        if(prevState.comments_education.length!=this.state.comments_education){
            axios.get('http://localhost:5000/comments3')
            .then(res => {
                console.log('res: ', res);
                this.setState({comments_education: res.data})
            
            })
        }

    }
    // updateContact = (value) => {
    //     this.setState({
    //         contacts: value
    //     });
    // };
    

    handleDelete = (id) => {
         axios.delete(`http://localhost:5000/comments3/${id}`)
           .then((res) => {
                if (res.status === 200) {
                    this.setState((prevState) => {
                       return {
                        comments: prevState.comments_education.filter((item) => item._id != id)
                }
                  })
               }
            console.log('delete res:: ', res)
              })
     }
     handleSubmit = () => {
       
        const comment = {
            comments_education: this.state.item,
    
        }
        axios.post('http://localhost:5000/comments3', comment) 
        .catch((err) => console.log(err))
    } 
    
    
    render() {

        let textDecorationStyle
        if (this.state.done === true) {
            textDecorationStyle = 'line-through'
        } else {
            textDecorationStyle = 'none'
        }

        return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "5%"}}>
           <div>
           <h2 style={{marginLeft:"60px"}} className="title">{this.props.textContent}</h2>
           <input  
           style={{width: 500, height: 30}} 
           // name='commentair
           onChange={(e)=>this.setState({item:e.target.value})}
           />
           <button className="ux" onClick={this.handleSubmit}>Add</button>
           
           {console.log(this.state.comments_education)}
             {this.state.comments_education.map((el)=><div style={{color:"black",borderLeft:"1px solide blue ",background:"lightblue",marginRight:"12px",marginTop:"1px"}}>
                 <p>{el.comments_education}</p>
                 {/* <button >delet</button> */}
                 <div style={{marginRight:'60%'}}>
                     
                 <button onClick={()=>this.handleDelete(el._id)}>delet</button>
                 
                 <Link to={`./modify_comments3/${el._id}`}>
                <button>modify</button>
                </Link>
                
                </div>
                
             </div>
             
             )}
           </div>
            </div>
            // ))}
        // </div>    
          
           
        )

    }
}

export default ToDo;