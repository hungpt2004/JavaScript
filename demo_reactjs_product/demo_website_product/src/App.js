import logo from './logo.svg';
import './App.css';
import NavBarComponent from './views/navbar/NavbarComponent';
import SlideCarComponent from './views/banner/SlideCarComponent';
import CarCategoryComponent from './views/banner/CarCategoryComponent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdvComponent from './views/banner/AdvertisementComponent';
import NewsComponent from './views/banner/NewsComponent';
import FooterComponent from './views/footer/FooterComponent';

function App() {
  return (
    <div>
      <NavBarComponent/>
      <SlideCarComponent/>
      <CarCategoryComponent/>
      <AdvComponent/>
      <NewsComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
