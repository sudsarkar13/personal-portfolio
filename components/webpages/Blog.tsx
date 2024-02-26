import React from "react";
import Image from "next/legacy/image";

const Blog = () => {
	return (
		<div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
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
				</div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Blog;
