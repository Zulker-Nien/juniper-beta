import { useContext, useState } from "react";
import { Tween } from "react-gsap";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../Home.scss";
import Store from "../store";
import { observer } from "mobx-react-lite";
const Color = () => {
  const [selected, setSelected] = useState<any>();
  const [clicked, setClicked] = useState<any>();
  const store = useContext(Store);
  const { setColor, closeDrawer } = store;

  const Color = [
    "#B8B4AB",
    "#082242",
    "#740232",
    "#FEEA01",
    "#009748",
    "#B0D9F4",
    "#FFFFFF",
    "#0E090C",
  ];
  return (
    <div className="colorContainer">
      <Header />
      <div
        className="colorWrapper"
        onClick={() => {
          closeDrawer();
        }}
      >
        <div>
          <h1>Select Your Primary Color</h1>
        </div>
        <div className="circleContainer">
          <Tween
            from={{ y: "-200px" }}
            to={{ y: "0px" }}
            stagger={0.03}
            ease="elastic.out(0.2, 0.1)"
          >
            {Color.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    selected === index ? "cutCircleSelected" : "circle"
                  }
                  style={{ backgroundColor: `${item}` }}
                  onClick={() => {
                    setSelected(index);
                    setColor(item);
                    setClicked(true);
                  }}
                />
              );
            })}
          </Tween>
        </div>
        <div className="buttonContainer">
          <Link to={clicked ? "/select-garment" : "/select-color"}>
            <button disabled={clicked ? false : true} className="ColorButton">
              {clicked ? <p>Continue</p> : <p>Please select a color</p>}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default observer(Color);
