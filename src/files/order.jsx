import { useEffect } from "react";
import Layout from "../components/layout";

function Order() {
  useEffect(() => {
    let counter = 1;
    const totalSlides = 4;

    const interval = setInterval(() => {
      const radio = document.getElementById("slide" + counter);
      if (radio) radio.checked = true;

      counter++;
      if (counter > totalSlides) counter = 1;
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const slides = [
    "https://www.palacetravel.com/wp-content/uploads/2023/01/kenkey-and-Fish.jpg",
    "https://mealsbymavis.com/wp-content/uploads/2021/12/yam-eto_1_Pin.jpg",
    "https://www.foodrepublic.com/img/gallery/13-iconic-ghanaian-dishes-you-need-to-try-at-least-once/l-intro-1742413040.jpg",
    "https://images.squarespace-cdn.com/content/v1/65cfd1369377d32bcd0051fa/9f1d1568-dcc7-4cd8-9379-ec9efd3dc7c4/Banku+and+Okro+Soup-+Sheeda+Travel+Tribe.jpg",
  ];

  return (
    <Layout>
      <div className="orderHome">
        <div className="main3">
          <div className="carousel">
            {/* Radio buttons */}
            {slides.map((_, i) => (
              <input
                key={i}
                type="radio"
                name="slides"
                id={`slide${i + 1}`}
                defaultChecked={i === 0}
              />
            ))}
            {/* Slides */}
            <div className="slides">
              {slides.map((src, i) => (
                <div
                  key={i}
                  className="slide"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}></div>
              ))}
            </div>
            Hello
            {/* Navigation dots */}
            <div className="nav">
              {slides.map((_, i) => (
                <label
                  key={i}
                  htmlFor={`slide${i + 1}`}></label>
              ))}
            </div>
          </div>
        </div>
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
                Boiled Rice, Soup, Chicken, Okro <br /> Juice from the sea,
                crabs, liver
              </p>
            </h3>

            <h3>
              BANKU NE OKRO SOUP 20
              <p>
                Fermented corn and cassava dough, Okro soup, Fish, Goat meat
              </p>
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
          }}
        />
      </div>
    </Layout>
  );
}

export default Order;
