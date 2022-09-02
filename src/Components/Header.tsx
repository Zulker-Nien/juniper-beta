import "./Comp.scss";
import logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Store from "../store";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Tween } from "react-gsap";
const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const store = useContext(Store);
  const { setDrawer, drawer, closeDrawer } = store;
  return (
    <>
      <div className="headerContainer">
        <Link to="/">
          <img src={logo} alt="logo" className="logoHeader" />
        </Link>
        {drawer ? (
          <Tween to={{ y: "8px" }} duration={1} ease="back.out(2.7)">
            <div className="sideBarContainer">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
              <div
                className="sideBarCloseButton"
                onClick={() => {
                  closeDrawer();
                }}
              ></div>
            </div>
          </Tween>
        ) : (
          <div
            className="navMenuContainer"
            onClick={() => {
              setDrawer();
            }}
          >
            <Tween
              from={{ y: "-20px" }}
              to={{ y: "0px" }}
              duration={1}
              ease="back.out(2.7)"
            >
              <div className="hBurger"></div>
              <div className="hBurger"></div>
              <div className="hBurger"></div>
            </Tween>
          </div>
        )}
      </div>
    </>
  );
};

export default observer(Header);
