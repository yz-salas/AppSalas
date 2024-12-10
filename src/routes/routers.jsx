import { Route, Routes } from 'react-router-dom';
import Home from '../components/layout/Home';
import About from '../components/layout/About';
import Contact from '../components/layout/ContactMe';
import Proyect from '../components/layout/Proyect';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/aboutme/" element={<About />} />
			<Route path="/myproyects" element={<Proyect />} />
			<Route path="/contactme" element={<Contact />} />
		</Routes>
	);
};

export default Router;
