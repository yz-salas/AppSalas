import { HeaderAnimation } from '../../../MotionAnimation/AppMotion';
import bg from '../../../assets/about2.jpg';
import Buttomsecundary from '../../ui/Buttomsecundary';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header = () => {
	const code = '<HI/>';
	return (
		<HeaderAnimation>
			<header className="py-20 flex justify-center items-center min-h-screen">
				<div className="overflow-hidden">
					<div className="text-3xl min-h-[50vh] flex-col text-white flex gap-8 justify-center items-center lg:text-[50px] md:text-6xl">
						<div className="flex flex-col justify-center items-center">
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
						<Buttomsecundary name="Know Me" />
					</div>
				</div>
			</header>
		</HeaderAnimation>
	);
};
export default Header;
