import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
	return (
		<div className='bg-[#0c121c] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
			<p className='heading'>
				My <span className='text-yellow-400'>Services</span>
			</p>
			<div className='services-area'>
				<div data-aos="fade-right">
					<div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
						<CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-white' />
						<h1 className='text-[20px] md:text-[30px] text-slate-200 mt-[1.5rem] mb-[1.5rem] '>
							Frontend
						</h1>
						<p className='text-[15px] text-[#d3d2d2] font-normal '>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							obcaecati, ut rerum vel id nisi odio quidem distinctio veritatis
							error vero, quisquam, est possimus nobis aliquam ipsam sint
							officiis voluptate?
						</p>
					</div>
				</div>
				<div data-aos="zoom-in" data-aos-delay="300">
					<div className='bg-yellow-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
						<RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-white' />
						<h1 className='text-[20px] md:text-[30px] text-slate-200 mt-[1.5rem] mb-[1.5rem] '>
							UI/UX
						</h1>
						<p className='text-[15px] text-[#d3d2d2] font-normal '>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							obcaecati, ut rerum vel id nisi odio quidem distinctio veritatis
							error vero, quisquam, est possimus nobis aliquam ipsam sint
							officiis voluptate?
						</p>
					</div>
				</div>
				<div data-aos="fade-left" data-aos-delay="500">
					<div className='bg-green-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
						<CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-white' />
						<h1 className='text-[20px] md:text-[30px] text-slate-200 mt-[1.5rem] mb-[1.5rem] '>
							Consultancy
						</h1>
						<p className='text-[15px] text-[#d3d2d2] font-normal '>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							obcaecati, ut rerum vel id nisi odio quidem distinctio veritatis
							error vero, quisquam, est possimus nobis aliquam ipsam sint
							officiis voluptate?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
