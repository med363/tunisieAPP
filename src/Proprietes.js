import React,{useState} from 'react'
import "./App.css"

export default ()=>{
    const[textCol,setText]=useState("");
    const renderDescription = () => {
        if (textCol==='sidi bou said') {
            return (
                <div style={{textIndent:"26px",marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >Sidi Bou Said is the classic blue and white sun-soaked Tunisian coastal town, sitting on the north coast and facing out over the Mediterranean towards Sicily.</p>
                </div>
            )
        }
        if (textCol==='houmet'){
            return (
                <div style={{textIndent:"26px",marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >Houmt Souk is the main town on the island of Djerba, just off the south-eastern coast and believed to have been the island of the Lotus-Eaters on which Odysseus and his sailors were stranded.</p>
                </div>)

        }
        if (textCol==='kerke'){
            return (
                <div style={{textIndent:"26px",marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >This forgotten paradise is almost untouched by history,save a brief point.During the Roman Empire,Kerkennah and its natives were displaced while Kerkennah was utilized as a port and strategic viewpoint.After the Roman Empire collapsed, Kerkennah once more belonged to its people.</p>
                </div>)

        }
        if (textCol==='sfax'){
            return (
                <div style={{textIndent:"26px",marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >Sfax, deuxième ville et centre économique de Tunisie, est une ville portuaire de l'est du pays située à environ 270 kilomètres de Tunis. Riche de ses industries et de son port, la ville joue un rôle économique de premier plan avec l'exportation de l'huile d'olive et du poisson frais ou congelé. Sfax est une cité d'affaires et attire peu les touristes. </p>
                </div>)

        }
        if (textCol==='el jam'){
            return (
                <div style={{textIndent:"26px",marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >The walls of the mighty Roman amphitheater of El Djem dwarf the surrounding modern town. This incredibly well preserved Roman relic is Tunisia's big sightseeing highlight and one of the best examples of amphitheater architecture left standing in the world, reminding of Rome's once grand grip across North Africa. You can still walk the corridors under the arena, just like the gladiators did. Or, climb up to the top seating tiers and sit staring across the arena, imagining the battles that took place below.</p>
                </div>)

        }
        if (textCol==='djerba'){
            return (
                <div style={{textIndent:"26px",marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >If you're looking for the picture-perfect beach escape, then the island of Djerba checks all the right boxes. The island town of Houmt Souk is the main point of interest off the beach, with an old town district that is a muddle of whitewashed houses. Houmt Souk's shopping is an attraction in itself, with plenty of handicraft vendors for browsing and haggling opportunities off the beach. But it's those sandy strips of shoreline out of town that are the island's most popular highlight. Pristine and trimmed by date palms, the beaches are relaxing, get-away-from-it-all settings where summer daydreams are made.</p>
                </div>)

        }
        if (textCol==='carthage'){
            return (
                <div style={{textIndent:"26px",marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >Once Rome's major rival, Carthage was the city of the seafaring Phoenicians forever memorialized in the Punic Wars. The atmospheric ruins of this ancient town now sit beside the sea amid the suburbs of Tunis, a warning that even the greatest cities can be reduced to rubble. The ruins are extensive but spread out, and if you've been lucky enough to visit ancient city sites such as Ephesus in Turkey or Volubilis in Morocco, which are well-preserved, Carthage can seem quite underwhelming at first. But these UNESCO World-Heritage-listed remnants are hugely important historically, and any tourist interested in North Africa's ancient past shouldn't miss a visit here.</p>
                </div>)

        }
        if (textCol==='sahra'){
            return (
                <div style={{textIndent:"26px",marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >Tunisia's vast Sahara covers much of the country's interior, and the most beautiful corner of the desert is the field of sand dunes known as the Grand Erg Oriental. These poetically beautiful dunes are a surreal and gorgeous landscape of huge waves, shaped by the ever-shifting desert sands. For many visitors, this is an adventure playground for riding dune buggies and camel treks, but nothing tops the simple pleasure of sitting atop one of these mammoth sand mountains and watching the sun set over the Sahara.</p>
                </div>)

        }
        if (textCol==='bella regia'){
            return (
                <div style={{textIndent:"26px",marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >With mosques, madrassas, and tombs aplenty, Kairouan has more than its fair share of monuments as the fourth most important city for those of the Muslim faith. The Arabic architecture here is truly inspiring, and the skyline is full of skinny minarets and bulky domes. But it's probably the back alleys of the city's medina that steal the show. With narrow, maze-like lanes lined with crumbling colorful houses, Kairouan's old town has an enchanting, lost-in-time atmosphere that is a true highlight of a visit here.</p>
                </div>)

        }
        if (textCol==='sousse '){
            return (
                <div style={{textIndent:"26px",marginLeft:"35%",width: '410px',fontWeight:"bold"}}>
                    <p >Sousse est une ville portuaire de l'Est de la Tunisie, située à 143 kilomètres au sud de Tunis, et ouverte sur le golfe d'Hammamet. Capitale du Sahel tunisien — elle est parfois surnommée la « perle du Sahel » — et chef-lieu du gouvernorat du même nom, elle est la troisième municipalité du pays après Tunis, et Sfax et la quatrième agglomération, Nabeul étant la troisième. La médina de Sousse est inscrite au patrimoine mondial de l'Unesco depuis 1988.</p>
                </div>)

        }
    }
    return(
        <div style={{marginTop:"9%"}}>
            <h1 className="title" style={{textAlign:"center"}}>welcome to our beautifull country</h1>
            <input className="input1"style={{height:"5vh",borderRadius: '1em',marginTop:"50px",marginLeft:"29%",width:"40%"}} value={textCol} type="text" onChange={(e)=>setText(e.target.value)}placeholder="&#xf0bd;Search ..." />
            <div>
                {
                    textCol.length!==0 && <img style={{marginTop:"3%",marginLeft:"35%",width:"400px",height:"300px"}} src={`${textCol}.jpg`} />
                        
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