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
	{
		id: 4,
		title: 'Your Images',
		subtitle:
			'This small website shows my ability to consume apis and display its data on the screen, it is developed in html, css, javasctipt, tailwind.css, and react.js shows images of an API when you click a button, they are added 1 by 1 and all images are deleted when you touch the secondary button',
		number: '03',
		url: 'https://github.com/yz-salas/App_image',
	},
	{
		id: 5,
		title: 'Weather App',
		subtitle: 'Using a weather API, this website gives the exact weather in real time of cities in different countries.',
		number: '04',
		url: 'https://github.com/yz-salas/App_De_Clima',
	},
	{
		id: 5,
		title: 'Rick And Morty',
		subtitle: 'By consuming an API, this website shows images of characters from the famous television show called Rick and Morty.',
		number: '04',
		url: 'https://github.com/yz-salas/app_personajes',
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
							<div className="flex flex-wrap justify-center items-center lg:justify-start lg:items-start gap-[3px]">
								{/* Flecha visible solo en pantallas grandes */}
								<span className="text-[30px] text-lime-600 p-5 h-[400px] w-[300px] flex transition duration-300 flex-col justify-center items-center hidden lg:flex	">
									⭢
								</span>
								{projects.map((project) => (
									<Link
										to={project.url}
										target="blanck"
										className="hover:text-lime-600 p-5 bg-zinc-800 hover:bg-zinc-900 text-black h-[400px] w-[300px] rounded-sm flex transition duration-300 flex-col"
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
