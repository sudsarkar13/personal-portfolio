/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Quote = () => {
	return (
		<div>
			<FaQuoteLeft className='quote-icon-l' />
			<p className='quote'>
				Bloom where you're planted, roots dig deep, yet reach for the sun.
			</p>
			<FaQuoteRight className='quote-icon-r' />
			<cite className='quote-author'>- Sudeepta Sarkar</cite>
		</div>
	);
};

export default Quote;
