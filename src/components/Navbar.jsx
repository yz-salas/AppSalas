import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BtnAnimation } from '../MotionAnimation/AppMotion';

const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// Function to handle the delay when closing the sidebar
	const handleLinkClick = () => {
		// Add a delay before closing the sidebar
		setTimeout(() => {
			setIsSidebarOpen(false);
		}, 300); // Delay of 300ms before closing the sidebar
	};

	return (
		<div className="relative">
			{/* Hamburger Button */}
			<button
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				className="fixed top-4 left-4 z-50 flex ml-[12px] md:ml-[35px] lg:ml-[147px] mt-[40px] flex-col items-start space-y-1 group gap-5"
			>
				{/* Top Line */}
				<span className="w-[60px] h-[10px] rounded-sm bg-lime-600 transition-all group-hover:w-[110px]"></span>

				{/* Bottom Line */}
				<span className="w-[40px] h-[10px] rounded-sm bg-lime-600 transition-all group-hover:w-[60px]"></span>
			</button>

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-full bg-zinc-950 shadow-md transition-transform transform ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} z-50 transition-all duration-500 delay-100`} // Add delay to the transition
			>
				<div className="px-10 py-[100px] lg:px-[8rem] flex flex-col w-full h-full gap-10 lg:gap-0 ">
					{/* Sidebar Content */}
					<div className="w-full lg:w-[100%]">
						<nav className="flex flex-col space-y-4 h-full w-full justify-center gap-5">
							<div className="w-full h-[50px] flex items-center justify-between">
								<Link
									to="*"
									className="font-flory text-lime-600 text-[35px] md:text-[60px] lg:text-[70px]"
									onClick={handleLinkClick} // Use the handleLinkClick with delay
								>
									YZS
								</Link>
								<BtnAnimation>
									<button onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-center justify-center space-y-1 group gap-5">
										{/* Línea superior */}
										<span className="w-[60px] h-[10px] rounded-sm bg-lime-600 transition-all group-hover:w-[80px]"></span>
									</button>
								</BtnAnimation>
							</div>
							<hr className="w-full h-[1px] border-0 bg-zinc-800" />
							<div className="flex flex-col gap-3">
								<BtnAnimation>
									<Link
										to="/"
										onClick={handleLinkClick} // Use the handleLinkClick with delay
										className="text-zinc-800 hover:text-lime-600 font-bolddec font-thin text-[35px] md:text-[60px] lg:text-[70px] w-full lg:w-[70%] transition-colors duration-300 flex items-center"
									>
										Home
									</Link>
								</BtnAnimation>
								<BtnAnimation>
									<Link
										to="/aboutme"
										onClick={handleLinkClick} // Use the handleLinkClick with delay
										className="text-zinc-800 font-bolddec font-thin text-[35px] md:text-[60px] lg:text-[70px] w-full lg:w-[70%] hover:text-lime-600 transition-colors duration-300"
									>
										About
									</Link>
								</BtnAnimation>
								<BtnAnimation>
									<Link
										to="/myproyects"
										onClick={handleLinkClick} // Use the handleLinkClick with delay
										className="text-zinc-800 font-bolddec font-thin text-[35px] md:text-[60px] lg:text-[70px] w-full lg:w-[70%] hover:text-lime-600 transition-colors duration-300"
									>
										work
									</Link>
								</BtnAnimation>
								<BtnAnimation>
									<Link
										to="/contactme"
										onClick={handleLinkClick} // Use the handleLinkClick with delay
										className="text-zinc-800 font-bolddec font-thin text-[35px] md:text-[60px] lg:text-[70px] w-full lg:w-[70%] hover:text-lime-600 transition-colors duration-300"
									>
										Contact
									</Link>
								</BtnAnimation>
							</div>
						</nav>
					</div>
					<div className="w-[30%]">
						<div className=""></div>
					</div>
				</div>
			</div>

			{/* Overlay */}
			{isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}
		</div>
	);
};

export default Navbar;
