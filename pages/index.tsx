/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import Head from "next/head";
import About from "@/components/webpages/About";
import Services from "@/components/webpages/Services";
import Skills from "@/components/webpages/Skills";
import Projects from "@/components/webpages/Projects";
import Testimonial from "@/components/webpages/Testimonial";
import Blog from '../components/webpages/Blog';
import Contact from "@/components/webpages/Contact";

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
					{/* <Projects /> */}
					{/* Reviews/Testimonials */}
					{/* <Testimonial /> */}
					{/* Blog */}
					{/* <Blog /> */}
					{/* Contact */}
					{/* <Contact /> */}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
