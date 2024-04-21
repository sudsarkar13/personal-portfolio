import React from "react";
import Script from "next/script";

type AdsenseTypes = {
	pubId: string;
};

const Adsense = ({ pubId }: AdsenseTypes) => {
	return (
		<div>
			<Script
				async
				src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`}
				crossOrigin='anonymous'
				strategy='afterInteractive'
			/>
		</div>
	);
};

export default Adsense;
