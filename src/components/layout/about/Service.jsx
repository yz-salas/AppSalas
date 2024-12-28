import { useState } from 'react';

const Service = () => {
	// Estado para manejar qué pregunta está activa
	const [activeIndex, setActiveIndex] = useState(null);

	// Función para alternar la expansión de preguntas
	const toggleQuestion = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	// Preguntas y respuestas
	const faqData = [
		{
			question: 'Design',
			answer: 'I combine creativity and functionality to create beautiful websites that offer seamless user experiences.',
		},
		{
			question: 'Front-end developer',
			answer:
				'From the frontend, we make sure that your ideas are visible to other people or collaborators and are quick to capture, safe and efficient.',
		},
		{
			question: 'Consulting',
			answer:
				'Personalized consulting services to guide you in making the best decisions for the presentation of your company or business on the web.',
		},
	];

	return (
		<section className="bg-zinc-950 lg:pt-20 text-white min-h-[70vh] w-full flex flex-col justify-center">
			<div className="mb-12 lg:pl-1">
				<h1 className="text-3xl text-blue-700 lg:px-6">
					My Service<span className="text-white">.</span>
				</h1>
			</div>
			<div className="h-full w-full font-light flex flex-col gap-8 py-10 lg:px-8">
				<div className="space-y-4">
					{faqData.map((item, index) => (
						<div
							key={index}
							className={`border-b ${index === faqData.length - 1 ? 'border-transparent' : 'border-gray-700 hover:border-blue-700'} pb-4`}
						>
							<button
								onClick={() => toggleQuestion(index)}
								className="w-full text-left flex justify-between items-center text-white text-[20px] lg:text-[30px] font-light focus:outline-none"
							>
								{item.question}
								<span className={`text-blue-700 text-2xl font-bold`}>{activeIndex === index ? '−' : '+'}</span>
							</button>
							{activeIndex === index && <p className="text-gray-400 mt-2">{item.answer}</p>}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Service;
