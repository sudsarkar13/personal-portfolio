import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface Props {
	openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
	return (
		<div className='w-[100%] fixed z-[10000] top-0 h-[10vh] bg-[#141C27] shadow-md'>
			<div className='flex items-center justify-between w-[92%] mx-auto h-[100%]'>
				<h1 className='flex-[0.8] cursor-pointer text-[30px] text-white font-bold'>
					<Link href={"/"}>
						Port<span className='text-yellow-400'>folio.</span>
					</Link>
				</h1>
				<div className='nav-link uppercase'>
					<Link href={"/"}>Home</Link>
				</div>
				<div className='nav-link uppercase'>
					<Link href={"#about"}>About</Link>
				</div>
				<div className='nav-link uppercase'>
					<Link href='#projects'>Projects</Link>
				</div>
				<div className='nav-link uppercase'>
					{/* Currently disabled to enable, put "/" before "Service" in (href={"#Service"}) */}
					{/* <Link href={"/Service"} as={"Services"}>
						Services
					</Link> */}
					Services
				</div>
				<div className='nav-link uppercase'>
					<Link href={"/blog"} as={"Blog"}>
						Blog
					</Link>
				</div>
				<div className='nav-link uppercase'>Contact</div>
				<div onClick={openNav}>
					<Bars3Icon className='w-[2rem] md:hidden h-[2rem]w cursor-pointer text-white font-extrabold' />
				</div>
			</div>
		</div>
	);
};

export default Nav;
