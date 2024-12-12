import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img1 from '@assets/imgPortafolio/IMG-20241208-WA0001.jpg';
import img2 from '@assets/imgPortafolio/IMG-20241208-WA0002.jpg';
import img3 from '@assets/imgPortafolio/IMG-20241208-WA0003.jpg';
import img4 from '@assets/imgPortafolio/IMG-20241208-WA0004.jpg';
import img5 from '@assets/imgPortafolio/IMG-20241208-WA0005.jpg';
import img6 from '@assets/imgPortafolio/IMG-20241208-WA0006.jpg';
import img7 from '@assets/imgPortafolio/IMG-20241208-WA0007.jpg';
import img8 from '@assets/imgPortafolio/IMG-20241208-WA0008.jpg';
import img9 from '@assets/imgPortafolio/IMG-20241208-WA0009.jpg';
import img10 from '@assets/imgPortafolio/IMG-20241208-WA0010.jpg';
import img11 from '@assets/imgPortafolio/IMG-20241208-WA0011.jpg';
import img12 from '@assets/imgPortafolio/IMG-20241208-WA0012.jpg';
import img13 from '@assets/imgPortafolio/IMG-20241208-WA0013.jpg';
import img14 from '@assets/imgPortafolio/IMG-20241208-WA0014.jpg';
import img15 from '@assets/imgPortafolio/IMG-20241208-WA0015.jpg';
import img16 from '@assets/imgPortafolio/IMG-20241208-WA0016.jpg';

const Imgcart = () => {
	const imgs = [
		{ src: img1, alt: 'Descripción de la imagen 1' },
		{ src: img2, alt: 'Descripción de la imagen 2' },
		{ src: img3, alt: 'Descripción de la imagen 3' },
		{ src: img4, alt: 'Descripción de la imagen 4' },
		{ src: img5, alt: 'Descripción de la imagen 5' },
		{ src: img6, alt: 'Descripción de la imagen 6' },
		{ src: img7, alt: 'Descripción de la imagen 7' },
		{ src: img8, alt: 'Descripción de la imagen 8' },
		{ src: img9, alt: 'Descripción de la imagen 9' },
		{ src: img10, alt: 'Descripción de la imagen 10' },
		{ src: img11, alt: 'Descripción de la imagen 11' },
		{ src: img12, alt: 'Descripción de la imagen 12' },
		{ src: img13, alt: 'Descripción de la imagen 13' },
		{ src: img14, alt: 'Descripción de la imagen 14' },
		{ src: img15, alt: 'Descripción de la imagen 15' },
		{ src: img16, alt: 'Descripción de la imagen 16' },
	];

	// Estado para manejar el modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentImg, setCurrentImg] = useState(null);

	// Función para abrir el modal con una imagen específica
	const openModal = (img) => {
		setCurrentImg(img);
		setIsModalOpen(true);
	};

	// Función para cerrar el modal
	const closeModal = () => {
		setIsModalOpen(false);
		setCurrentImg(null);
	};

	// Cerrar el modal con la tecla Escape
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') {
				closeModal();
			}
		};

		if (isModalOpen) {
			window.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isModalOpen]);

	return (
		<div>
			{/* Masonry Grid */}
			<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
				{imgs.map((img, index) => (
					<div key={index} className="break-inside-avoid rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openModal(img.src)}>
						<LazyLoadImage
							src={img.src}
							alt={img.alt}
							className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
							loading="lazy"
						/>
					</div>
				))}
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fade-in"
					onClick={closeModal} // Cierra el modal al hacer clic en el fondo
				>
					<div
						className="relative max-w-[470px] w-[90%] rounded-lg shadow-lg"
						onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic en la imagen
					>
						<button className="absolute top-3 right-3 bg-white text-black p-1 rounded-full hover:bg-gray-200" onClick={closeModal}>
							✕
						</button>
						<img src={currentImg} alt="Expanded view" className="w-full h-auto object-contain rounded-lg" />
					</div>
				</div>
			)}
		</div>
	);
};

export default Imgcart;
