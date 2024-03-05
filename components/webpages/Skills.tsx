import React from "react";
import { SkillsItem, SkillsLanguage } from "./CodeOptimiser/skills";
// Add additional imports for each skill's icon
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
	return (
		<div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] '>
			<h1 className='heading'>
				Education & <span className='text-yellow-400 '>Skills</span>
			</h1>
			<div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
				<div>
					<SkillsItem
						title='Web Developer'
						year='2021 - Present'
						Description='Web developers are responsible for designing, building, and maintaining websites and web applications. They use languages such as HTML, CSS, and JavaScript to create the front-end of a website, and may also work with back-end technologies such as databases, servers, and APIs. Web developers often work closely with designers and other team members to ensure the functionality and user experience of the websites they create.'
					/>
					<SkillsItem
						title='Frontend Developer'
						year='2022 - Present'
						Description='Frontend developers specialize in building the user interface and user experience of websites and web applications. They use languages such as HTML, CSS, and JavaScript to create interactive and visually appealing interfaces. Frontend developers also work with frameworks and libraries such as React, Vue, or Angular to streamline the development process and create dynamic web applications. They often collaborate closely with designers and backend developers to ensure a seamless user experience.'
					/>
					<SkillsLanguage
						icon1={<SiHtml5 />}
						icon2={<SiCss3 />}
						icon3={<SiJavascript />}
						skill1='HTML'
						skill2='CSS'
						skill3='Javascript'
						level1='w-[91%]'
						level2='w-[88%]'
						level3='w-[80%]'
					/>
				</div>
				<div>
					<SkillsItem
						title='React Developer'
						year='2022 - 2023'
						Description='React is a popular JavaScript library for building interactive and dynamic user interfaces. React developers use components to build reusable UI elements and leverage the virtual DOM for efficient rendering of UI updates. They also work with state management libraries like Redux or context API to manage application state. React developers often work closely with backend developers to integrate front-end interfaces with server-side APIs.'
					/>
					<SkillsItem
						title='Next Js Developer'
						year='2023 - 2024'
						Description='Next.js is a popular React framework that provides server-side rendering, static site generation, and other features to enhance the performance and SEO of web applications. Next.js developers use its routing system, API routes, and data fetching methods to create fast and efficient web applications. They often work with a wide range of technologies including React, Node.js, and various databases to build full-stack applications.'
					/>
					<SkillsLanguage
						icon4={<SiReact />}
						icon5={<SiNextdotjs />}
						icon6={<SiTypescript />}
						skill1='React Js'
						skill2='Next Js'
						skill3='Typescript'
						level1='w-[81%]'
						level2='w-[78%]'
						level3='w-[60%]'
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
