import React from 'react';
import imgAbout from '../../assets/about.jpg';
import imgAbout2 from '../../assets/about2.png';
import Technologies from './about/technologies';
import Service from './about/Service';
import { Link } from 'react-router-dom';
import { AppMotion, HeaderAnimation } from '../../MotionAnimation/AppMotion';

const About = () => {
	return (
		<>
			<AppMotion />

			<HeaderAnimation>
				<div className="font-light lg:px-10 py-20" id="header">
					<section className="bg-zinc-950 text-white min-h-screen w-full flex flex-col items-center justify-center">
						<div className="">
							{/* About Title */}
							<div className="mb-12 lg:pl-8">
								<h1 className="text-5xl font-light py-12 text-red-700">
									About Me<span className="text-white">.</span>
								</h1>
							</div>

							{/* Content Section */}
							<div className="flex flex-col gap-10 lg:px-8">
								<div className="border-b-2 border-zinc-900">
									{/* Image */}
									<div className="flex flex-col lg:flex-row gap-5 justify-center items-center lg:justify-start lg:items-start">
										<img src={imgAbout} className="w-[300px] md:w-[450px] lg:w-[400px] shadow-lg " alt="Zadiel Salas" />

										<img src={imgAbout2} className="w-[300px] md:w-[450px] lg:w-[550px] shadow-lg " alt="Zadiel Salas" />
									</div>
									<div className="border-gray-400 broder-b-2 py-10">
										<p className="text-3xl font-light text-red-700">Zadiel Salas</p>
										<p className="text-lg text-gray-400">Web Developer</p>
									</div>
								</div>

								{/* Info */}
								<div className="flex flex-col gap-6 lg:gap-10">
									<p className="py-4 flex flex-col gap-5 text-base md:text-lg lg:text-[16px] leading-relaxed lg:w-[80%]">
										<span>Hello, my name is Adiel Salas, I am 21 years old and I am an self-taught web developer.</span>
										<span>
											Since my childhood I have loved the world of digital And since I was little I have been very creative, applying myself to
											drawing, photography, and enjoying nature and travel, and the right area to combine all these skills that I enjoy. My vision is
											to provide companies with modern web solutions that visually please users.
										</span>
										<span>I believe in combining clean design and solid functionality to create seamless experiences.</span>
										<span>I am passionate about turning ideas into reality, one line of code at a time.</span>
									</p>

									{/* Personal Details */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 border-t-2 border-zinc-900 border-b-2 border-zinc-900">
										<div>
											<p>
												<strong>Birthday:</strong> 10.02.1995
											</p>
											<p>
												<strong>Age:</strong> 29
											</p>
											<p>
												<strong>Address:</strong> Santiago De Los Caballeros
											</p>
											<p>
												<strong>Email:</strong>{' '}
												<a href="mailto:sadielsalas35@gmail.com" className="text-red-700 hover:underline">
													sadielsalas35@gmail.com
												</a>
											</p>
											<p>
												<strong>Phone:</strong> +1 829-442-1503
											</p>
										</div>
										<div>
											<p>
												<strong>Nationality:</strong> Dominican Republic
											</p>
											<p>
												<strong>Study:</strong> Autodidacta
											</p>
											<p>
												<strong>Degree:</strong> Bachelor
											</p>
											<p>
												<strong>Interest:</strong> Coding and Tech
											</p>
										</div>
									</div>

									{/* Button */}
									<div>
										<Link to="/resume" className="bg-red-700 text-white py-3 px-6 hover:bg-red-800 transition-colors">
											Download CV
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
					<Service />
					<Technologies />
				</div>
			</HeaderAnimation>
		</>
	);
};

export default About;
