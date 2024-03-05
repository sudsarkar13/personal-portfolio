import React, { useState } from "react";
import Head from "next/head";
import { Nav, MobileNav, Footer } from "@/components";
import { ServiceSection, Skills, Testimonial } from "@/components/webpages";

const Services = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	return (
		<div className='overflow-x-hidden'>
			<Head>
				<title>Services</title>
			</Head>
			<MobileNav nav={nav} closeNav={closeNav} />
			<Nav openNav={openNav} />
			<ServiceSection />
			<Skills />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default Services;
