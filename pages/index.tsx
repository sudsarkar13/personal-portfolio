/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import Head from "next/head";
import About from "@/components/webpages/About";

const HomePage = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	return (
		<div className='overflow-x-hidden'>
			<Head>
				<title>Sudeepta's Portfolio</title>
				<link
					rel='icon'
					href='/public/favicon/favicon.ico'
					type='image/x-icon'
				/>
			</Head>
			<div>
				{/* Navbar */}
				<MobileNav nav={nav} closeNav={closeNav} />
				<Nav openNav={openNav} />
				{/* Hero Section */}
				<Hero />
				<div className='relative z-[30]'>
					{/* About */}
					<About />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
