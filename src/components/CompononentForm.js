import React, { Component } from "react";
import {contactsRef} from "../config/firebase"


class contact extends Component {
    valide = (mail) => {
        let b = 'false'
        for (let j = 1; j < (mail.length); j++) {


            if (mail.charAt(j) == '@') {
                // La on commence les conditions de tests. Ici on cherche l'@
                if (j < (mail.length - 4)) {
                    // Ici on regarde si il y a bien 4 caractère après le @
                    for (let k = j; k < (mail.length - 2); k++) {
                        // On ouvre une seconde boucle pour
                        if (mail.charAt(k) == '.')
                            b = 'true';
                        /*
                        on vérifie qu'il y ai bien un point et on met la variable testm à true (implicitement si toutes les conditions sont remplies) puis on ferme les conditions et boucles
                        */
                    }
                }
            }
        }

        if (b == 'false') alert('Votre adresse e-mail est incorrecte.');
        // si testm est évalué à false, on ouvre une boite d'alerte pour prévenir.



        return b;

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('from handleSubmit');
        console.log('this.refs.name: ', this.refs.name.value)
        console.log('this.refs.number1: ', this.refs.number1.value)
        console.log('this.refs.number2: ', this.refs.number2.value)
        console.log('this.refs.email: ', this.refs.email.value)
        console.log('this.refs.fcb: ', this.refs.fb)
        contactsRef.push().set({
            name: this.refs.name.value,
            phone: this.refs.number1.value + this.refs.number2.value,
            email: this.refs.email.value
        })
        this.refs.contactForm.reset()
    }


    render() {
        return (
                <div  >
                    <div className="container-contact1">
                    <form ref="contactForm"  onSubmit={this.handleSubmit} style={{marginTop:"20%",height:"450px" ,marginRight:"30%" ,marginLeft:"-2%",border:'1px none blue',padding:'30px,30px,30px,30px' }} className="contact1-form validate-form">
                        <span className="contact1-form-title">CONTACT US</span>
                        <div className="wrap-input1 validate-input" data-validate = "Name is required"><label style={{color:"black",fontWeight:"bold"}}>Your Name</label> <input className='input1' style={{borderRadius: '1em'}} ref="name" type="text" placeholder='Name' required/><span className="shadow-input1"></span><br/></div>
                        
                        <label style={{color:"black",fontWeight:"bold"}}>Your Number</label> 
                        <div className="wrap-input1 validate-input"  style={{}}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <select className='input1' style={{borderRadius: '1em'}} ref="number1">
                                    <option value="+216">TUN </option>
                                    <option value="+214">ALG</option>
                                    <option value="+213">MAR</option>
                                </select>
                                {/* <input type="number" placeholder='+216' required style={{width: 60}} /><br/> */}
                                <input className='input1' style={{borderRadius: '1em'}} ref="number2" type="text" placeholder='55242133' required /><span className="shadow-input1"></span><br/>
                            </div>
                        </div>
                        <br /><div className="wrap-input1 validate-input" >
                        <label style={{color:"black",fontWeight:"bold"}}>Your E-mail</label> <input className='input1' style={{borderRadius: '1em'}} ref="email" type="email" placeholder='user@gmail.com' name="email" size='30' maxLength='40' required /><span className="shadow-input1"></span></div><br/>
                        <br/><div className="container-contact1-form-btn"><input className="ux" type="submit" value="Envoyer"  style={{color:"black" ,display: 'flex',marginLeft:"auto",marginRight:"80%", justifyContent:'center', flexDirection: 'column', alignItems: 'center', padding: '1em', border: ' 1px none #CCC' }} /></div>
                        
                        

                    </form>
                    <img src='/1.jpg'/>
                    </div>
                    
                        
                           
                    
                    {/* <div className="footer" ><div style={{fontFamily:"cursov",fontWeight:"bold"}}>Follow us!</div><br/><img className="fa fa-facebook" src="/13.PNG" ref="fb" onClick={() => window.location="https://www.facebook.com/medamine.blibech"} style={{ cursor:'wait',marginLeft:'0px',marginRight:'80px' }}/><br/><img  className="fa fa-google" src="/14.jpg" ref="fb" onClick={() => window.location="https://mail.google.com/mail/u/0/#ùinbox"} style={{ cursor:'wait', marginLeft:'0px' ,marginRight:'80px'}} /></div> */}
                </div>
                           
        )
    }
}
export default contact
