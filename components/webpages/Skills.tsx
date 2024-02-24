import React from "react";
import SkillsItem from "./CodeOptimiser/skills/SkillsItem";
import SkillsLanguage from "./CodeOptimiser/skills/SkillsLanguage";

const Skills = () => {
	return (
		<div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] '>
			<h1 className='heading'>
				Education & <span className='text-yellow-400 '>Skills</span>
			</h1>
			<div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
				<div>
					{/* <SkillsItem title='Web Developer' year='2022 - 2023' /> */}
					{/* <SkillsItem title='React Developer' year='2023 - 2024' /> */}
					{/* <SkillsLanguage skill-1="HTML" skill-2="CSS" skill-3="Javascript" skill-4="Typescript" skill-5="React" skill-6="NextJS" skill-7="Amazon Web Services" skill-8="UI/UX" /> */}
					{/* <SkillsLanguage
						skill1='HTML'
						skill2='CSS'
						skill3='Javascript'
						level1='91%'
						level2='88%'
						level3='80%'
					/> */}
				</div>
				<div>
					{/* <SkillsItem title='Next Js Developer' year='2024' /> */}
					<SkillsItem />
					<SkillsLanguage />
				</div>
			</div>
		</div>
	);
};

export default Skills;
