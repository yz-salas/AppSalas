import React from 'react';
import { HeaderAnimation } from '../../MotionAnimation/AppMotion';

const Contact = () => {
	return (
		<>
			<HeaderAnimation>
				<div className="font-light" id="header">
					<div className="bg-zinc-950">
						<div className="flex flex-col mt-10">
							<h1 className="text-5xl text-red-700 p-10">
								Contact Me<span className="text-white">.</span>
							</h1>
						</div>
						<div className="md:px-32 lg:px-32">
							<form className="p-4 rounded-lg">
								<input
									type="text"
									placeholder="Name"
									className="w-full mb-4 p-2 border border-gray-600 rounded bg-zinc-950 text-white focus:border-white focus:outline-none focus:ring-2"
								/>
								<input
									type="email"
									placeholder="Email"
									className="w-full mb-4 p-2 border border-gray-600 rounded bg-zinc-950 text-white focus:border-white focus:outline-none focus:ring-2"
								/>
								<textarea
									placeholder="Message"
									className="w-full mb-4 p-2 border border-gray-600 rounded bg-zinc-950 text-white focus:border-white focus:outline-none focus:ring-2 min-h-[50vh]"
									rows="4"
								></textarea>
								<button className="bg-red-700 text-white py-2 px-4 rounded">Send Message</button>
							</form>
						</div>
					</div>
				</div>
			</HeaderAnimation>
		</>
	);
};

export default Contact;
