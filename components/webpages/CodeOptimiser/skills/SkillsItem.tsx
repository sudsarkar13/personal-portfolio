import React from "react";

interface Props {
	title: string;
	year: string;
	Description: String;
}

const SkillsItem = ({ title, year, Description }: Props) => {
	return (
		<div>
			<div className='skillsItem'>
				<span className='skillsYear'>
					{year}
				</span>
				<h1 className='mt-[2rem] capitalize font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
					{title}
				</h1>
				<p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 text-justify'>
					{Description}
				</p>
			</div>
		</div>
	);
};

export default SkillsItem;
