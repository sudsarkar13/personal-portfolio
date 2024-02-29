import React from "react";
import TestimonialSlider from "./CodeOptimiser/testimonial/TestimonialSlider";

const Testimonial = () => {
	return (
		<div className='bg-[#050a11] pt-[4rem] md:pt-[8rem]'>
			<h1 className='heading'>
				Client <span className='text-yellow-400'>Review</span>
			</h1>
			<div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
				{/* Testimonial Slider */}
				<TestimonialSlider />
			</div>
		</div>
	);
};

export default Testimonial;
