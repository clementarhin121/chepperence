import Layout from "../components/layout";
import FoodMenu from "./FoodMenu";

function Home() {
  return (
    <>
      <Layout>
        <div className="homeContainer">
          <div className="main">
            <div className="placeorder">
              <h3>Open For Lunch, Dinner</h3>
              <button>PLACE &nbsp; ORDERS</button>
            </div>
          </div>
          <div
            className="foodHome"
            id="foodHome">
            <div className="main">
              <h3>CHEPPERENCE GOURMET</h3> <br />
              <p>
                With an emphasis on fresh, locally-sourced seasonal ingredients,
                Chepperence brings the African experience to Queens with a menu
                of modern African cuisine and sophisticated mezcal palm-wine
                based cocktails
              </p>
              <div className="foodpic">
                <img
                  src="https://www.foodandwine.com/thmb/mcRTzpKv8dpC-COBvCop1W6G93E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/waakye-FT-RECIPE0521-1-ef4e3a8b8e2f41efb479ecc75ffc0978.jpg"
                  alt=""
                />
              </div>
              <div className="ourFood">
                <div className="flower">
                  <img
                    src="https://images.saatchiart.com/saatchi/720649/art/8632779/7696445-ACZWZRBR-7.jpg"
                    alt=""
                  />
                </div>
                <h3>OUR FOOD</h3>
                <p>
                  Modern African cuisine, handcrafted beer & sophisticated
                  mezcal & palm wine
                </p>
                <button>VIEW MENUS</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Home;
