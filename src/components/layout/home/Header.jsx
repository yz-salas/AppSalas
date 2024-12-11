import { HeaderAnimation } from '../../../MotionAnimation/AppMotion';

const Header = () => {
	const code = '<HI/>';
	return (
		<HeaderAnimation>
			<header className="w-full h-screen bg-zinc-950 font-thin text-white">
				<div className="flex flex-col lg:flex-row lg:gap-52 items-center h-full lg:px-8 justify-center">
					{/* Sección de Títulos */}
					<div className="text-3xl flex lg:gap-8 justify-center items-center lg:text-[60px] md:text-6xl">
						<div className="flex flex-col w-full">
							<h1 className="font-light text-center lg:text-left">
								<span>
									<span className="text-red-700">{code}</span> <span>I'm</span> Zadiel<span className="text-red-700">.</span>
								</span>
							</h1>
							<h1 className="font-light text-center lg:text-left">
								<span>And </span>
								<span>I'm </span>
								Developer <span className="text-red-700">Web</span>.
							</h1>
						</div>
					</div>
				</div>
			</header>
		</HeaderAnimation>
	);
};
export default Header;
