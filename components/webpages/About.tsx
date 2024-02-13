import React from "react";

const About = () => {
	return (
		<div className='bg-[#0f1722] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
			<div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
				<div>
					<h1 className='text-[20px] font-bold uppercase text-yellow-400 md-[1rem]'>
						ABOUT ME
					</h1>
					<h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
						Shaping <span>Ideas</span>
					</h2>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default About;
