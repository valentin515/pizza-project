import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const HomeSlider = () => {
     

    const slides = [
        {id: 1, src: "img/slide1.png", alt: "промокод GIFT"},
        {id: 2, src: "img/slide2.png", alt: "промокод WINTER"},
        {id: 3, src: "img/slide3.png", alt: "промокод SPRING"}
    ]


  return (
    
     <section className="slider-section">
        <div className="container">
            <Swiper 
                spaceBetween={20}
                speed={700}
                loop={true}
                autoplay={{delay: 5000, disableOnInteraction: false}}
                navigation={{
                             nextEl: '.fp-slider-next',
                             prevEl: '.fp-slider-prev'
                }}
                pagination={{
                            clickable: true,
                            el: '.fp-slider-pagination'
                }} 
                className="fp-slider"
              >

                {slides.map(slide => 
                    <SwiperSlide key={slide.id} className="fp-slide">
                        <Link to={`/promotions/${slide.id}`}>
                            <img src={slide.src} alt={slide.alt}/>
                        </Link>
                    </SwiperSlide>
                )}
                <button className="swiper-button-prev fp-slider-prev tr-2"></button>
                <button className="swiper-button-next fp-slider-next tr-2"></button>
            </Swiper>
            <div className="swiper-pagination fp-slider-pagination"></div>
        </div>
    </section>
      
  );
}

export default HomeSlider;





