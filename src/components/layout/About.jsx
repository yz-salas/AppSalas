import React from 'react';
import { HeaderAnimation } from '../../MotionAnimation/AppMotion';
import Footer from './Footer';

const About = () => {
	return (
		<>
			<HeaderAnimation>
				<div className="py-20 flex overflow-auto" id="header">
					{/* Contenedor principal con scroll */}
					{/*
					 */}

					{/* Contenido adicional */}
					<div className="w-[100%]">
						<header className="text-white min-h-[90vh] flex border-b-2 border-zinc-800 items-center gap-10 w-full">
							<h1 id="about" className="text-[50px] lg:text-[160px] font-bolddec font-thin text-zinc-800">
								about<span className="text-lime-600"> me</span>
							</h1>
						</header>

						<section className="text-white min-h-[90vh] flex justify-center border-b-2 border-zinc-800 items-center gap-10 w-full">
							<div className="flex flex-col h-full lg:flex-row w-[50%] justify-center my-24">
								<h1 id="about" className="text-[50px] lg:text-[70px] font-flory font-thin text-white">
									who am i <span className="text-lime-600">?</span>
								</h1>
							</div>
							{/* Sección de presentación */}
							<div className="w-[50%] flex  justify-center items-center">
								<div className="flex flex-col md:px-[85px] lg:p-0">
									<div className="w-[100%]">
										<p className="py-4 flex flex-col space-y-5 font-ibm-plex md:text-lg lg:text-[18px] leading-relaxed">
											<span>My name is Zadiel Salas, I am 21 years old and I am a self-taught front-end web developer.</span>
											<span>
												I have always loved the world of digital, and since I was little, I have been very creative, applying myself to drawing,
												photography, and enjoying nature and travel. I found the right area to combine all these skills that I enjoy. My vision is to
												provide companies with modern web solutions that visually please users.
											</span>
											<span>I believe in combining clean design and solid functionality to create seamless experiences.</span>
											<span>I am passionate about turning ideas into reality, one line of code at a time.</span>
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Sección "about" que se quedará pegada */}
						<section className="text-white min-h-[90vh] flex border-b-2 border-zinc-800 justify-center items-center gap-10 w-full">
							<div className="flex flex-col h-full lg:flex-row w-[50%] justify-center my-24">
								<h1 id="about" className="text-[50px] lg:text-[70px] font-flory font-thin text-white">
									my free <span className="text-lime-600">time</span>
								</h1>
							</div>
							<div className="w-[50%] flex  justify-center items-center flex-col">
								<div className="w-full flex">
									<div className="w-[100%] md:w-[77%] lg:w-[100%]">
										<p className="py-4 lg:p-0 flex flex-col space-y-5 font-ibm-plex text-base md:text-lg lg:text-[18px] leading-relaxed">
											<span>I am passionate about exploring and learning about technology, especially in the field of technical computing.</span>
											<span>
												I enjoy researching the latest innovations in hardware and software, analyzing the pros and cons of new components that come
												onto the market.
											</span>
											<span>
												For me, keeping up with these developments is not just a hobby, but a way to stay inspired and up to date in an ever-changing
												world.
											</span>
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Otra sección */}
						<section className="text-white min-h-[90vh] flex justify-center items-center gap-10 w-full">
							<div className="flex flex-col h-full lg:flex-row w-[50%] justify-center my-24">
								<h1 id="about" className="text-[50px] lg:text-[70px] font-flory font-thin text-white">
									extra <span className="text-lime-600">!!!</span>
								</h1>
							</div>
							<div className="w-[50%]">
								<p className="py-4 flex flex-col gap-5 font-ibm-plex md:text-lg lg:text-[18px] leading-relaxed">
									<span>
										I have solid knowledge in various web development technologies, which allow us to create efficient and modern solutions.
									</span>
									<span>
										From using design languages like HTML and CSS to implementing advanced frameworks like React.js and Tailwind CSS, I'm ready to
										take on any development challenge.
									</span>
								</p>
							</div>
						</section>
					</div>
				</div>
			</HeaderAnimation>
		</>
	);
};

export default About;
