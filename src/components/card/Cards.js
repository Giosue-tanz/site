import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Cards.css';
import notes from '../../assets/notes.jpg';
import logo_tanz from '../../assets/logo_tanz.jpeg';
import now from '../../assets/now.jpg';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

const cardsData = [
  { src: notes, label: 'For Everyone' },
  { src: logo_tanz, label: 'For Teams' },
  { src: image1, label: 'Wherever' },
  { src: now, label: 'For Enterprises' },
  { src: image1, label: 'Innovation' },
  { src: image2, label: 'Technology' },
];

function Cards() {
  return (
    <div className="cards">
      <div className="title-container">
        <div className="background-title">WORKS</div>
        <div className="foreground-title">WORKS</div>
      </div>
      <div className="cards__container">
        <Swiper
          spaceBetween={20}
          slidesPerView={5} // Default for desktop
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
            1024: {
              slidesPerView: 3.1,
              spaceBetween: 10,
            },
            1284: {
              slidesPerView: 4.2,
              spaceBetween: 10,
            },
          }}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="cards__item">
                <figure className="cards__item__pic-wrap" data-category={card.label}>
                  <img className="cards__item__img" alt={card.label} src={card.src} />
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