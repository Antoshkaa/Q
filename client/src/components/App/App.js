import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import HomePage from "../HomePage/HomePage";
import Login from "../Login/Login";
import Navb from "../Navb/Navb";
import Registration from "../Registration/Registration";

function App() {
  return (
    <div>
      <Navb />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
