import React from "react";
import '../../css/FooterLayout.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function FooterComponent() {
   return (
      <div className="row mt-3" style={{ backgroundColor: 'rgb(5, 22, 34)' }}>
         {/* logo infor */}
         <div className="col-3 d-flex flex-column ms-4">
            <div className="img_footer" >
               <img src="https://kiavietnam.com.vn/themes/main/images/home/logo-footer.png" className="w-100 img-fluid" />
            </div>
            <p className="news_text footer">CÔNG TY TNHH PHÂN PHỐI THACO AUTO</p>
            <p className="news_text sub">GIẤY CNĐKDN: 4000779880 NGÀY CẤP 27/10/2010</p>
            <p className="news_text sub">CƠ QUAN CẤP: PHÒNG ĐĂNG KÝ KINH DOANH SỞ KẾ HOẠCH VÀ ĐẦU TƯ TỈNH QUẢNG NAM</p>
            <p className="news_text sub">ĐỊA CHỈ: THÔN 4, XÃ TAM HIỆP, HUYỆN NÚI THÀNH, TỈNH QUẢNG NAM, VIỆT NAM</p>
            <div className="img_footer certificate" >
               <img src="https://kiavietnam.com.vn/themes/main/images/general/bct.png" className="w-100 img-fluid" />
            </div>
            {/* social */}
            <div className="social">
               <FontAwesomeIcon icon={faFacebookF} size="2x" color="white" className="mb-4 cursor-pointer" />
               <FontAwesomeIcon icon={faInstagram} size="2x" color="white" className="mb-4 cursor-pointer" />
               <FontAwesomeIcon icon={faYoutube} size="2x" color="white" className="mb-4 cursor-pointer" />
            </div>
            <p className="news_text footer">TẢI ỨNG DỤNG KIA CONNECT</p>
            {/* app */}
            <div className="row mb-3">
               <div className="col-3"><img className="w-100 img-fluid cursor-pointer" src="https://kiavietnam.com.vn/themes/main/images/kia-connect/qr-kia-connect.jpg" /></div>
               <div className="col-5 d-flex flex-column">
                  <img src="https://kiavietnam.com.vn/themes/main/images/general/ggp.png" className="w-100 img-fluid mb-2 cursor-pointer" />
                  <img src="https://kiavietnam.com.vn/themes/main/images/general/at.png" className="w-100 img-fluid cursor-pointer" />
               </div>
            </div>

            {/* chinh sach */}
            <div className="row mb-4">
               <div className="col-3 policy">
                  <p className="news_text rule">Chính sách thanh toán</p>
               </div>
               <div className="col-3 policy">
                  <p className="news_text rule"> Chính sách bảo mật</p>
               </div>
               <div className="col-3 policy">
                  <p className="news_text rule"> Chính sách giao nhận - vận chuyển</p>
               </div>
               <div className="col-3 policy">
                  <p className="news_text rule"> Các điều khoản và điều kiện chung</p>
               </div>
            </div>

            <p className="news_text sub">© 2020 KIA Viet Nam. All right reserved.</p>
         </div>



         {/* 4 muc */}
         <div className="col-8 service row ms-5 d-flex justify-content-center text-center" style={{ marginTop: '75px' }}>
            <div className="col-3">
               <p className="news_text footer">SẢN PHẨM</p>
               <ul className="list_product" style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     Hatchback
                     <IoIosArrowForward icon={faArrowRight} className="ms-2" />
                  </li>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     Sedan
                     <IoIosArrowForward icon={faArrowRight} className="ms-2" />
                  </li>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     SUV
                     <IoIosArrowForward icon={faArrowRight} className="ms-2" />
                  </li>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     Hybrid
                     <IoIosArrowForward icon={faArrowRight} className="ms-2" />
                  </li>
               </ul>
            </div>
            <div className="col-3">
               <p className="news_text footer">DỊCH VỤ</p>
               <ul className="list_product" style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     Giới thiệu chung
                  </li>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     Dịch vụ sửa chữa
                  </li>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     Bảo dưỡng định kì
                  </li>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     Chế độ bảo hành
                  </li>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     Kia Connect
                  </li>
               </ul>
            </div>
            <div className="col-3">
               <p className="news_text footer">VỀ KIA</p>
               <ul className="list_product" style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     Kia Toàn Cầu
                  </li>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     Kia Việt Nam
                  </li>
               </ul>
            </div>
            <div className="col-3">
               <p className="news_text footer">LIÊN HỆ</p>
               <ul className="list_product" style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     <FaPhone className="me-2" />
                     HOTLINE 1900 5455 91
                  </li>
                  <li className="news_text sub d-flex align-items-center mb-3">
                     <MdEmail className="me-2" />
                     cskh@thaco.com.vn
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default FooterComponent

// rgb(5,20,31)