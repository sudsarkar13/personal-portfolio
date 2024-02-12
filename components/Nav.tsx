import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

interface Props {
	openNav: () => void;
}

const Nav = ({openNav}:Props) => {
	return (
		<div className='w-[100%] sticky z-[10000] top-0 h-[10vh] bg-[#141C27] shadow-md'>
			<div className='flex items-center justify-between w-[92%] mx-auto h-[100%]'>
				<h1 className='flex-[0.8] cursor-pointer text-[30px] text-white font-bold'>
					Port<span className='text-yellow-400'>folio.</span>
				</h1>
				<div className='nav-link uppercase'>Home</div>
				<div className='nav-link uppercase'>About</div>
				<div className='nav-link uppercase'>Services</div>
				<div className='nav-link uppercase'>Projects</div>
				<div className='nav-link uppercase'>Blog</div>
				<div className='nav-link uppercase'>Contact</div>
				<div onClick={openNav}>
					<Bars3Icon className='w-[2rem] md:hidden h-[2rem]w cursor-pointer text-white font-extrabold' />
				</div>
			</div>
		</div>
	);
};

export default Nav;
