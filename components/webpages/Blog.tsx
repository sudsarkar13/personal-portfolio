import React from "react";
import { Blog1, Blog2, Blog3 } from "../blog";

const Blog = () => {
	return (
		<div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#091019]'>
			<h1 className='heading'>
				My
				<span className='text-yellow-400'> Blog</span>
			</h1>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
				<Blog1 />
				<Blog2 />
				<Blog3 />
			</div>
		</div>
	);
};

export default Blog;
