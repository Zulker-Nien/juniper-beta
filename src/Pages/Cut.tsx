import Header from "../Components/Header";
import "../Home.scss";
import men from "../Assets/men.png";
import women from "../Assets/women.png";
import junior from "../Assets/junior.png";
import { useState } from "react";
import { Tween } from "react-gsap";
import { Link } from "react-router-dom";
const Cut = () => {
  const [select, setSelect] = useState<any>();
  const [clicked, setClicked] = useState<any>();
  const CutType = [
    { img: men, label: "Men" },
    { img: junior, label: "Junior" },
    { img: women, label: "Women" },
  ];
  return (
    <div className="cutContainer">
      <Header />
      <Tween
        from={{ scale: 0.1 }}
        stagger={{ from: "center", amount: 1, grid: [1, 3] }}
        duration={1}
        ease="elastic.out(0.5, 1.5)"
      >
        <div className="cutWrapper">
          <h1>Select your cut</h1>
          <div className="cutCardContainer">
            {CutType.map((item, index) => {
              return (
                <div
                  className={
                    select === index ? "cutCardItemSelected" : "cutCardItem"
                  }
                  onClick={() => {
                    setSelect(index);
                    setClicked(true);
                  }}
                >
                  <img src={item.img} className="CutImage" alt="Men" />
                  <h3>{item.label}</h3>
                </div>
              );
            })}
          </div>
          <Link to={clicked ? "/select-color" : "/select-cut"}>
            <button disabled={clicked ? false : true} className="CutButton">
              {clicked ? <p>Continue</p> : <p>Please select a cut</p>}
            </button>
          </Link>
        </div>
      </Tween>
    </div>
  );
};

export default Cut;
