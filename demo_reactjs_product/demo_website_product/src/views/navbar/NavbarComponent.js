import React from 'react';
import '../../css/NavbarLayout.css';

function NavBarComponent(){
   return (
      <div className='navbar_contain'>
         <ul className='navbar_main'>
            <li>Về KIA</li>
            <li>Sản Phẩm</li>
            <li>Lễ hội hóa trang mới</li>
            <li>Để kết nối</li>
            <img className='navbar_logo' src='https://kiavietnam.com.vn/storage/logo-icon/logo-kia-new.png' style={{width:'60px',height:'20px'}}/>
            <li>Giá xe</li>
            <li>Tin tức và ưu đãi</li>
            <li>Dịch vụ</li>
            <li>Đại lý</li>
            <li>Liên hệ</li>
         </ul>
      </div>
   );
}

export default NavBarComponent;