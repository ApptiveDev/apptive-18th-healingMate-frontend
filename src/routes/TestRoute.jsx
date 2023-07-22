import { Route, Routes } from 'react-router-dom';
import Test from '../pages/test/Test';

const TestRoute = () => {
  return (
    <>
			<Routes>
				<Route path='/' element={<Test />} />
			</Routes>
		</>
  );
};

export default TestRoute;