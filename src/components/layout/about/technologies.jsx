import React from 'react';

const Technologies = () => {
	return (
		<section className="bg-zinc-950 text-white min-h-[70vh] w-full flex flex-col items-center justify-center">
			<div className="h-full w-full flex flex-col gap-8 lg:px-6">
				{/* About Title */}
				<div className="mb-12 lg:pl-1">
					<h1 className="text-4xl md:text-5xl lg:text-5xl text-red-700">
						My Technologies<span className="text-white">.</span>
					</h1>
				</div>

				<div className="text-[25px] lg:text-[50px] flex justify-center items-center">
					<div className="lg:p-1">
						<p>
							HTML <span className="text-red-700">/</span> CSS <span className="text-red-700">/</span> JAVASCRIPT{' '}
							<span className="text-red-700">/</span> TAILWIND.CSS <span className="text-red-700">/</span> PHP <span className="text-red-700">/</span>{' '}
							REACT.JS <span className="text-red-700">/</span> REACT-ROUTER-DOM <span className="text-red-700">/</span> GIT{' '}
							<span className="text-red-700">/</span> GITHUB
						</p>
					</div>
				</div>
				<div className="lg:px-2 w-full lg:w-[70%] text-[20px]">
					<p>
						I have solid knowledge in various web development technologies, which allow us to create efficient and modern solutions. From using design
						languages ​​like HTML and CSS to implementing advanced frameworks like React.js and Tailwind CSS, I'm ready to take on any development
						challenge.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
