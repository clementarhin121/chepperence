import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import Signup from "../users/signup";
import FoodMenu from "./FoodMenu";

function Home() {
  return (
    <>
      <Layout>
        <div className="homeContainer">
          <div className="main">
            <div className="placeorder">
              <h3>Open For Lunch, Dinner</h3>
              <a href="order.html">
                {" "}
                <button>PLACE &nbsp; ORDERS</button>
              </a>
            </div>
          </div>
          <FoodMenu />
          <Signup />
        </div>
      </Layout>
    </>
  );
}
export default Home;
