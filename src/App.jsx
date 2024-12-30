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

	/* controladores del navbar */
	const links = [
		{ url: '/AppSalas/', name: 'HOME' },
		{ url: '/AppSalas/aboutme', name: 'ABOUT ME' },
		{ url: '/AppSalas/myproyects', name: 'PORTAFOLIO' },
		{ url: '/AppSalas/contactme', name: 'CONTACT' },
	];

	return (
		<>
			<AppMotion />
			<main className="container flex-1 flex flex-col px-6 bg-zinc-950 lg:px-0">
				<div>
					<NavbarAnimation>
						<Navbar />
					</NavbarAnimation>
					<Router />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
