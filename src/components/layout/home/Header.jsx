import { HeaderAnimation } from '../../../MotionAnimation/AppMotion';
import ButtomCV from '../../ui/Buttomsecundary';
import cv from '../../../../public/cv.jpg';
const Header = () => {
	return (
		<HeaderAnimation>
			<header className=" w-full flex items-center h-screen">
				<div className="min-h-full w-[80%] lg:w-[100%] flex gap-10 flex-col items-center justify-center lg:items-start text-white">
					<div className="w-[90%]">
						<h1 className="text-[40px] md:text-[70px] lg:text-[90px] w-full font-bolddec">
						 yony zadiel<span className="text-lime-600"> salas</span>
						</h1>
						<hr className="w-full h-[1px] border-0 bg-zinc-800" />
					</div>
					<div className="w-[90%] flex justify-center items-center font-flory">
						<div className="flex w-full items-center md:gap-10 lg:gap-10">
							<h3 className=" text-[20px] md:text-[25px] lg:text-[30px] font-light">Web Developer</h3>
							<div className="flex gap-5 text-[30px]">
								<span className="text-lime-600"> / </span>
								<h3>2024</h3>
							</div>
							<div className="flex gap-5 font-ibm-plex font-thin text-[30px]">
								<a href={cv} download className={`py-3 px-6 text-lime-600 transition-colors text-[15px]`}>
									CV ⭢
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</HeaderAnimation>
	);
};

export default Header;
