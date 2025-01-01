import { useState } from 'react';
import './App.css';
import Router from './routes/routers';
import { NavbarAnimation, AppMotion, DragConstraints } from './MotionAnimation/AppMotion';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';

function App() {
	/* controladores del navbar */
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Función para cerrar el menú al hacer clic en un enlace
	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<>
			<AppMotion />
			<main className="container flex-1 flex flex-col px-6 bg-zinc-950 lg:px-0">
				<NavbarAnimation>
					<Navbar />
				</NavbarAnimation>
				<Router />
			</main>
			<Footer />
		</>
	);
}

export default App;
