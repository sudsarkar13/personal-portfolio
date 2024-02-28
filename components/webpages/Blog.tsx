import React from "react";
import Image from "next/legacy/image";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const Blog = () => {
	return (
		<div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#091019]'>
			<h1 className='heading'>
				My
				<span className='text-yellow-400'> Blog</span>
			</h1>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
				<div>
					<div className='w-[100%] relative h-[400px] '>
						<Image
							src='/images/blog1.jpg'
							alt='blog'
							layout='fill'
							className='object-cover'
						/>
					</div>
					<div className='w-[90%] text-center mx-auto bg-[#09121f] relative p-[2rem] mt-[-1rem] border-4 border-black rounded-[10px]'>
						<div className='w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto border-4 border-black rounded-[10px]'>
							December 10, 2021
						</div>
						<div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
							<div className="flex items-center space-x- ">
								<UserCircleIcon className="w-[2rem] h-[2rem] text-yellow-400" />
							</div>
						</div>
					</div>
				</div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Blog;
