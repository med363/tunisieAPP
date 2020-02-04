import React,{useState} from 'react'
import "./App.css"

export default ()=>{
    const[textCol,setText]=useState("");
    const renderDescription = () => {
        if (textCol==='sidi bou said') {
            return (
                <div style={{marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >Sidi Bou Said is the classic blue and white sun-soaked Tunisian coastal town, sitting on the north coast and facing out over the Mediterranean towards Sicily.</p>
                </div>
            )
        }
        if (textCol==='houmet'){
            return (
                <div style={{marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >Houmt Souk is the main town on the island of Djerba, just off the south-eastern coast and believed to have been the island of the Lotus-Eaters on which Odysseus and his sailors were stranded.</p>
                </div>)

        }
        if (textCol==='kerke'){
            return (
                <div style={{marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >This forgotten paradise is almost untouched by history,save a brief point.During the Roman Empire,Kerkennah and its natives were displaced while Kerkennah was utilized as a port and strategic viewpoint.After the Roman Empire collapsed, Kerkennah once more belonged to its people.</p>
                </div>)

        }
        if (textCol==='sfax'){
            return (
                <div style={{marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >Sfax, deuxième ville et centre économique de Tunisie, est une ville portuaire de l'est du pays située à environ 270 kilomètres de Tunis. Riche de ses industries et de son port, la ville joue un rôle économique de premier plan avec l'exportation de l'huile d'olive et du poisson frais ou congelé. Sfax est une cité d'affaires et attire peu les touristes. </p>
                </div>)

        }
    }
    return(
        <div style={{marginTop:"9%"}}>
            <h1 className="title" style={{textAlign:"center"}}>welcome to our beautifull country</h1>
            <input className="input1"style={{height:"5vh",borderRadius: '1em',marginTop:"50px",marginLeft:"29%",width:"40%"}} value={textCol} type="text" onChange={(e)=>setText(e.target.value)}placeholder="&#xf0bd;Search ..." />
            <div>
                {
                    textCol.length!==0 && <img style={{marginTop:"3%",marginLeft:"35%",width:"400px",height:"300px"}}src={`${textCol}.jpg`} />
                        
                }
                {
                    renderDescription()
                }
            </div>
        </div>
    )
}
// import Tst from './Formation'
// export default ()=>{
//     return(
//         <div>
//             <h1 style={{textAlign:"center",marginTop:"10%"}}>welcome to our beautifull country </h1>
//             <Tst src="p1.jpg" des=" "/>
//             <Tst src="p2.jpg" des="Sidi Bou Said is the classic blue and white sun-soaked Tunisian coastal town, sitting on the north coast and facing out over the Mediterranean towards Sicily."/>
//             <Tst src="" des=""/>
//             <Tst src="" des=""/>
//             <Tst src="" des=""/>
//             <Tst src="" des=""/>
//             <Tst src="" des=""/>
//         </div>
//     )

// }