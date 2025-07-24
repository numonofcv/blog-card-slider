/* eslint-disable react-hooks/exhaustive-deps */
// src/components/Slider.jsx
import React, { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
import "./Slider.css";

const cardsData = [
  {
    id: 1,
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/600/300?random=1"
  },
  {
    id: 2,
    date: "05 January 2020",
    title: "Dolor Sit Amet",
    text: "Doloribus obcaecati tempora sapiente. Vitae commodi quas.",
    image: "https://picsum.photos/600/300?random=2"
  },
  {
    id: 3,
    date: "20 February 2020",
    title: "Consectetur Adipisicing",
    text: "Facilis tempora asperiores praesentium animi distinctio pariatur.",
    image: "https://picsum.photos/600/300?random=4"
  }
];

// import qilishlar va Card komponenti

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  const handleScroll = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (e.deltaY > 0 && activeIndex < cardsData.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeIndex]);

  const dots = cardsData.map((_, idx) => (
    <span
      key={idx}
      className={`dot ${idx === activeIndex ? "active" : ""}`}
      onClick={() => setActiveIndex(idx)}
    ></span>
  ));

  return (
    <div className="slider-container">
      <div className="slider-card-wrapper">
        <Card {...cardsData[activeIndex]} dots={dots} />
      </div>

      {/* Faqat mobil uchun tugmalar */}
      <div className="mobile-buttons">
        <button
          className="mobile-arrow left"
          onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
          disabled={activeIndex === 0}
        >
          &#10094;
        </button>
        <button
          className="mobile-arrow right"
          onClick={() =>
            setActiveIndex((prev) => Math.min(prev + 1, cardsData.length - 1))
          }
          disabled={activeIndex === cardsData.length - 1}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
