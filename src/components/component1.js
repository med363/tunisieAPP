import React from 'react'
import Ki from "./component4";
import {Link} from 'react-router-dom'
import '../App.css'

export default ()=>{
    return(
        <div className="style" >
            <div className="f">
               
             <p className="p">
             <h3 className="title" >Wonderful Tunisia </h3>
             Tunisia represents beautiful white sand beaches, green oases and yellow sands of the Sahara, behind which one can see sharp mountain peaks. The mild Mediterranean climate, the clean and warm Mediterranean Sea. Unfortunately, it needs solutions so that the infrastructure is well and many problem such as Politics
,health,Education...<br/>
<button className='ux' style={{width:"%"}} onClick={()=>window.location="/Proprietes"}>For Descovering</button> 
            </p> 
    <img className="h" src="/images.jpg"/>
             
            </div>        
                  
            
            

            {/* <bottom to="./component2" className="ux" style={{marginBottom:"80px",color:"white", textDecorationLine:'none',marginRight:'80%',border:"1px solid white" }}>let's contribute to move on</bottom> */}
        </div>
            
           /* <div>
           <h3 style={{color:"red"}}>Some exemples of bad infrastructure:</h3>
            <Ki/>
            <h3 style={{color:"red"}}><b>What solutions do you have to deal with this problem?</b></h3>
           {/* <form onSubmit={hundleSubmit}>
        //         <labe>Login</labe><input type="text" placeholder="user@gmail.com" ref="Login"/>
        //         <label>Password</label>
        //     </form> */
            /* </div> */
            
         
    )
}