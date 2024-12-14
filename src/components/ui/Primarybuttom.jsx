import React from 'react';
import { Link } from 'react-router-dom';

const Primarybuttom = ({ url, name, onClick }) => {
	return (
		<>
			<Link
				to={url}
				onClick={onClick} // Agregamos el evento onClick
				className="group relative text-red-700 duration-700 flex lg:justify-start items-center gap-5 w-[100%] lg:w-[100px]"
			>
				<span className="relative flex items-center">
					{/* Letras y texto */}
					<span className="flex items-center transition-all duration-300 hover">
						<span className="transition-colors font-light text-[15px] lg:text-[17px] duration-300 group-hover:text-red-900 flex text-center">
							{name}
						</span>
					</span>
				</span>
			</Link>
		</>
	);
};

export default Primarybuttom;
