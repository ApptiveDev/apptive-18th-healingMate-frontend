import { Route, Routes } from 'react-router-dom';
import Community from '../pages/community/Community';

const CommunityRoute = () => {
  return (
    <>
			<Routes>
				<Route path='/' element={<Community />} />
			</Routes>
		</>
  );
};

export default CommunityRoute;