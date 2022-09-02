import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../Home.scss";
import Store from "../store";
import { observer } from "mobx-react-lite";
import ModelLoad from "../Components/ModelLoad";
import { Canvas } from "@react-three/fiber";
// import { Tween } from "react-gsap";

const Garment = () => {
  const store = useContext(Store);
  const [clicked, setClicked] = useState<string>("");
  const [next, setNext] = useState<boolean>(false);
  const { color } = store;

  const GarmentType = [
    {
      label: "Track Pant",
    },
    {
      model: <ModelLoad />,
      label: "Zipped Polo Neck-Tshirt",
    },
    { label: "Polo Neck T-Shirt" },
    { label: "Polo Neck Breatheable" },
  ];

  const [select, setSelect] = useState<any>();
  return (
    <div className="garmentContainer">
      <Header />
      <div className="garmentWrapper">
        <div>
          <h1>Select Your Garment</h1>
        </div>

        <div className="garmentCardContainer">
          {GarmentType.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  select === index
                    ? "GarmentCardItemSelected"
                    : "GarmentCardItem"
                }
                onClick={() => {
                  setSelect(index);
                  setClicked(item.label);
                  setNext(true);
                }}
              >
                <Canvas
                  camera={{ fov: 75, position: [0, 50, -50] }}
                  style={{ color: `${color}` }}
                >
                  <ambientLight position={[0, 10, -70]} intensity={0.1} />
                  <spotLight position={[0, 10, -70]} intensity={1} />
                  {item.model}
                </Canvas>
                <h3>{item.label}</h3>
              </div>
            );
          })}
        </div>

        <Link
          to={
            clicked === "Zipped Polo Neck-Tshirt"
              ? "/customize"
              : "/select-garment"
          }
        >
          <button className="GarmentButton">
            {next ? <p>Continue</p> : <p>Please select a garment</p>}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default observer(Garment);
