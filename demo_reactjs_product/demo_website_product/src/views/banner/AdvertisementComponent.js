import React from "react";
import { advertisementKia } from "../data/DataPictureCar";
import '../../css/AdvLayout.css';

const dataAdv = advertisementKia;

function AdvComponent() {


   return (
      <div className="row m-1">
         {dataAdv.map((item, index) => {
            return (
               <div className="col-3 p-1 card_adv" key={index}>
                  <div className="overlay m-1"></div>
                  <img className="card_img" src={item.url} />
                  <p className="card_text title">{item.title}</p>
                  <p className="card_text des">{item.des}</p>
                  <button className="detail_button select">Xem mục</button>
               </div>
            )
         })}
      </div>
   );

}

export default AdvComponent;