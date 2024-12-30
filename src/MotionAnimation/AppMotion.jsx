import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react'; // Corregido aquí

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
				className="fixed right-0 top-0 w-[5px] bg-lime-600 h-full"
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
		<motion.div variants={headerVariants} initial="hidden" animate="visible">
			{children}
		</motion.div>
	);
};

export const RightToLeftAnimation = ({ children, delay = 0 }) => {
	const headerVariants = {
		hidden: {
			x: -70, // Empieza más abajo
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
		<motion.div variants={headerVariants} initial="hidden" animate="visible">
			{children}
		</motion.div>
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
		<motion.div variants={navbarVariants} initial="hidden" animate="visible">
			{children}
		</motion.div>
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
		<motion.div variants={headerVariants} initial="hidden" animate="visible" className="lg:container">
			{children}
		</motion.div>
	);
};

export const AnimationButtons = ({ children }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.8 }}
			style={{ display: 'inline-block' }} // Mantener el contenido alineado correctamente
		>
			{children}
		</motion.div>
	);
};

export const DragConstraints = () => {
	// Corregido el uso de useRef
	const constraintsRef = useRef(null); // Ref correcta

	return (
		<motion.div ref={constraintsRef} style={constraints} className="w-full h-full">
			<motion.div
				drag
				dragConstraints={constraintsRef}
				dragElastic={0.2}
				style={box}
				className="cursor-all-scroll flex justify-center items-center font-flory bg-lime-600"
			>
				Slide Me
			</motion.div>
		</motion.div>
	);
};

/**
 * ==============   Styles   ================
 */

const constraints = {
	width: 'full',
	height: 'full',
	backgroundColor: 'var(--hue-1-transparent)',
	borderRadius: 10,
};

const box = {
	width: 100,
	height: 100,
	borderRadius: 50,
};

// Definimos las variantes de animación para el trazado de los elementos SVG
const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i) => {
		const delay = i * 0.5;
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
				opacity: { delay, duration: 0.01 },
			},
		};
	},
};

export const PathDrawing = () => {
	return (
		<motion.svg width="400" height="200" viewBox="0 0 600 600" initial="hidden" animate="visible" style={image}>
			<motion.circle className="circle-path" cx="100" cy="100" r="80" stroke="#ff0088" variants={draw} custom={1} style={shape} />
			<motion.line x1="220" y1="30" x2="360" y2="170" stroke="#4ff0b7" variants={draw} custom={2} style={shape} />
			<motion.line x1="220" y1="170" x2="360" y2="30" stroke="#4ff0b7" variants={draw} custom={2.5} style={shape} />
			<motion.rect width="140" height="140" x="410" y="30" rx="20" stroke="#0d63f8" variants={draw} custom={3} style={shape} />
			<motion.circle cx="100" cy="300" r="80" stroke="#0d63f8" variants={draw} custom={2} style={shape} />
			<motion.line x1="220" y1="230" x2="360" y2="370" stroke="#ff0088" custom={3} variants={draw} style={shape} />
			<motion.line x1="220" y1="370" x2="360" y2="230" stroke="#ff0088" custom={3.5} variants={draw} style={shape} />
			<motion.rect width="140" height="140" x="410" y="230" rx="20" stroke="#4ff0b7" custom={4} variants={draw} style={shape} />
			<motion.circle cx="100" cy="500" r="80" stroke="#4ff0b7" variants={draw} custom={3} style={shape} />
			<motion.line x1="220" y1="430" x2="360" y2="570" stroke="#0d63f8" variants={draw} custom={4} style={shape} />
			<motion.line x1="220" y1="570" x2="360" y2="430" stroke="#0d63f8" variants={draw} custom={4.5} style={shape} />
			<motion.rect width="140" height="140" x="410" y="430" rx="20" stroke="#ff0088" variants={draw} custom={5} style={shape} />
		</motion.svg>
	);
};

/**
 * ==============   Styles   ================
 */

const image = {
	maxWidth: '80vw', // Controla el tamaño del SVG
};

const shape = {
	strokeWidth: 10,
	strokeLinecap: 'round',
	fill: 'transparent',
};

// -----------------------------------------------------

export const BtnAnimation = ({ children }) => {
	return (
		<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
			{children}
		</motion.div>
	);
};
