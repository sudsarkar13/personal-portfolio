import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Project1 = () => {
	return (
		<div>
			<Link href='https://github.com/sudsarkar13/Lenovo-dark-grub-4k-ubuntu' target="_blank">
				<div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
					<Image
						src='https://raw.githubusercontent.com/sudsarkar13/Lenovo-dark-grub-4k-ubuntu/main/images/desg-1.png'
						alt='p1'
						layout='fill'
						className='object-contain'
					/>
				</div>
			</Link>
		</div>
	);
};

export default Project1;
