import React, { useState } from "react";
import Head from "next/head";
import { Nav, MobileNav, Footer } from "@/components";
import Blogs from "@/components/webpages/Blogs";

const Blog: React.FC = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	return (
		<main>
			<Head>
				<title>Blogs</title>
			</Head>
			<MobileNav nav={nav} closeNav={closeNav} />
			<Nav openNav={openNav} />
			<div>
				<Blogs />
				<Footer />
			</div>
		</main>
	);
};

export default Blog;
