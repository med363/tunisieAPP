import React, { Component } from "react";
// import {contactsRef} from "../config/firebase"
import axios from 'axios'

class contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactTunisia:[],
            _id:0
            
            
        }
    }

    componentDidMount() {
        
        axios.get('http://localhost:5000/contacts')
            .then(res => {
                console.log('res: ', res);
                this.setState({contactTunisia: res.data})
            
            })
            

            .catch(err => console.log('err: ', err))    
    }
     componentDidUpdate(prevState){
        if(prevState.contactTunisia.length!==this.state.contactTunisia.length){
            axios.get('http://localhost:5000/contacts')
            .then(res => {
                console.log('res: ', res);
                this.setState({contactTunisia: res.data})
            
            })
        }

     
    // valide = (mail) => {
    //     let b = 'false'
    //     for (let j = 1; j < (mail.length); j++) {


    //         if (mail.charAt(j) == '@') {
    //             // La on commence les conditions de tests. Ici on cherche l'@
    //             if (j < (mail.length - 4)) {
    //                 // Ici on regarde si il y a bien 4 caractère après le @
    //                 for (let k = j; k < (mail.length - 2); k++) {
    //                     // On ouvre une seconde boucle pour
    //                     if (mail.charAt(k) == '.')
    //                         b = 'true';
    //                     /*
    //                     on vérifie qu'il y ai bien un point et on met la variable testm à true (implicitement si toutes les conditions sont remplies) puis on ferme les conditions et boucles
    //                     */
    //                 }
    //             }
    //         }
    //     }

    //     if (b == 'false') alert('Votre adresse e-mail est incorrecte.');
    //     // si testm est évalué à false, on ouvre une boite d'alerte pour prévenir.



    //     return b;

    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('from handleSubmit');
    //     console.log('this.refs.name: ', this.refs.name.value)
    //     console.log('this.refs.number1: ', this.refs.number1.value)
    //     console.log('this.refs.number2: ', this.refs.number2.value)
    //     console.log('this.refs.email: ', this.refs.email.value)
    //     console.log('this.refs.fcb: ', this.refs.fb)
    //     contactsRef.push().set({
    //         name: this.refs.name.value,
    //         phone: this.refs.number1.value + this.refs.number2.value,
    //         email: this.refs.email.value
    //     })
    //     this.refs.contactForm.reset()
    // }

        }
    render() {
        return (
            <div>

            <h1>All Contacts Component</h1>
            <div style={{display: "flex",marginLeft: "150px",marginTop:"200px"}}>
                {
                    this.state.contactTunisia.map((item) => (
                        <div key={item._id} style={{backgroundColor: 'lightblue', margin:"10px", padding:" 20px"}}>
                        <p>{item.name}</p>
                        <span>{item.number1}</span>
                        <span>{item.number2}</span>
                        <p>{item.mail}</p>
                    </div>
                    ))}
            </div>
            </div>         
            )
        }
    }
export default contact
