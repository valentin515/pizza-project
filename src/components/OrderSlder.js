import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Autoplay} from "swiper"
import cartStore from "../store/cart"
import {allSlides} from "../data/allSlides"
import 'swiper/css';
import 'swiper/css/pagination';


SwiperCore.use([Pagination, Autoplay]);

const OrderSlider = () => {
     

    const [slides, setSlides] = useState([])

    useEffect(() => {

        const cartItemsId = new Set();

        for(let item of cartStore.cart.items){
            cartItemsId.add(item.id);
        }

        const updatedSlides = allSlides.filter(slide => !cartItemsId.has(slide.id));

        setSlides(updatedSlides);

    }, [])

    
    function addProduct(product){

        cartStore.addProduct(product);
        const updatedSlides = slides.filter(slide => slide.id !== product.id);
        setSlides(updatedSlides);
    }
    


  return (
        <>
        
        {slides.length !== 0 &&
            <section>
                <div className="container">
                    <div className="recommended-products">
                        <h2 className="fw-bold fs-2">Рекомендуем к заказу</h2>
                        
                        <div className="order-slider-content">
                            <Swiper
                                speed={600}
                                slidesPerView={1}
                                spaceBetween={0}
                                pagination={{
                                    clickable: true,
                                    el: '.order-slider-pagination'
                                }}
                                breakpoints={{
                                    690: {
                                        slidesPerView: 2
                                    },
                                    991: {
                                        slidesPerView: 3
                                    },
                                    1229: {
                                        slidesPerView: 4
                                    },
                                }} 
                                autoplay={{delay: 7000, disableOnInteraction: false}}
                                className="order-slider"
                            >
                                {slides.map(slide => 
                                    <SwiperSlide className="order-slide" key={slide.id}>
                                        <div className="order-slide-content">
                                            <div className="order-slide-img img-block">
                                                <img src={slide.img} alt={slide.name}/>
                                            </div>
                                            <div className="order-slide-info">
                                                <div className="order-slide-text">
                                                    <h3 className="order-slide-title">{slide.name}</h3>
                                                    <span className="t-gray order-slide-size">{slide.size}</span>
                                                </div>
                                                <span className="fs-4">{slide.price} ₽</span>
                                                <button className="btn-main tr-2" onClick={() => addProduct(slide)}>Добавить</button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )}         
                            </Swiper>
                            <div className="swiper-pagination order-slider-pagination"></div>
                        </div>
                    </div>  
                </div>
            </section>
        }
        
            </>                         
  );
}

export default OrderSlider;





