import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubContribution = () => {
	const currYear = new Date().getFullYear();
	return (
		<div>
			<h1 className='heading-small'>
				GitHub <span className='text-yellow-400'>Contributions</span>
			</h1>
			<GitHubCalendar
				username={"sudsarkar13"}
				year={currYear}
				colorScheme={"dark"}
			/>
			{/* <GitHubCalendar username={"sudsarkar13"} colorScheme={"dark"} /> */}
		</div>
	);
};

export default GitHubContribution;
