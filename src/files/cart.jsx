// Cart.jsx
import { useEffect, useState } from "react";
import "./Cart.css";
import Menu from "/Applications/React/newReact/chepperence/src/components/Menu.jsx";
const IMAGES = [
  "https://travelandmunchies.com/wp-content/uploads/2022/12/IMG_6662-scaled.jpg",
  "https://i0.wp.com/barefootinjandals.com/wp-content/uploads/2023/06/IMG_1999-scaled.jpeg?fit=735%2C724&ssl=1",
  "https://i0.wp.com/barefootinjandals.com/wp-content/uploads/2022/09/IMG_0286-scaled.jpeg?fit=735%2C512&ssl=1",
  "https://theafrikanstore.com/cdn/shop/articles/abelewalls_PCstockfood_80f6ca32-f63f-4476-912f-3474713d5496_460x@2x.jpg?v=1688625371",
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

  const [cart, setCart] = useState(null);
  useEffect(() => {
    fetch(`foods.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch JSON");
        return res.json();
      })
      .then((data) => setCart(data.menu))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

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
        <div className="main2">
          {cart ? (
            Object.entries(cart).map(([category, items]) => (
              <div key={category}>
                <h2>{category.replace("_", " ").toUpperCase()}</h2>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="cartItem">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>
                      {item.currency ? item.currency + " " : ""}
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>Loading menu...</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
