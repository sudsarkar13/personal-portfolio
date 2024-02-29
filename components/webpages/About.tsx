import { FaUbuntu } from "react-icons/fa";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/legacy/image";
import ArrowDownTrayIcon from "@heroicons/react/20/solid/esm/ArrowDownTrayIcon";
import GitHubContribution from "../githubContributions/GitHubContribution";
import Quote from "../extras/quote/Quote";

const About = () => {
	return (
		<div className='bg-[#0f1722] pb-[3rem] pt-[2rem] md:pt-[6rem]'>
			<div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
				<div>
					<h1 className='text-[20px] font-bold uppercase text-yellow-400 mb-[1rem]'>
						ABOUT ME
					</h1>
					<h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
						Shaping <span className='text-yellow-400'>Ideas</span>
					</h2>
					<div className='mb-[3rem] flex items-center md:space-x-10'>
						<div className='flex flex-col'>
							<div className='quote-container'>
								<Quote />
							</div>
						</div>
					</div>
					<div className='mb-[3rem] flex items-center md:space-x-10'>
						<span className='w-[50px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
						<div className='flex flex-col'>
							<p className='about-p'>
								We're here to help you achieve your goals.
							</p>
						</div>
					</div>
					<div className='mb-[3rem] flex items-center md:space-x-10'>
						<span className='w-[50px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
						<div className='flex flex-col'>
							<p className='about-p'>
								I also like to contribute on OpenSource projects and create
								tools for Ubuntu users.
							</p>
							<p className='mt-[1rem] flex items-center'>
								<FaUbuntu className='text-[50px] text-orange-500' />{" "}
								<span className='ml-[0.5rem] text-white text-[30px] '>
									Ubuntu
								</span>
							</p>
						</div>
					</div>
					<a href='/files/RSCV.pdf' target='_blank'>
						<button className='px-[2rem] bg-yellow-400 hover:bg-[#55e6a5] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase text-black flex items-center space-x-2 rounded-md'>
							<p>Download Resume</p>
							<ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
						</button>
					</a>
				</div>
				<div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
					<Image
						src='/images/Sudeepta1.png'
						alt='user'
						layout='fill'
						objectFit='contain'
						className='relative z-[11] w-[100%] h-[100%] object-contain  '
					/>
					{/* <div className='w-[100%] h-[100%] absolute z-[10] bg-yellow-400 top-[-2rem] right-[-2rem]'></div> */}
				</div>
			</div>
			<div className='github-contribution'>
				<GitHubContribution />
			</div>
			<div className='github-contribution-mobile'>
				<GitHubContribution />
			</div>
		</div>
	);
};

export default About;
