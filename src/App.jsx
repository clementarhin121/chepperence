import Layout from "./components/layout";
import FoodMenu from "./files/FoodMenu";
import Home from "./files/home";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <FoodMenu />
      </Layout>
    </>
  );
}

export default App;
