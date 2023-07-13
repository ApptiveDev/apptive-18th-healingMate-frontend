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
import CrohnMain from "./pages/Disease2/index";

import RetinitisInfo from "./pages/Disease3/information";
import RetinitisMain from "./pages/Disease3/index";

import CholinInfo from "./pages/Disease4/information";
import CholinMain from "./pages/Disease4/index";

import StressTest1 from "./pages/test/stressTest/firstPage";
import StressTest2 from "./pages/test/stressTest/secondPage";
import StressResult from "./pages/test/stressTest/stress_result";
import StressResult2 from "./pages/test/stressTest/stress_result_2";
import StressResult3 from "./pages/test/stressTest/stress_result_3";

import BurnoutTest1 from "./pages/test/burnoutTest/firstPage";
import BurnoutTest2 from "./pages/test/burnoutTest/secondPage";
import BurnoutTest3 from "./pages/test/burnoutTest/thirdPage";
import BurnoutResult from "./pages/test/burnoutTest/burnout_result";
import BurnoutResult2 from "./pages/test/burnoutTest/burnout_result_2";

import DepressionTest1 from "./pages/test/depressionTest/firstPage";
import DepressionTest2 from "./pages/test/depressionTest/secondPage";
import DepressionResult from "./pages/test/depressionTest/depression_result";
import DepressionResult2 from "./pages/test/depressionTest/depression_result_2";
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
        <Route path="/crohnMain" element={<CrohnMain />}/>

        //망막색소변성증
        <Route path="/retinitisInfo" element={<RetinitisInfo/>} />
        <Route path="/retinitisMain" element={<RetinitisMain />}/>

        //콜린병
        <Route path="/cholinInfo" element={<CholinInfo/>} />
        <Route path="/cholinMain" element={<CholinMain/>} />

        //검사

        //스트레스
        <Route path="/stress" element={<StressTest1/>}/>
        <Route path="/stress/2" element={<StressTest2/>}/>
        <Route path="/stress/result" element={<StressResult/>}/>
        <Route path="/stress/result2" element={<StressResult2/>}/>
        <Route path="/stress/result3" element={<StressResult3/>}/>

        //번아웃

        <Route path="/burnout" element={<BurnoutTest1/>}/>
        <Route path="/burnout/2" element={<BurnoutTest2/>}/>
        <Route path="/burnout/3" element={<BurnoutTest3/>}/>
        <Route path="/burnout/result" element={<BurnoutResult/>}/>
        <Route path="/burnout/result/2" element={<BurnoutResult2/>}/>

        //우울증
        <Route path="/depression" element={<DepressionTest1/>}/>
        <Route path="/depression/2" element={<DepressionTest2/>}/>
        <Route path="/depression/result" element={<DepressionResult/>}/>
        <Route path="/depression/result/2" element={<DepressionResult2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
