import React from 'react';
import { HeaderAnimation } from '../../MotionAnimation/AppMotion';

const Contact = () => {
	return (
		<>
			<HeaderAnimation>
				<div className="font-light py-20 min-h-screen flex justify-center items-center" id="header">
					<div className=" bg-zinc-950 flex justify-center flex-col lg:flex-row lg:p-auto">
						<div className="lg:w-[50%] w-full h-full text-white">
							<div className="flex flex-col lg:flex-row w-full min-h-[30vh] justify-center lg:items-center lg:justify-start">
								<h1 className="text-[50px] lg:text-[70px] font-ibm-plex font-thin text-white">
									contact<span className="text-lime-600 text-[70px]">.Me()</span>
								</h1>
							</div>
							<div className='font-ibm-plex '>
								<p className="mb-6">
									Use our contact form for all information requests or contact us directly using the contact information below. All information is
									treated with complete confidentiality and in accordance with our{' '}
									<a href="#" className="text-lime-600 hover:underline">
										data protection statement
									</a>
									.
								</p>
								<p className=" mb-2">Feel free to get in touch with us via email or phone:</p>
								<p className="text-lime-600 font-medium">info@neoverv.com</p>
								<p className="text-lime-600 font-medium">+829-442-1503</p>
							</div>
						</div>
						<div className="lg:w-[50%] w-full">
							<form className="lg:p-4 py-10">
								<input type="text" placeholder="Name" className="w-full mb-4 p-2 font-ibm-plex bg-zinc-800 rounded text-lime-600 focus:outline-none " />
								<input
									type="email"
									placeholder="Email"
									className="w-full mb-4 p-2 font-ibm-plex bg-zinc-800 rounded text-lime-600 focus:outline-none "
								/>
								<textarea
									placeholder="Message"
									className="w-full mb-4 p-2 font-ibm-plex rounded bg-zinc-800 text-lime-600 focus:outline-none  min-h-[50vh]"
									rows="4"
								></textarea>
								<button className="bg-zinc-800 font-ibm-plex hover:bg-zinc-900 text-lime-600 py-2 px-4 rounded">Send Message</button>
							</form>
						</div>
					</div>
				</div>
			</HeaderAnimation>
		</>
	);
};

export default Contact;
