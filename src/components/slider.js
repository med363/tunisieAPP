import React,{useState,render} from 'react' //imr function || imrc class
import { Carousel } from 'react-bootstrap';


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{color:"#FFBC13"}}>Let's talk some of the homeless subject</h1>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/2.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h1 style={{color:"#FFBC13"}}>Let's check to the beautifull face of tunisia</h1>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/5.jpg"
            alt="Med Amine Blibech blibechmedamine@gmail.com"
          />
  
          <Carousel.Caption>
            <h1 style={{color:"#FFBC13"}}>Let's check up to move on</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
