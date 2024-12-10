import { useState } from 'react';
import './App.css';
import Router from './routes/routers';
import Primarybuttom from './components/ui/Primarybuttom';
import { NavbarAnimation, LeftToRightAnimation } from './components/MotionAnimation/AppMotion';

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
		{ url: '/', name: 'HOME' },
		{ url: '/aboutme', name: 'ABOUT ME' },
		{ url: '/myproyects', name: 'PORTAFOLIO' },
		{ url: '/contactme', name: 'CONTACT' },
	];

	return (
		<>
			<div className="flex h-screen text-black relative">
				{/* Botón para pantallas pequeñas */}
				<button className="fixed top-5 left-5 z-50 text-white p-3 rounded-md lg:hidden" onClick={toggleMenu}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>

				<NavbarAnimation>
					{/* Sidebar */}
					<aside
						className={`fixed top-0 left-0 h-screen w-64 bg-black shadow-lg flex flex-col items-start p-8 transform transition-transform duration-300 ${
							isOpen ? 'translate-x-0' : '-translate-x-full'
						} lg:translate-x-0 lg:flex`}
					>
						{/* Menú centrado verticalmente */}
						<div className="flex-grow flex flex-col justify-center w-full items-center space-y-6">
							{/* Logo */}
							<div className="text-3xl font-light mb-8 w-[55%] text-white">
								<span className="text-red-700">ZADIEL</span>
							</div>
							<nav className="flex flex-col gap-2 ">
								{links.map((link, index) => (
									<LeftToRightAnimation key={link.url} delay={index * 0.2}>
										<Primarybuttom url={link.url} name={link.name} onClick={handleLinkClick} />
									</LeftToRightAnimation>
								))}
							</nav>
							{/* Footer */}
							<footer className="mt-auto text-sm py-10 pl-7 text-gray-500">
								<p>© 2022 Tokyo</p>
								<p>Created by Marketify</p>
							</footer>
						</div>
					</aside>
				</NavbarAnimation>

				{/* Main Content */}
				<main className="container flex-1 flex flex-col px-6 lg:ml-[255px]">
					<div>
						<Router />
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
