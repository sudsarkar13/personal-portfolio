import React from "react";
import SkillsItem from "./CodeOptimiser/skills/SkillsItem";
import SkillsLanguage from "./CodeOptimiser/skills/SkillsLanguage";
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
					<SkillsItem title='Web Developer' year='2021 - Present' />
					<SkillsItem title='Frontend Developer' year='2022 - Present' />
					{/* <SkillsLanguage skill-1="HTML" skill-2="CSS" skill-3="Javascript" skill-4="Typescript" skill-5="React" skill-6="NextJS" skill-7="Amazon Web Services" skill-8="UI/UX" /> */}
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
					<SkillsItem title='React Developer' year='2022 - 2023' />
					<SkillsItem title='Next Js Developer' year='2023 - 2024' />
					<SkillsLanguage
						icon1={<SiReact />}
						icon2={<SiNextdotjs />}
						icon3={<SiTypescript />}
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
