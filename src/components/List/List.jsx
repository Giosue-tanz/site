import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './List.css';
import sl from '../../assets/note_smart_light.jpg';
import logo_tanz from '../../assets/logo_tanz.jpeg';
import sml2 from '../../assets/sml2.jpeg';
import smartlightLogo2 from '../../assets/smartlight-logo2.jpg';

const notesData = [
  { title: 'Smart Light — A Chapter Closes', description: 'A fundamental milestone. The team pauses. The work stays open for whoever wants to carry it forward.', date: '09/09/2026', image: smartlightLogo2, route: '/note-smartlight3', darkBg: true },
  { title: 'Update from Smart Light', description: 'Latest innovations in optimizing intelligent traffic lights.', date: '16/03/2026', image: sml2, route: '/note-smartlight2' },
  { title: 'SmartLight Victory', description: 'Sustainable mobility contest and acknowledgments.', date: '09/09/2025', image: sl, route: '/note-smartlight1' },
  { title: 'Why Tanz?', description: "Tanz, a reflection on the ethical implications of its model.", date: '28/02/2024', image: logo_tanz, route: '/note-tanz' },
];

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('/');
  return new Date(year, month - 1, day);
};

const sortedNotes = [...notesData].sort((a, b) => parseDate(b.date) - parseDate(a.date));


const List = () => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const handleCardClick = (route) => {
    if (route) navigate(route);
  };
  return (
    <div className="cards">
      <div className="title-container">
        <div className="background-title">NOTES</div>
        <div className="foreground-title">NOTES</div>
      </div>
      <div className="cards__container">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={5}
          loop={false}
          modules={[Navigation]}
          navigation={false}
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
          {sortedNotes.map((note, index) => (
            <SwiperSlide key={index}>
              <div className="cards__item" style={{ cursor: 'pointer' }} onClick={() => handleCardClick(note.route)}>
                <figure className="cards__item__pic-wrap">
                  {/* simplified image loading: use src + browser lazy fallback */}
                  <img
                    className="cards__item__img"
                    alt={note.title}
                    src={note.image}
                    loading="lazy"
                    decoding="async"
                    style={note.darkBg ? { backgroundColor: '#000', objectFit: 'contain', padding: '30px', boxSizing: 'border-box' } : {}}
                  />
                  <div className="card-overlay">
                    <h1 className="card-title">{note.title}</h1>
                    <p className="card-description">{note.description}</p>
                    <div className="card-footer">
                      <button className="read-more">Read More</button>
                      <div className="date-badge">{note.date}</div>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div ref={prevRef} className="swiper-button-prev"></div>
        <div ref={nextRef} className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default List;