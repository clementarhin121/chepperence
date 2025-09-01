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
              <button>PLACE &nbsp; ORDERS</button>
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
