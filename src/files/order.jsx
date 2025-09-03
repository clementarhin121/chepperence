// Cart.jsx
import { useEffect, useState } from "react";
import "./Cart.css";
import Menu from "/Applications/React/newReact/chepperence/src/components/Menu.jsx";
const IMAGES = [
  "https://www.sophiaapenkro.com/wp-content/uploads/2023/07/Koko-with-Koose-1019x1024.jpg",
  "https://www.uvolunteer.net/wp-content/uploads/banku-with-tilapia-foods-to-try-when-you-volunteer-in-ghana.jpg",
  "https://media-gadventures.global.ssl.fastly.net/media-server/dynamic/blogs/posts/G-Adventures/2025/04/blog-ghana-food-plantain.webp",
  "https://foodieinlagos.com/wp-content/uploads/2021/09/Ghanaian-Food-6.jpeg",
];

function Order() {
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
    <div className="orderHome">
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
      <section className="main4">
        <div className="content">
          <div className="menWriting">
            <div className="menCont">
              <button>BRUNCH </button> <button>LUNCH</button>{" "}
              <button>STARTERS</button> <button>KOKO</button>{" "}
              <button>KORKOR</button> <button>ALEWA</button>
              <button>DRINKS</button> <button>NSA FUFUO</button>
            </div>
          </div>
          <h1>
            FIE NE FIE <br /> BRUNCH
          </h1>
          <h2>FOOD</h2>

          <h3>
            OMO TUO NE ABE NKWAN 15
            <p>
              Boiled Rice, Soup, Chicken, Okro <br /> Juice from the sea, crabs,
              liver
            </p>
          </h3>

          <h3>
            BANKU NE OKRO SOUP 20
            <p>Fermented corn and cassava dough, Okro soup, Fish, Goat meat</p>
          </h3>

          <h3>
            FUFU NE NKATEKKE 18
            <p>Pounded cassava & plantain, Peanut soup, Beef, Smoked fish</p>
          </h3>

          <h3>
            WAKEI 12
            <p>Rice balls, Groundnut soup, Chicken, Snails</p>
          </h3>

          <h3>
            JOLLOF RICE 15
            <p>Tomato rice, Grilled chicken, Shrimps, Salad</p>
          </h3>

          <h3>
            KOKO NE BEEF 10
            <p>Millet porridge, Stewed beef, Boiled eggs, Plantain</p>
          </h3>

          <h3>
            Tuo ZAFI NE AYoyo 14
            <p>Corn dough, Ayoyo soup, Fish, Spinach</p>
          </h3>

          <h3>
            CHICHEKOM 16
            <p>Fried rice balls, Light soup, Goat meat, Vegetables</p>
          </h3>
        </div>
      </section>
      <br />
      <hr
        style={{
          width: "90%",
          margin: "0 auto",
          borderColor: "red",
          borderWidth: "2px",
          marginTop: "10vh",
        }}
      />
    </div>
  );
}

export default Order;
