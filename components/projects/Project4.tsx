import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Project4 = () => {
	return (
		<Link href={"https://www.dreach.in"} target="_blank">
			<div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
				<Image
					src='/images/p4.png'
					alt='...'
					layout='fill'
					className='object-contain'
				/>
			</div>
		</Link>
	);
};

export default Project4;
