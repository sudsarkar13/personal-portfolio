import React from "react";

interface Props {
	icon1: JSX.Element;
	icon2: JSX.Element;
	icon3: JSX.Element;
	icon4: JSX.Element;
	icon5: JSX.Element;
	icon6: JSX.Element;
	skill1: string;
	skill2: string;
	skill3: string;
	level1: string;
	level2: string;
	level3: string;
}

const SkillsLanguage = ({
	icon1,
	icon2,
	icon3,
	icon4,
	icon5,
	icon6,
	skill1,
	skill2,
	skill3,
	level1,
	level2,
	level3,
}: Props) => {
	return (
		<div>
			<div className='relative mb-[3rem]'>
				<h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
					{skill1}
				</h1>
				<span
					className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
				></span>
			</div>
			<div className='relative mb-[3rem]'>
				<h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
					{skill2}
				</h1>
				<span
					className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
				></span>
			</div>
			<div className='relative mb-[3rem]'>
				<h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
					{skill3}
				</h1>
				<span
					className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
				></span>
			</div>
			<div className='relative mb-[3rem]'>
				<div className='skillsIcon'>
					<div className="flex flex-col text-orange-600">{icon1}</div>
					<div className="flex flex-col text-blue-800">{icon4}</div>
					<div className="flex flex-col text-blue-600">{icon2}</div>
					<div className="flex flex-col text-white">{icon5}</div>
					<div className="flex flex-col text-yellow-400">{icon3}</div>
					<div className="flex flex-col text-blue-500">{icon6}</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsLanguage;
