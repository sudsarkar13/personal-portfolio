import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Project2 = () => {
	return (
		<div>
			<Link
				href='https://github.com/sudsarkar13/Ultimate-Ubuntu-Setup-for-Web-Developers'
				target='_blank'
			>
				<div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
					<Image
						src='/images/p2.png'
						alt='...'
						layout='fill'
						className='object-contain'
					/>
				</div>
			</Link>
		</div>
	);
};

export default Project2;
