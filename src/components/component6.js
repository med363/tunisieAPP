import React,{ Component }from "react";

import Slider from './slider'

export default class compR extends Component{
    render(){
    return(
          <div>      
              {/* <BrowserRouter> */}
         {/* <Carousel className="car">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/7.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="5.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

        <div className="header">
        {    /* <div style={{marginTop:"30%" ,marginBottom:"70%",marginRight:"10%" ,marginLeft:"10%",border:'1px solid none',borderRadius:"0%",padding:'30px,30px,30px,30px' }}>
       <p style={{textIndent:"30px",color:"red"}}><b>In Tunisia very wonderfull city but there are a lot of places that need to manage their infrastructure such as one of thier problem .in this context it is possible to give solutions to manage it.brief it is possible to save this pay

               
               </b></p>
               <Link to="/components/component1" className="ux" style={{color:"white", textDecorationLine:'none',marginLeft:'50%',border:"1px solid white" }}><b>let's check =></b></Link>
              

            </div>
           
</div>*/ }


<Slider  />

      
        
        
        </div>


</div>


    )
}
}