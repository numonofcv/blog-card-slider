// src/components/Card/Card.jsx
import "./Card.css";

const Card = ({ date, title, text, image, dots }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="img" />
      </div>
      <div className="card-content">
        <p className="card-date">{date}</p>
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
        <button className="card-button">Read More</button>
      </div>
      <div className="slider-dots-inside">{dots}</div>
    </div>
  );
};

export default Card;
