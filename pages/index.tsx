/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Head from "next/head";
import {
	Hero,
	About,
	Services,
	Skills,
	Projects,
	Testimonial,
	Blog,
	Contact,
} from "@/components/webpages";
import { Nav, MobileNav, Footer } from "@/components";

const HomePage = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	return (
		<div className='overflow-x-hidden'>
			<Head>
				<title>Sudeepta's Portfolio</title>
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
					{/* Services */}
					{/* <Services /> */}
					{/* Skills */}
					{/* <Skills /> */}
					{/* Projects */}
					<Projects />
					{/* Reviews/Testimonials */}
					{/* <Testimonial /> */}
					{/* Blog */}
					{/* <Blog /> */}
					{/* Contact */}
					{/* <Contact /> */}
					{/* Footer */}
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
