import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderAnimation } from '../../MotionAnimation/AppMotion';
import Footer from './Footer';

const projects = [
	{
		id: 1,
		title: 'AOS Corporation',
		subtitle:
			'My First Website Developed In Php, Tailwind.css, And Mysql, This Being My First Website I Was Able To Finish It After One Or Two Months',
		number: '01',
		url: 'https://aoscorporation.com/src/main.php',
	},
	{
		id: 2,
		title: 'DelfinesPark',
		subtitle:
			'This is my second website developed in Php, Css, Tailwind, Mysql, at the time I created this app I already had some more experience and it is reflected in the website, its design and functionality speak for themselves.',
		number: '02',
		url: 'https://delfinespark.com/src/main.php',
	},
];

const Project = () => {
	return (
		<HeaderAnimation>
			<div className="py-[125px] flex flex-col text-white min-h-screen" id="header">
				<header className=" relative overflow-hidden flex flex-col gap-10">
					<div className="flex flex-col lg:flex-row lg:items-center w-full min-h-[30vh] pl-[28px] lg:p-0 justify-center lg:justify-start">
						<h1 className="text-[50px] lg:text-[70px] font-bolddec text-white">
							My <span className="text-lime-600 font-flory text-[70px]">Projects</span>
						</h1>
					</div>
					<div className="pl-[29px] lg:p-0 w-full">
						<hr className="lg:w-[60%] h-[1px] border-0 bg-zinc-800" />
					</div>
					<div className="w-full flex py-[40px]">
						<div className="flex items-center justify-center lg:justify-start lg:items-start w-full">
							<div className="flex flex-wrap gap-[3px]">
								{/* Flecha visible solo en pantallas grandes */}
								<span className="text-[30px] text-lime-600 p-5 h-[400px] w-[300px] flex transition duration-300 flex-col justify-center items-center hidden lg:flex">
									⭢
								</span>
								{projects.map((project) => (
									<Link
										to={project.url}
										className="hover:text-lime-600 p-5 bg-zinc-800 hover:bg-zinc-900 text-black h-[400px] w-[300px] flex transition duration-300 flex-col"
									>
										<div className="font-bolddec text-[30px] w-full h-[15%] flex items-center">{project.number}</div>
										<div className="w-full h-[80%] flex justify-center flex-col">
											<h1 className="text-[30px] font-flory"> {project.title}</h1>
											<p className="text-[15px] font-light">{project.subtitle}</p>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				</header>
			</div>
		</HeaderAnimation>
	);
};

export default Project;
