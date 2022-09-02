import { Routes, Route } from "react-router-dom";
import Color from "./Pages/Color";
import Customize from "./Pages/Customize";
import Cut from "./Pages/Cut";
import Garment from "./Pages/Garment";
import Main from './Pages/Main';
import Package from "./Pages/Package";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/package" element={<Package/>} />
      <Route path="/select-cut" element={<Cut/>} />
      <Route path="/select-color" element={<Color/>} />
      <Route path="/select-garment" element={<Garment/>} />
      <Route path="/customize" element={<Customize/>} />
    </Routes>
  );
}

export default App;
