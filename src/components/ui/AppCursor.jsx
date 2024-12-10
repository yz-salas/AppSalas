import React, { useEffect, useState } from 'react';

const AppCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		const handleMouseEnter = () => setHidden(false);
		const handleMouseLeave = () => setHidden(true);

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseenter', handleMouseEnter);
		window.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseenter', handleMouseEnter);
			window.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 w-4 h-4 bg-red-700 rounded-full pointer-events-none ${hidden ? 'opacity-0' : 'opacity-100'}`}
			style={{
				transform: `translate(${position.x}px, ${position.y}px)`,
				transition: 'transform 0.1s linear, opacity 0.15s ease-in-out',
			}}
		></div>
	);
};

export default AppCursor;
