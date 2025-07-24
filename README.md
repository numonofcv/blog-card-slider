# Responsive Blog Card Slider

This project is a responsive and animated blog card slider built with **React.js** and **plain CSS**. It is optimized for both desktop and mobile views with scroll, dots, and mobile-only navigation buttons.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🖼 Preview

![Preview Screenshot](./screenshot.png) <!-- (optional if you add an image) -->

## ✨ Features

- Responsive design (mobile, tablet, desktop)
- Scroll-based slide change (desktop)
- Dot navigation (all devices)
- Mobile-only next/prev arrows
- CSS animations and transitions

## 📁 Project Structure

src/
├── components/
│ ├── Card/
│ │ ├── Card.jsx
│ │ └── Card.css
│ └── Slider/
│ ├── Slider.jsx
│ └── Slider.css
├── App.js
└── index.js


## 🔧 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page reloads when you make changes.


## 📲 Responsive Behavior

| Screen Size   | Behavior                                                   |
|---------------|------------------------------------------------------------|
| Desktop       | Horizontal layout with image and text side-by-side         |
| Mobile        | Stacked layout, arrows for slide, horizontal dots          |
| Tablet        | Behaves like mobile                                        |

## 🚀 Getting Started

To clone and run the project locally:

```bash
git clone https://github.com/yourusername/responsive-blog-slider.git
cd responsive-blog-slider
npm install
npm start
