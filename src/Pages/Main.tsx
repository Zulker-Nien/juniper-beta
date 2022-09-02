import { useContext } from "react";
import "../Home.scss";
import Store from "../store";
import { observer } from "mobx-react-lite";
import SvgComponent from "../Components/LandingBg";
import StartPage from "../Components/StartPage";
import Login from "../Components/Login";
const Home = () => {
  const store = useContext(Store);
  const { loader } = store;
  return (
    <div className="container">
      <div className="homeContainer">
        <div className="homeBg">
          <SvgComponent />
        </div>
        {loader ? <Login /> : <StartPage />}
      </div>
    </div>
  );
};

export default observer(Home);
