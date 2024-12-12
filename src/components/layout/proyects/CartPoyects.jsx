import React, { useState } from 'react';
import { FaPhp, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import P1imgOne from '@assets/imgProyects/delfines/portada.jpg';
import P1imgTwo from '@assets/imgProyects/delfines/extra.png';
import P2imgOne from '@assets/imgProyects/aosCorporation/portada.jpg';
import P2imgTwo from '@assets/imgProyects/aosCorporation/extra.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CartProyect = () => {
	// Estado para manejar qué proyecto está activo
	const [activeIndex, setActiveIndex] = useState(null);

	// Función para alternar la expansión de proyectos
	const toggleProyect = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	// Datos de los proyectos, con los iconos de tecnologías
	const proyectsData = [
		{
			name: 'Delfines Park',
			descripcion: 'Mi Primera Web Desarrollada En Php, Tailwind.css, Y Mysql, esta al ser mi primera web pude terminarla luego de uno dos meses ',
			img1: P1imgOne,
			img2: P1imgTwo,
			technologies: [<FaPhp />, <FaCss3Alt />, <SiTailwindcss />, <SiMysql />],
		},
		{
			name: 'Aos Corporation',
			descripcion:
				'Esta es mi segunda web desarrollada en Php, Css, Tailwind, Mysql, al momento en el que cree esta app ya tenia algo mas de experiencia y se ve reflejada en la web, su diceño y funcionalidad hhablan por si sola',
			img1: P2imgOne,
			img2: P2imgTwo,
			technologies: [<FaPhp />, <FaCss3Alt />, <SiTailwindcss />, <FaJs />, <SiMysql />],
		},
		// Puedes añadir más proyectos aquí si lo deseas
	];

	return (
		<>
			<div className="space-y-4 flex flex-col gap-9">
				{proyectsData.map((proyect, index) => (
					<div key={index} className={`border-b border-gray-400 hover:border-white pb-4`}>
						<button
							onClick={() => toggleProyect(index)}
							className="w-full text-left flex justify-between items-center text-gray-400 hover:text-white text-[20px] lg:text-[30px] font-light focus:outline-none"
						>
							{proyect.name}
							<span className="text-red-700 text-2xl font-light">{activeIndex === index ? '−' : '+'}</span>
						</button>
						{activeIndex === index && (
							<div className="text-gray-400 mt-4 flex">
								<div className="flex flex-col lg:flex-row gap-4">
									{/* Animación y tamaño reducido de las imágenes */}
									<div className="flex-shrink-0 transform transition-all duration-500 ease-in-out hover:scale-105">
										<LazyLoadImage src={proyect.img1} alt={`${proyect.name} primary`} className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg shadow-lg" />
									</div>
									<div className="flex flex-col sm:ml-4">
										<p className="mb-4 text-gray-400">{proyect.descripcion}</p>

										{/* Mostrar los iconos de las tecnologías */}
										<div className="flex gap-4 mt-4">
											{proyect.technologies.map((icon, i) => (
												<div key={i} className="text-4xl text-gray-300">
													{icon}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
};

export default CartProyect;
