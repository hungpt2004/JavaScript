import React from "react";
import '../../css/NewsLayout.css';
import { newsData, newsPlus } from "../data/DataPictureCar";

function NewsComponent() {
   return (
      <div className="row m-1 mt-5">
         <div className="col-4">
            <p className="fs-3" >Xem nhiều lần</p>
            {newsData.map((item, index) => {
               return (
                  <div key={index} className="card_news row">
                     {/* image */}
                     <div className="col-5 d-flex align-items-center justify-content-center">
                        <img src={item.url} className="img-fluid w-100 img_first" />
                     </div>

                     {/* title and date */}
                     <div className="col-7 d-flex flex-column align-items-start justify-content-space-between mt-2">
                        <p className="news_text">{item.title}</p>
                        <p className="news_text date">{item.content}</p>
                     </div>
                  </div>
               );
            })}
         </div>
         <div className="col-5">
            <p className="fs-3">Tin mới</p>
            <div className="fake_news d-flex flex-column">
               <img src='https://kiavietnam.com.vn/storage/cup-thumb.jpg' className="img-fluid w-100" />
               <p className="news_text mt-3">2024 SALES CUSTOMER SATISFACTION (KSCS): THACO AUTO XẾP HẠNG CAO NHẤT TOÀN CẦU VỀ CHỈ SỐ HÀI LÒNG CỦA KHÁCH HÀNG MUA XE</p>
               <p className="news_text date">Ngày 31 tháng 12 16:56</p>
               <p className="news_text content ">THACO AUTO tiếp tục được Tập đoàn Kia công nhận là "Đơn vị bán hàng xuất sắc với chỉ số hài lòng khách hàng cao nhất" năm 2024 thông qua khảo sát "2024 Sales Customer Satisfaction (KSCS)" được thực hiện trên 33 quốc gia. Đây là minh chứng cho chất lượng dịch vụ hàng đầu mà...</p>
            </div>
         </div>
         <div className="col-3">
            <p className="fs-3">Tin mới</p>
            {newsPlus.map((item, index) => {
               return (
                  <div key={index} className="fake_news plus d-flex flex-column mb-2">
                     <img src={item.url} className="img-fluid w-100 img_first" />
                     <p className="news_text mt-3">{item.title}</p>
                     <p className="news_text date">{item.content}</p>
                  </div>
               )
            })}
         </div>
      </div>
   );
}

export default NewsComponent;