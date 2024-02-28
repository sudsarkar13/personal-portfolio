import React from "react";
import Image from "next/legacy/image";

const Project1 = () => {
	return (
		<div>
			<div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
				<Image
					src='/images/p1.jpg'
					alt='p1'
					layout='fill'
					className='object-contain'
				/>
			</div>
		</div>
	);
};

export default Project1;
