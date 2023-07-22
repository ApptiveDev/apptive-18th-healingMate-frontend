import { Route, Routes } from "react-router-dom";
import Community from "../pages/community/Community";
import BoardMainOne from "../pages/community/board/1";
import BoardWrite from "../pages/community/board/BoardWrite";

const CommunityRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Community />} />
        <Route path="/1" element={<BoardMainOne />} />
        <Route path="/2" element={<BoardWrite />} />
      </Routes>
    </>
  );
};

export default CommunityRoute;
