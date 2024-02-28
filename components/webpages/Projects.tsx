import React from "react";
import Image from "next/legacy/image";
import {
	Project1,
	Project2,
	Project3,
	Project4,
	Project5,
	Project6,
} from "../projects";

const Projects = () => {
	return (
		<div className='bg-[#060c14] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
			<h1 className='heading'>
				Pro<span className='text-yellow-400'>jects</span>
			</h1>
			<div className='w-[80%] pt-[2rem] pb-[6rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] '>
				<div>
					<Project1 />
				</div>
				<div className='hidden'>
					<Project2 />
				</div>
				<div className='hidden'>
					<Project3 />
				</div>
				<div className='hidden'>
					<Project4 />
				</div>
				<div className='hidden'>
					<Project5 />
				</div>
				<div className='hidden'>
					<Project6 />
				</div>
			</div>
		</div>
	);
};

export default Projects;
