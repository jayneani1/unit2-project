import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'


const CarouselPage = (props) => (
    <div className='Carousel'>
        <Carousel>
            <Carousel.Item>
                <img className="CItem" src ="https://stevethebartender.com.au/wp-content/uploads/2018/08/become-bartender.jpg" />
           <Carousel.Caption>
            <h3>Creative Drink Ideas</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="CItem" src="https://www.waterford.com/media/wysiwyg/Waterford/Inspiration/Halloween_choco_pumpkin_mobile_banner.jpg" />
            <Carousel.Caption>
            <h3>Try New Things</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img className="CItem" src="https://sparetimelansing.com/wp-content/uploads/2018/03/AdobeStock_106692675.jpeg" />
               <Carousel.Caption>
            <h3>Entertain Your Friends At Home</h3>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)

{/* Quick walkthrough for how to use Bootstrap Carousel https://www.youtube.com/watch?v=M8ZDDbEGrBA */}

export default CarouselPage;