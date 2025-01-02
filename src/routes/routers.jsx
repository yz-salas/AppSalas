import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../components/layout/Home';
import About from '../components/layout/About';
import Contact from '../components/layout/ContactMe';
import Project from '../components/layout/Project';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/aboutme" element={<About />} />
			<Route path="/myproyects" element={<Project />} />
			<Route path="/contactme" element={<Contact />} />
			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default Router;
