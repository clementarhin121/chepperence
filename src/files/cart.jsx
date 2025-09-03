// Cart.jsx
import { useEffect, useState } from "react";
import "./Cart.css";
import Menu from "/Applications/React/newReact/chepperence/src/components/Menu.jsx";

const IMAGES = [
  "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
];

function Cart() {
  const [current, setCurrent] = useState(0);
  const total = IMAGES.length;

  // Auto-advance every 10s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % total);
    }, 10000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <>
      <section className="carousel">
        {/* Radios synced with current */}
        <div className="radio-controls">
          {IMAGES.map((_, i) => (
            <input
              key={i}
              type="radio"
              name="slider"
              checked={current === i}
              onChange={() => setCurrent(i)}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="slides">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="slide"
              style={{
                backgroundImage: `url(${img})`,
                opacity: current === i ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          ))}
        </div>

        {/* Overlay text */}
        <div className="overlay">
          <Menu />
          <div className="shophere">
            <div className="main">
              <h3>MENU</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="cartMain">
        <div className="main2"></div>
      </section>
    </>
  );
}

export default Cart;
