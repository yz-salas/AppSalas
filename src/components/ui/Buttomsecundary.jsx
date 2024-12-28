import React from 'react';
import { Link } from 'react-router-dom';

const ButtomCV = (props) => {
	return (
		<div>
			<Link to={cv} download className={`py-3 px-6 text-lime-600 transition-colors text-[15px]`}>
				{props.name} ⭢
			</Link>
		</div>
	);
};

export default ButtomCV;
