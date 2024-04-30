"use client";

// import React, { useEffect } from "react";

// type AdBannerTypes = {
// 	dataAdSlot: string;
// 	dataAdFormat: string;
// 	dataFullWidthResponsive: boolean;
// };

// export const GAD_ID: string =
// 	process.env.NEXT_PUBLIC_GADS_ID || "default-value";

// 	export const AdBanner = ({
// 		dataAdSlot,
// 		dataAdFormat,
// 		dataFullWidthResponsive,
// 	}: AdBannerTypes) => {
// 		useEffect(() => {
// 			try {
// 				((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
// 			} catch (error: any) {
// 				console.log(error.message);
// 			}
// 		}, []);

// 	return (

// 		<div>
// 			<ins
// 				className='adsbygoogle'
// 				style={{ display: "block" }}
// 				data-ad-client={GAD_ID}
// 				data-ad-slot={dataAdSlot}
// 				data-ad-format={dataAdFormat}
// 				data-full-width-responsive={dataFullWidthResponsive.toString()}
// 			></ins>
// 		</div>
// 	);
// };

import React, { useEffect } from "react";

export const GAD_ID: string =
	process.env.NEXT_PUBLIC_GADS_ID || "default-value";

type AdBannerTypes = {
	adCode: string;
};

const AdBanner = ({ adCode }: AdBannerTypes) => {
	useEffect(() => {
		// Load Google Ads script
		const script = document.createElement("script");
		script.src =
			"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
		script.async = true;
		document.body.appendChild(script);

		// Initialize ads
		if (window.adsbygoogle && process.env.NODE_ENV === "production") {
			window.adsbygoogle.push({});
		}
	}, []);

	return (
		<div className='ad-wrapper'>
			<ins
				className='adsbygoogle'
				style={{ display: "block" }}
				data-ad-client='YOUR_AD_CLIENT'
				data-ad-slot={adCode}
				data-ad-format='auto'
			></ins>
		</div>
	);
};

export default AdBanner;
