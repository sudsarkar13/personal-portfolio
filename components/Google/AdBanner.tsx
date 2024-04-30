"use client";

import React, { useEffect } from "react";

type AdBannerTypes = {
	dataAdSlot: string;
	dataAdFormat: string;
	dataFullWidthResponsive: boolean;
};

export const GAD_ID: string =
	process.env.NEXT_PUBLIC_GADS_ID || "default-value";

	export const AdBanner = ({
		dataAdSlot,
		dataAdFormat,
		dataFullWidthResponsive,
	}: AdBannerTypes) => {
		useEffect(() => {
			try {
				((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
			} catch (error: any) {
				console.log(error.message);
			}
		}, []);

	return (

		<div>
			<ins
				className='adsbygoogle'
				style={{ display: "block" }}
				data-ad-client={GAD_ID}
				data-ad-slot={dataAdSlot}
				data-ad-format={dataAdFormat}
				data-full-width-responsive={dataFullWidthResponsive.toString()}
			></ins>
		</div>
	);
};

export default AdBanner;
