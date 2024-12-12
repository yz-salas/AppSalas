import React from 'react';
import { Link } from 'react-router-dom';

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
							<Link className="hover:text-red-700" target="blanck" to="https://developer.mozilla.org/es/docs/Web/HTML">
								{' '}
								HTML{' '}
							</Link>
							<span className="text-red-700">/</span>
							<Link className="hover:text-red-700" target="blanck" to="https://developer.mozilla.org/es/docs/Web/CSS">
								{' '}
								CSS{' '}
							</Link>
							<span className="text-red-700">/</span>
							<Link className="hover:text-red-700" target="blanck" to="https://developer.mozilla.org/es/docs/	Web/JavaScript">
								{' '}
								JAVASCRIPT{' '}
							</Link>
							<span className="text-red-700">/</span>
							<Link className="hover:text-red-700" target="blanck" to="https://tailwindcss.com/">
								{' '}
								TAILWIND.CSS{' '}
							</Link>
							<span className="text-red-700">/</span>
							<Link className="hover:text-red-700" target="blanck" to="https://www.php.net/">
								{' '}
								PHP{' '}
							</Link>
							<span className="text-red-700">/</span>
							<Link className="hover:text-red-700" target="blanck" to="https://react.dev/">
								{' '}
								REACT.JS{' '}
							</Link>
							<span className="text-red-700">/</span>
							<Link className="hover:text-red-700" target="blanck" to="https://reactrouter.com/">
								{' '}
								REACT-ROUTER-DOM{' '}
							</Link>
							<span className="text-red-700">/</span>
							<Link className="hover:text-red-700" target="blanck" to="https://git-scm.com/">
								{' '}
								GIT{' '}
							</Link>
							<span className="text-red-700">/</span>
							<Link className="hover:text-red-700" target="blanck" to="https://github.com/">
								{' '}
								GITHUB{' '}
							</Link>
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
