import React from 'react';
import CartProyect from './proyects/CartPoyects';
import Imgcart from './proyects/Imgcart';
import { AppMotion, HeaderAnimation } from '../MotionAnimation/AppMotion';

const Proyects = () => {
	return (
		<>
			<AppMotion />
			<HeaderAnimation>
				<section id="header" className="text-white min-h-[80vh] w-full flex flex-col justify-center">
					<div className="flex flex-col lg:pl-10">
						<h1 className="text-5xl text-red-700 lg:p-10">
							My Projects<span className="text-white">.</span>
						</h1>
					</div>
					<div className="h-full w-full font-light flex flex-col gap-8 px-6 py-10 md:px-24">
						<CartProyect />
					</div>
				</section>
				<section className="text-white min-h-[80vh] w-full flex flex-col justify-center">
					<div className="flex flex-col lg:pl-10">
						<h1 className="text-5xl text-red-700 lg:p-10">
							Photographs<span className="text-white">.</span>
						</h1>
					</div>
					<div className="text-white py-16 lg:px-[85px]">
						{/* Header */}
						<div className="mb-12">
							<p className="mt-4 flex flex-col gap-5 text-base md:text-lg lg:text-xl leading-relaxed lg:w-[80%]">
								Here you can see some of my photographs.
							</p>
						</div>

						{/* Masonry Grid */}
						<Imgcart />
					</div>
				</section>
			</HeaderAnimation>
		</>
	);
};

export default Proyects;
