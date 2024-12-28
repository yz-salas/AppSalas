import React from 'react';
import { HeaderAnimation, LeftToRightAnimation, RightToLeftAnimation, DragConstraints, PathDrawing } from '../../MotionAnimation/AppMotion';
import Footer from './Footer';

const About = () => {
	return (
		<>
			<HeaderAnimation>
				<div className=" py-20 flex flex-col" id="header">
					<header className="lg:container relative overflow-hidden text-white min-h-[100vh] flex flex-col gap-10">
						<div className="flex flex-col lg:flex-row w-full min-h-[30vh] items-center justify-center lg:justify-start">
							<h1 className="text-[50px] lg:text-[70px] font-bolddec text-zinc-800">
								About <span className="font-flory text-lime-600 text-[70px]">Me</span>
							</h1>
						</div>
						<hr className="w-full h-[1px] border-0 bg-zinc-800" />
						<div className="w-full flex justify-center items-center">
							<div className=" flex flex-col lg:flex-row md:px-[85px] lg:p-0">
								<div className="w-[100%]">
									<h1 className=" font-flory text-[40px] w-full">
										who am i <span className="text-lime-600">?</span>
									</h1>
									<span className="text-[30px] text-lime-600 p-5 h-[270px] w-full flex transition duration-300 flex-col justify-center items-center">
										⭢
									</span>
								</div>
								<div className="w-[100%]">
									<p className="py-4 flex flex-col gap-5 font-light md:text-lg lg:text-[18px] leading-relaxedvw-full">
										<span>My name is Zadiel Salas, I am 21 years old and I am an self-taught web developer front-end.</span>
										<span className="">
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
					</header>

					<section id="#about" className="lg:container text-white min-h-[100vh] w-full flex flex-col items-center justify-center ">
						{/* Content Section */}
						<div className="flex w-full items-center flex-col lg:flex-row">
							<div className="flex flex-col lg:flex-row md:w-[50%] lg:w-[50%] min-h-[30vh] items-center justify-center lg:justify-start">
								<h1 className="text-[50px] font-bolddec">
									A little spend <span className="font-flory text-lime-600 text-[60px]">time</span>
								</h1>
							</div>
							<div className="w-[70%] lg:w-[50%] flex gap-5 flex-col justify-center lg:justify-start">
								<h1 className="font-flory text-[40px] w-full text-zinc-800 text-center lg:text-start">
									My Free Time <span className="text-lime-600">!!!</span>
								</h1>
								<hr className="w-full h-[1px] border-0 bg-zinc-800" />
							</div>
						</div>
						<div className="w-full flex justify-center lg:justify-end">
							<span className="text-[30px] text-lime-600 p-5 h-[220px] w-[50%] flex transition duration-300 flex-col justify-center items-center">
								⭢
							</span>
							<div className="w-[100%] md:w-[77%] lg:w-[49.9%]">
								<p className="py-4 flex flex-col gap-5 font-light text-base md:text-lg lg:text-[18px] leading-relaxedvw-full">
									<span>I am passionate about exploring and learning about technology, especially in the field of technical computing.</span>

									<span>
										I enjoy researching the latest innovations in hardware and software, analyzing the pros and cons of new components that come onto
										the market.
									</span>
									<span>
										For me, keeping up with these developments is not just a hobby, but a way to stay inspilime and up to date in an ever-changing
										world.
									</span>
								</p>
							</div>
						</div>
					</section>
					<section id="#about" className="lg:container text-white min-h-[50vh] w-full flex flex-col justify-center items-center relative ">
						{/* Content Section */}
						<div className="flex text-center justify-center items-center w-full">
							<h1 className="text-[70px] w-[60%] font-bolddec text-lime-600 flex border-b-2 border-zinc-800 justify-center items-center">Extra</h1>
						</div>
						{/* Descripción del contenido */}
						<div className="w-[100%] md:w-[78%] lg:w-[80%]">
							<p className="py-4 flex flex-col gap-5 font-light md:text-lg lg:text-[18px] leading-relaxed text-center">
								<span>I have solid knowledge in various web development technologies, which allow us to create efficient and modern solutions.</span>
								<span>
									From using design languages like HTML and CSS to implementing advanced frameworks like React.js and Tailwind CSS, I'm ready to take
									on any development challenge.
								</span>
							</p>
						</div>
					</section>
				</div>
				<Footer />
			</HeaderAnimation>
		</>
	);
};

export default About;
