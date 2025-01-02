import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../css/SlideLayout.css';
import { bannerListImage } from "../data/DataPictureCar";



function SlideCarComponent() {
   return (
      <div className="slide_contain">
         <Carousel className="slide_main">
            {bannerListImage.map((item, index) => {
               return (
                  <Carousel.Item key={index}>
                     <div className="slide_item">
                        <img className="slide_img" src={item} />
                     </div>
                  </Carousel.Item>
               )
            })}
         </Carousel>
      </div>
   );
}

export default SlideCarComponent;