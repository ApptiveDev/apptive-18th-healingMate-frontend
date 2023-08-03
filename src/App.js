import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import CommunityRoute from "./routes/CommunityRoute";
import InformationRoute from "./routes/InformationRoute";
import TestRoute from "./routes/TestRoute";
import NavBar from "./components/NavBar";
import Join from "./pages/user/Join";
import Join2 from "./pages/user/Join2";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/main/*" element={<MainRoute />} />
        <Route path="/community/*" element={<CommunityRoute />} />
        <Route path="/information/*" element={<InformationRoute />} />
        <Route path="/test/*" element={<TestRoute />} />
        <Route path="/*" element={<MainRoute />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join2" element={<Join2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
