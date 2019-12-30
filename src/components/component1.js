import React from "react";
import Ki from "./component4";
export default ()=>{
    return(
        <div >
            <div style={{display: 'flex', justifyContent:'center', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{textShadow:"1px 1px 10px black"}} >Wonderful Tunisia </h1>
            <img style={{ borderRadius: "20px"}}src="/images.JPG"/>
            </div>
            <p style={{textIndent:30,fontWeight:'bold',textAlign:'justify'}}>
             Tunisia represents beautiful white sand beaches, green oases and yellow sands of the Sahara, behind which one can see sharp mountain peaks. The mild Mediterranean climate, the clean and warm Mediterranean Sea. Unfortunately, it needs solutions so that the infrastructure is well.         </p>
            <div>
            <h3>Some exemples of bad infrastructure:</h3>
            <Ki/>
            </div>
           
        </div>
           

    )
}