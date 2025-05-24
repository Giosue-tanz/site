import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './List.css';
import notes from '../../assets/notes.jpg';
import logo_tanz from '../../assets/logo_tanz.jpeg';
import now from '../../assets/now.jpg';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

const notesData = [
  { title: 'Innovation Tech', description: 'Rebum lorem no eos ut ipsum diam tempor ', date: '01/12/2024', image: notes },
  { title: 'Modern Solutions', description: 'Diam tempor lorem ipsum ut elitr tempor sed eos', date: '02/12/2024', image: logo_tanz },
  { title: 'Creative Ideas', description: 'Elitr ipsum diam lorem ipsum dolor sit amet sed', date: '03/12/2024', image: now },
  { title: 'Advanced Tech', description: 'Sed rebum lorem diam no eos ut ipsum elitr tempor', date: '04/12/2024', image: image1 },
  { title: 'Future Trends', description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr', date: '05/12/2024', image: image2 },
  { title: 'Sustainability', description: 'Eos ut diam tempor lorem ipsum elitr sed diam', date: '06/12/2024', image: notes },
];

const List = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="list-container">
      <div className="title-container">
        <div className="background-title">NOTES</div>
        <div className="foreground-title">NOTES</div>
      </div>
      <div className="card-container">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          modules={[Navigation]}
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
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1284: {
              slidesPerView: 4,
              spaceBetween: 10,
            }
          }}
        >
          {notesData.map((note, index) => (
            <SwiperSlide key={index}>
              <div className="card" style={{ backgroundImage: `url(${note.image})` }}>
                <div className="card-content">
                  <h1>{note.title}</h1>
                  <p>{note.description}</p>
                  <div className="card-footer">
                    <button className="read-more">Read More</button>
                    <div className="date-badge">{note.date}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={prevRef} className="custom-prev swiper-button-prev-notes">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div ref={nextRef} className="custom-next swiper-button-next-notes">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default List;
