import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import TestRoute from "./routes/TestRoute";
import NavBar from "./components/NavBar";
import Join from "./pages/user/Join";
import Join2 from "./pages/user/Join2";
import CrohnicInfo from "./pages/Disease1/information"
import CrohnicBoard from "./pages/Disease1/community";
import CrohnicMain from "./pages/Disease1/index";
import CrohnInfo from "./pages/Disease2/information";
import RetinitisInfo from "./pages/Disease3/information";
import CholinInfo from "./pages/Disease4/information";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/main/*" element={<MainRoute />} />
        <Route path="/test/*" element={<TestRoute />} />
        <Route path="/*" element={<MainRoute />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join2" element={<Join2 />} />
        //만성콩팥병
        <Route path="/crohnicInfo" element={<CrohnicInfo />} />
        <Route path="/crohnicBoard" element={<CrohnicBoard />}/>
        <Route path="/crohnicMain" element={<CrohnicMain />}/>

        //크론병
        <Route path="/crohnInfo" element={<CrohnInfo/>} />

        //망막색소변성증
        <Route path="/retinitisInfo" element={<RetinitisInfo/>} />

        //콜린병
        <Route path="/cholinInfo" element={<CholinInfo/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
