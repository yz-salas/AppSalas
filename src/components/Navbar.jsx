import React, { useState } from 'react';
import Primarybuttom from './ui/Primarybuttom';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Función para cerrar el menú al hacer clic en un enlace
	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<div className="relative">
			{/* Botón de menú: visible solo en pantallas pequeñas */}
			<button className="fixed top-5 left-5 z-50 text-white bg-zinc-950 p-3 rounded-md lg:hidden" onClick={toggleMenu}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full bg-zinc-950 text-white shadow-lg transition-transform transform lg:w-64 w-3/4 ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} lg:translate-x-0`}
			>
				{/* Botón para cerrar: visible solo en pantallas pequeñas */}
				<button className="absolute top-5 right-5 text-white p-2 lg:hidden" onClick={toggleMenu}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>

				{/* Contenido del sidebar */}
				<nav className="flex flex-col items-center justify-start h-full space-y-8 pt-20">
					<Primarybuttom url="/" name="HOME" onClick={handleLinkClick} />
					<Primarybuttom url="/aboutme" name="ABOUT ME" onClick={handleLinkClick} />
					<Primarybuttom url="/myproyects" name="PROYECTS" onClick={handleLinkClick} />
					<Primarybuttom url="/contactme" name="CONTACT" onClick={handleLinkClick} />
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
