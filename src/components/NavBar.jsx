import { Link } from "react-router-dom";
import logo from "../assets/GirlCode-logo.png";

const NavBar = () => {
  return (
    <div className="<nav-bar py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="GirlCode logo" />
        </Link>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="">Categories</a>
              <span className="material-symbols-outlined">expand_more</span>
            </li>
            <li>
              <a href="">Deals</a>
            </li>
            <li>
              <a href="">What's New</a>
            </li>
            <li>
              <a href="">Delivery</a>
            </li>
          </ul>
        </nav>
        <div className="nav-Search-Acc-cart">
          <div className="nav-search">
            <input type="text" placeholder="Search" />
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="nav-account">
            <span className="material-symbols-outlined">person </span>
            <a href="">Account</a>
          </div>
          <div className="nav-cart">
            <span className="material-symbols-outlined">
              shopping_cart_checkout
            </span>
            <a href="">Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
