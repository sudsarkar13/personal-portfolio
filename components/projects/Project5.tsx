import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Project5 = () => {
	return (
		<div>
			<div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
				<Image
					src='/images/p5.jpg'
					alt='...'
					layout='fill'
					className='object-contain'
				/>
			</div>
		</div>
	);
};

export default Project5;
