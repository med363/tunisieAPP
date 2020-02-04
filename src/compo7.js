import React from 'react'


export default function Catego(props){
    return(
      <div className="profile-container">
      <div className="profile">
        <img src={props.PathImage} className="photo"style={{width:"400px",height:"300px"}}alt="IMG"/>
        <h3 style={{marginTop:"8%",color:"black"}}>{props.name}</h3>
        <p style={{color:"black"}}>{props.desc}</p>
        <button  className="ux" onClick={()=>window.location=(props.url)}>Contribute to move on</button>
      </div>
      </div>
    )
  }
// export default ()=>{
//     return(
//         <div>
//             <Catego PathImage="/12.jpg" name="health" desc='Medcin in our country are good and they have a good competence in these domaine but there are not a good area to practise it.suchb as there are not a materiel,hospitals...' />
//             <Catego PathImage="/10.jpg" name="Politics" desc="it\'s importane to be free on what to do,but there are many polics people no known what is important to do for get up whith country.if all people of politics STEAL"/>
//             <Catego PathImage="/11.jpg" name="Education" desc="education in tunisia has much probem of infrastucture.in this way gouverment should building schools,university.and stop private education in private schools "/>
//         </div>
//     )
// }