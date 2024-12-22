import React from 'react';
import { Link } from 'react-router-dom';
import cv from '../../../public/cv.jpg';

const ButtomCV = (props) => {
	return (
		<div>
			<Link to="/AppSalas/aboutme/" download className="border border-red-700 text-white py-3 px-6 hover:bg-red-800 transition-colors text-[15px]">
				{props.name} ⭢
			</Link>
		</div>
	);
};

export default ButtomCV;
