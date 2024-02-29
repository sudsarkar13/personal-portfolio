import React from "react";
import Image from "next/legacy/image";
import {
	ChatBubbleLeftRightIcon,
	UserCircleIcon,
} from "@heroicons/react/20/solid";

const Blog2 = () => {
	return (
		<div>
			<div>
				<div className='w-[100%] relative h-[400px] '>
					<Image
						src='/images/blog2.jpg'
						alt='blog'
						layout='fill'
						className='object-cover'
					/>
				</div>
				<div className='w-[90%] text-center mx-auto bg-[#09121f] relative p-[2rem] mt-[-1rem] border-4 border-black rounded-[10px]'>
					<div className='w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto border-4 border-black rounded-[10px]'>
						December 10, 2021
					</div>
					<div className='flex flex-col md:flex-row items-center justify-center mt-[1rem] space-x-4'>
						<div className='flex items-center space-x-3'>
							<UserCircleIcon className='w-[1.5rem] h-[1.5rem] mx-auto text-yellow-400' />
							<p className='text-white'>By Sudeepta</p>
						</div>
						<div className='flex items-center space-x-3'>
							<ChatBubbleLeftRightIcon className='w-[1.5rem] h-[1.5rem] mx-auto text-yellow-400 ' />
							<p className='text-white'>Comments(2)</p>
						</div>
					</div>
					<p className='text-white mt-[1rem] text-[18px] font-semibold'>
						Next Js FullStack Development
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog2;
