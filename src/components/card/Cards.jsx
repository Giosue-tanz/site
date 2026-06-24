import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Cards.css';

import logo_tanz from '../../assets/logo_tanz.jpeg';
import now from '../../assets/now.jpg';
import image2 from '../../assets/image2.jpg';
import smartlight_logo2 from '../../assets/smartlight-logo2.jpg';

const cardsData = [
  // { src: ..., label: '7wic', route: '/wic' }, // add other cards here
  { src: smartlight_logo2, label: 'Smart Light', externalLink: 'https://www.smart-light.it' },
];

function Cards() {
  const navigate = useNavigate();
  const handleCardClick = (card) => {
    if (card.externalLink) {
      window.open(card.externalLink, '_blank');
    } else if (card.route) {
      navigate(card.route);
    }
  };
  return (
    <div className="cards">
      <div className="title-container">
        <div className="background-title">WORKS</div>
        <div className="foreground-title">WORKS</div>
      </div>
      <div className="cards__container">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.1,
              spaceBetween: 10,
            },
            820: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1120: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1284: {
              slidesPerView: 4.8,
              spaceBetween: 10,
            },
          }}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="cards__item" style={{ cursor: 'pointer' }} onClick={() => handleCardClick(card)}>
                <figure className="cards__item__pic-wrap" data-category={card.label}>
                  <img 
                    className="cards__item__img" 
                    alt={card.label} 
                    src={card.src} 
                    loading="lazy" 
                    decoding="async" 
                    style={card.label === 'Smart Light' ? { backgroundColor: 'black', objectFit: 'contain', padding: '50px', boxSizing: 'border-box' } : {}}
                  />
                </figure>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Cards;