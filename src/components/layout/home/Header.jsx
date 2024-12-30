import { HeaderAnimation } from '../../../MotionAnimation/AppMotion';
import ButtomCV from '../../ui/Buttomsecundary';
import cv from '../../../../public/cv.jpg';
const Header = () => {
	return (
		<HeaderAnimation>
			<header className=" w-full flex items-center justify-center lg:justify-start h-screen">
				<div className="min-h-full w-[80%] flex gap-10 flex-col items-center justify-center text-white">
					<div className="w-full">
						<h1 className="text-[40px] md:text-[70px] lg:text-[70px] w-full font-bolddec">
							Yony Zadiel Salas<span className="text-lime-600">.</span>
						</h1>
						<hr className="w-full h-[1px] border-0 bg-zinc-800" />
					</div>
					<div className="w-full flex justify-center items-center font-flory">
						<div className="flex w-full items-center md:gap-10 lg:gap-10">
							<h3 className=" text-[20px] md:text-[25px] lg:text-[30px] font-light">Web Developer</h3>
							<div className="flex gap-5 text-[30px]">
								<span className="text-lime-600"> / </span>
								<h3>2024</h3>
							</div>
							<div className="flex gap-5 font-bolddec text-[30px]">
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
