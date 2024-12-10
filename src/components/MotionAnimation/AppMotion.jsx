import { motion, useScroll, useSpring } from 'framer-motion';

export const AppMotion = () => {
	/* controladores de animación de scroll */
	const { scrollYProgress } = useScroll();
	const scaleY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	/* controladores de animación de scroll */

	return (
		<>
			{/* Barra de progreso animada de arriba a abajo en el lado derecho */}
			<motion.div
				className="fixed right-0 top-0 w-[5px] bg-red-700 h-full"
				style={{
					scaleY: scaleY, // Aplica la animación de escala en el eje Y (vertical)
					transformOrigin: '0%', // El origen de la transformación está en la parte superior
				}}
			/>
		</>
	);
};

export const LeftToRightAnimation = ({ children, delay = 0 }) => {
	const headerVariants = {
		hidden: {
			x: 70, // Empieza más abajo
			opacity: 0, // Inicialmente invisible
		},
		visible: {
			x: 0, // Llega a su posición normal
			opacity: 1, // Totalmente visible
			transition: {
				duration: 0.6, // Duración de la animación
				ease: 'easeInOut', // Efecto suave
				delay: delay, // Retraso para cada elemento
			},
		},
	};

	return (
		<motion.header variants={headerVariants} initial="hidden" animate="visible">
			{children}
		</motion.header>
	);
};

export const NavbarAnimation = ({ children }) => {
	const navbarVariants = {
		hidden: {
			x: '-100%', // Comienza fuera de la pantalla a la izquierda
			opacity: 0, // Inicialmente invisible
		},
		visible: {
			x: 0, // Se desliza hacia su posición visible
			opacity: 1, // Totalmente visible
			transition: {
				duration: 0.6, // Duración de la animación
				ease: 'easeInOut', // Efecto suave
			},
		},
	};

	return (
		<motion.nav variants={navbarVariants} initial="hidden" animate="visible" className="fixed top-0 left-0 w-full bg-gray-800 text-white">
			{children}
		</motion.nav>
	);
};

export const HeaderAnimation = ({ children }) => {
	const headerVariants = {
		hidden: {
			y: 70, // Empieza más abajo
			opacity: 0, // Inicialmente invisible
		},
		visible: {
			y: 0, // Llega a su posición normal
			opacity: 1, // Totalmente visible
			transition: {
				duration: 0.2, // Duración de la animación
				ease: 'easeInOut', // Efecto suave
				delay: 0.3, // Espera a que termine la animación del navbar
			},
		},
	};

	return (
		<motion.header variants={headerVariants} initial="hidden" animate="visible">
			{children}
		</motion.header>
	);
};
