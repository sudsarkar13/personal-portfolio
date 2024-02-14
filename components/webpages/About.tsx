/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import ArrowDownTrayIcon from "@heroicons/react/20/solid/esm/ArrowDownTrayIcon";

const About = () => {
	return (
		<div className='bg-[#0f1722] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
			<div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
				<div>
					<h1 className='text-[20px] font-bold uppercase text-yellow-400 mb-[1rem]'>
						ABOUT ME
					</h1>
					<h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
						Shaping <span className='text-yellow-400'>Ideas</span>
					</h2>
					<div className='mb-[3rem] flex items-center md:space-x-10'>
						<span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
						<div className='flex flex-col'>
							<p className='text-[19px] text-slate-300 w-[80%]'>
								Bloom where you're planted, roots dig deep, yet reach for the
								sun.
							</p>
							<p className='text-[19px] text-slate-300 w-[80%]'>
								This quote encourages personal growth and resilience. It
								emphasizes thriving in your current circumstances while aiming
								for aspirations. It's concise, memorable, and applicable to
								various situations.
							</p>
						</div>
					</div>
					<button className='px-[2rem] bg-yellow-400 hover:bg-[#55e6a5] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase text-black flex items-center space-x-2 rounded-md'>
						<p>Download Resume</p>
						<ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
					</button>
				</div>
			</div>
			<div>
				<Image src='/images/about.jpg' alt='about' layout='fill' />
			</div>
		</div>
	);
};

export default About;
