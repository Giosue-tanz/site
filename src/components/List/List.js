import React from 'react';
import './List.css';
import image from '../../assets/goals1.jpg';

const List = () => {
  return (
    <div className="list-container">
      <div className="title-container">
        <div className="background-title">NOTES</div>
        <div className="foreground-title">LATEST NOTES</div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <img src={image} alt="Example" />
          </div>
          <div className="card-content">
            <h1>Innovation Technology</h1>
            <p>Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</p>
            <button className="read-more">Read More</button>
            <div className="date-badge">01/12/2024</div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={image} alt="Example" />
          </div>
          <div className="card-content">
            <h1>Innovation Technology</h1>
            <p>Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</p>
            <button className="read-more">Read More</button>
            <div className="date-badge">01/01/2024</div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={image} alt="Example" />
          </div>
          <div className="card-content">
            <h1>Innovation Technology</h1>
            <p>Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</p>
            <button className="read-more">Read More</button>
            <div className="date-badge">01/01/2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
