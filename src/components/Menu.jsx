import { useNavigate } from "react-router-dom";
function Menu() {
  return (
    <>
      <div className="menuContainer">
        <div className="logo">
          <h2>Chef</h2>
        </div>
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="burger">
          <a href="#foodHome">
            <div className="lanes">
              <div className="lane1"></div>
              <div className="lane2"></div>
              <div className="lane3"></div>
            </div>
          </a>{" "}
        </div>
      </div>
    </>
  );
}
export default Menu;
