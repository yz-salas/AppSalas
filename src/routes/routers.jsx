import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../components/layout/Home';
import About from '../components/layout/About';
import Contact from '../components/layout/ContactMe';
import Project from '../components/layout/Project';

const Router = () => {
	return (
		<Routes>
			<Route path="/AppSalas/" element={<Home />} />
			<Route path="/AppSalas/aboutme/" element={<About />} />
			<Route path="/AppSalas/myproyects" element={<Project />} />
			<Route path="/AppSalas/contactme" element={<Contact />} />
			<Route path="/*" element={<Navigate to="/AppSalas/" />} />
		</Routes>
	);
};

export default Router;