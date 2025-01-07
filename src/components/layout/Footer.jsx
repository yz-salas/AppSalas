import { Link } from 'react-router-dom';
import { DragConstraints } from '../../MotionAnimation/AppMotion';
const Footer = () => {
	return (
		<footer className=" bg-black text-white py-12 min-h-[100vh] p-10">
			<div className="min-h-[100%] flex gap-10 flex-col lg:flex-row justify-center items-center lg:items-center lg:justify-start">
				<div className="flex items-center justify-center gap-6 lg:h-[100%] min-h-[80vh] w-[75%] lg:w-[50%] flex-col lg:border-r-[2px] lg:border-b-0 border-b-[2px]  border-zinc-800">
					{/* Header content */}
					<div className="flex flex-col lg:flex-row w-full min-h-[30vh] items-center justify-center lg:justify-start">
						<h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bolddec w-full">
							connect.with<span className="text-lime-600 "> me</span>
						</h1>
					</div>
					{/* Navigation with submenus */}
					<div className="flex gap-[100px] text-sm tracking-wider uppercase w-full h-[100%]">
						<div className="flex flex-wrap gap-[70px]">
							{/* Link 1 */}
							<div className="flex flex-col gap-[40px]">
								<Link to="/AppSalas/" className="hover:text-gray-300 font-flory text-[20px]">
									Home
								</Link>
								<ul className="text-gray-500 text-xs space-y-2 mt-2">
									<li>Advantages</li>
									<li>Partners</li>
									<li>Clients</li>
									<li>Certificates</li>
								</ul>
							</div>

							{/* Link 2 */}
							<div className="flex flex-col gap-[40px]">
								<Link to="/AppSalas/aboutme/" className="hover:text-gray-300 font-flory text-[20px]">
									About
								</Link>
								<ul className="text-gray-500 text-xs space-y-2 mt-2">
									<li>Advantages</li>
									<li>Calculator</li>
									<li>Software</li>
								</ul>
							</div>

							{/* Link 3 */}
							<div className="flex flex-col gap-[40px]">
								<Link to="/AppSalas/myproyects" className="hover:text-gray-300 font-flory text-[20px]">
									Monitoring
								</Link>
								<ul className="text-gray-500 text-xs space-y-2 mt-2">
									<li>Tachographs</li>
									<li>Sensors</li>
									<li>Trackers</li>
								</ul>
							</div>

							{/* Link 4 */}
							<div className="flex flex-col gap-[40px]">
								<Link href="/AppSalas/contactme" className="hover:text-gray-300 font-flory text-[20px]">
									Devices
								</Link>
								<ul className="text-gray-500 text-xs space-y-2 mt-2">
									<li>Configurator</li>
									<li>Services</li>
									<li>Blog</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full h-[80vh] lg:w-[50%] lgh-[80vh]">
					<DragConstraints />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
