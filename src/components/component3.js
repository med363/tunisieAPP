import React, {Component} from 'react';
// import './style.css';


class Comp3 extends Component {

  state = {
    name: 'Sarra ',
    photo: 'https://www.robohash.org/sarra2?set=set3',
    description: 'My name is Sarra'
  }

  handleHaroldClick = () => {
    this.setState({
      name: 'Harold',
      photo: 'https://www.robohash.org/harold2?set=set3',
      description: 'I am a Designer'
    })
  }

  handleDanielClick = () => {
    this.setState({
    name: 'Daniel',
    photo: 'https://www.robohash.org/Daniel?set=set3',
    description: 'I am a nervous person'})

  }

  handleSarraClick = () => {
    this.setState({
      name: 'Sarra ',
      photo: 'https://www.robohash.org/sarra2?set=set3',
      description: 'My name is Sarra'
    })
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center'}}><h1>this remarkable page</h1></div>
        
        <div style={{marginTop: 50, display: 'flex', justifyContent: 'center'}}>
        <button onClick={this.handleSarraClick}>Sarra</button>
        <button onClick={() => this.handleHaroldClick()}>Harold</button>
        <button onClick={() => this.handleDanielClick()}>Daniel</button>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <h1>{this.state.name}</h1>
          <img src={this.state.photo} />
          <p>{this.state.description}</p>
        </div>
       
        </div>
         
     

      
    )
  }
}

export default Comp3;