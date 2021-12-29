import React, {Component} from 'react';
import { Link} from 'react-router-dom';

import axios from 'axios'


class ToDo extends Component {

    state = {
        comments_politics:[],
        item:"",
        id:''
    }
    componentDidMount() {
        
        axios.get('http://localhost:5000/comments2')
            .then(res => {
                console.log('res: ', res);
                this.setState({comments_politics: res.data})
            
            })
            

            .catch(err => console.log('err: ', err))    
    }
    componentDidUpdate(prevprops,prevState){
        if(prevState.comments_politics.length!==this.state.comments_politics){
            axios.get('http://localhost:5000/comments2')
            .then(res => {
                console.log('res: ', res);
                this.setState({comments_politics: res.data})
            
            })
        }

    }
    // updateContact = (value) => {
    //     this.setState({
    //         contacts: value
    //     });
    // };
    

    handleDelete = (id) => {
         axios.delete(`http://localhost:5000/comments2/${id}`)
           .then((res) => {
                if (res.status === 200) {
                    this.setState((prevState) => {
                       return {
                        comments: prevState.comments_politics.filter((item) => item._id !== id)
                }
                  })
               }
            console.log('delete res:: ', res)
              })
     }
     handleSubmit = () => {
       
//        const comment = {
//            comments_politics: this.state.item,
    
//        }
        axios.post('http://localhost:5000/comments2', {comments_politics:this.state.item}) 
        .catch((err) => console.log(err))
    } 
    
    
    render() {

//        let textDecorationStyle
//        if (this.state.done === true) {
//            textDecorationStyle = 'line-through'
//        } else {
//            textDecorationStyle = 'none'
//        }

        return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "5%"}}>
           <div>
           <h2 style={{marginLeft:"60px"}} className="title">{this.props.textContent}</h2>
           <input  
           style={{width: 500, height: 30}} 
           onChange={(e)=>this.setState({item:e.target.value})}
           />
           <button className="ux" onClick={this.handleSubmit}>Add</button>
           
           {console.log(this.state.comments_politics)}
             {this.state.comments_politics.map((el)=><div style={{color:"black",borderLeft:"1px solide blue ",background:"lightblue",marginRight:"12px",marginTop:"1px"}}>
                 <p>{el.comments_politics}</p>
                 {/* <button >delet</button> */}
                 <div style={{marginRight:'60%'}}>
                     
                 <button onClick={()=>this.handleDelete(el._id)}>delet</button>
                 
                 <Link to={`./modify_comments2/${el._id}`}>
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