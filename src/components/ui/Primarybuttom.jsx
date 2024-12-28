import React from 'react';
import { Link } from 'react-router-dom';

const Primarybuttom = ({ url, name, onClick, style}) => {
	return (
		<>
			<Link
				to={url}
				onClick={onClick} // Agregamos el evento onClick
				className={`group ${style} relative text-blue-700 flex justify-center items-center gap-5`}
			>
				<span className="relative flex items-center">
					{/* Letras y texto */}
					<span className="flex items-center transition-all duration-300 hover">
						<span className="transition-colors font-light text-[15px] lg:text-[17px] duration-300 flex text-center">
							{name}
						</span>
					</span>
				</span>
			</Link>
		</>
	);
};

export default Primarybuttom;
