import { Route, Routes } from "react-router-dom";
import Information from "../pages/information/Information";

const InformationRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Information />} />
      </Routes>
    </>
  );
};

export default InformationRoute;
