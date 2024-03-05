import React from "react";
import {
	CodeBracketSquareIcon,
	CommandLineIcon,
	RocketLaunchIcon,
} from "@heroicons/react/20/solid";

const ServiceSection = () => {
	return (
		<div className='bg-[#0c121c] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
			<p className='heading'>
				My <span className='text-yellow-400'>Services</span>
			</p>
			<div className='services-area'>
				<div data-aos='fade-right'>
					<div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]'>
						<CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-white' />
						<h1 className='text-[20px] md:text-[30px] uppercase text-slate-200 mt-[1.5rem] mb-[1.5rem] '>
							Frontend
						</h1>
						<p className='text-[15px] text-[#d3d2d2] font-normal text-justify'>
							I specialize in building responsive, user-friendly, and
							SEO-optimized frontends using modern web technologies like React,
							Next.js, Tailwind CSS, and GraphQL. I ensure that the UX is
							intuitive, the performance is fast, and the code is clean and
							maintainable.
						</p>
					</div>
				</div>
				<div data-aos='zoom-in' data-aos-delay='300'>
					<div className='bg-yellow-700 hover:scale-110 transform transition-all duration-300 font-semibold text-center p-[2rem]'>
						<RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-white' />
						<h1 className='text-[20px] md:text-[30px] uppercase text-slate-200 mt-[1.5rem] mb-[1.5rem] '>
							UI/UX
						</h1>
						<p className='text-[15px] text-[#d3d2d2] font-normal text-justify'>
							As a UI/UX designer, I create intuitive and user-friendly designs
							that enhance the user experience. I ensure that the user flow is
							easy, the information is clear, and the design is visually
							appealing. I work closely with clients to ensure that the final
							product meets the requirements and is of high quality.
						</p>
					</div>
				</div>
				<div data-aos='fade-left' data-aos-delay='500'>
					<div className='bg-green-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 font-semibold text-center p-[2rem]'>
						<CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-white' />
						<h1 className='text-[20px] md:text-[30px] uppercase text-slate-200 mt-[1.5rem] mb-[1.5rem] '>
							Consultancy
						</h1>
						<p className='text-[15px] text-[#d3d2d2] font-normal text-justify'>
							As a consultant, I help clients solve complex problems by
							analyzing their business needs, identifying the root cause of
							issues, and providing actionable insights and recommendations. I
							work closely with clients to understand their vision, goals, and
							constraints, and develop a customized solution that aligns with
							their needs.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
