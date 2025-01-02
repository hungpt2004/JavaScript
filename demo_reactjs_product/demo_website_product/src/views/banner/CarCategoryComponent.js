import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../css/CarCategory.css";
import "../../css/SlideLayout.css";
import { category, dataCategoryCar } from "../data/DataPictureCar";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

function CarCategoryComponent() {
   const [pickCategory, setPickCategory] = useState("SUV");
   const [cars, setCars] = useState([]);
   let sliderRef = useRef(null);

   const handleClickCategory = (category) => {
      setPickCategory(category);
   };

   //Handle Next Image
   const handleButtonNext = () => {
      sliderRef.slickNext();
   }

   const handleButtonPrev = () => {
      sliderRef.slickPrev();
   }

   console.log(sliderRef);


   //Set Cars
   useEffect(() => {
      const filteredCars = dataCategoryCar.filter((car) => car.type === pickCategory);
      setCars(filteredCars);
   }, [pickCategory]);

   console.log(cars);

   //Setting slide
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
   };

   return (
      <div className="category_car">
         {/* Choose Category */}
         <div className="category_contain">
            {category.map((item, index) => (
               <div
                  onClick={() => handleClickCategory(item)}
                  key={index}
                  className={`detail_category ${pickCategory === item ? "active" : ""}`}
               >
                  {item}
               </div>
            ))}
         </div>

         {/* Display Cars */}
         <div className="slide_contain mt-3">
            <Slider
               {...settings}
               ref={slider => { sliderRef = slider }
               }>
               {cars.map((item, index) => (
                  <div key={index}>
                     <div className="row" style={{ width: "100%" }}>
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                           <p className="detail_item">{item.name}</p>
                           <p className="detail_item">
                              {item.price.toLocaleString("vi-VN")} VND
                           </p>
                           <button className="detail_button all">Xem tất cả</button>
                        </div>
                        <div className="col-md-6">
                           <img className="img-fluid w-100 detail_img" src={item.url} alt={item.name} />
                        </div>
                     </div>
                     <p className="text-center">{index+1}/{cars.length}</p>
                     <div className="button_navigator">
                        <BsArrowLeftCircleFill size={50} className="detail_button navigator" onClick={handleButtonPrev} /> {/* Icon cho nút Sau */}
                        <BsArrowRightCircleFill size={50} className="detail_button navigator ms-1" onClick={handleButtonNext} />
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   );
}

export default CarCategoryComponent;
