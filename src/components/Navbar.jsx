import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="relative">
			{/* Hamburger Button */}
			<button
				onClick={toggleSidebar}
				className="fixed top-4 left-4 z-50 flex ml-[40px] md:ml-[90px] lg:ml-[115px] mt-[20px] flex-col items-start space-y-1 group gap-5"
			>
				{/* Top Line */}
				<span className="w-[60px] h-[2px] bg-white rounded-lg group-hover:bg-lime-600 transition-all"></span>
				{/* Bottom Line */}
				<span className="w-[40px] h-[3px] bg-white rounded-lg group-hover:bg-lime-600 transition-all"></span>
			</button>

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-full bg-zinc-950 shadow-md transition-transform transform ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} z-50`}
			>
				<div className="lg:container flex flex-col w-full h-full px-10 gap-10 lg:gap-0 ">
					<div className="w-full flex justify-end mt-10">
						<button onClick={toggleSidebar} className="text-zinc-800 font-bolddec text-[60px] hover:text-lime-600">
							✕
						</button>
					</div>
					{/* Sidebar Content */}
					<div className="w-full lg:w-[70%]">
						<nav className="flex flex-col space-y-4 h-full w-full justify-center gap-5">
							<div className="w-full h-[50px] flex items-center">
								<Link to="*" className="font-flory text-lime-600 text-[35px] md:text-[60px] lg:text-[70px]" onClick={toggleSidebar}>
									YZS
								</Link>
							</div>
							<hr className="w-full h-[1px] border-0 bg-zinc-800" />
							<div className="flex flex-col gap-3">
								<Link
									to="/AppSalas/"
									onClick={toggleSidebar}
									className="text-zinc-800 hover:text-lime-600 font-bolddec text-[35px] md:text-[60px] lg:text-[70px] w-full lg:w-[70%] "
								>
									Home
								</Link>
								<Link
									to="/AppSalas/aboutme/"
									onClick={toggleSidebar}
									className="text-zinc-800 font-bolddec text-[35px] md:text-[60px] lg:text-[70px] w-full lg:w-[70%] hover:text-lime-600 "
								>
									About Me
								</Link>
								<Link
									to="/AppSalas/myproyects"
									onClick={toggleSidebar}
									className="text-zinc-800 font-bolddec text-[35px] md:text-[60px] lg:text-[70px] w-full lg:w-[70%] hover:text-lime-600"
								>
									Portafolio
								</Link>
								<Link
									to="/AppSalas/contactme"
									onClick={toggleSidebar}
									className="text-zinc-800 font-bolddec text-[35px] md:text-[60px] lg:text-[70px] w-full lg:w-[70%] hover:text-lime-600"
								>
									Contact
								</Link>
							</div>
						</nav>
					</div>
					<div className="w-[30%]">
						<div className=""></div>
					</div>
				</div>
			</div>

			{/* Overlay */}
			{isSidebarOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}
		</div>
	);
};

export default Navbar;
