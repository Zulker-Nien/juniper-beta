import { useContext } from "react";
import "../Home.scss";
import logo from "../Assets/Logo.png";
import { observer } from "mobx-react-lite";
import Store from "../store";

const StartPage = () => {
  const store = useContext(Store);
  const { setLoader } = store;
  return (
    <div className="homeCenter">
      <img src={logo} alt="logo" />
      <h1>DESIGN YOUR OWN JERSEY</h1>
      <p>The most powerful interactive teamwear designer.</p>
      <button onClick={setLoader}>
        {/* <h3>DESIGN YOUR OWN JERSEY</h3> */}
        <h3>START</h3>
      </button>
    </div>
  );
};

export default observer(StartPage);
