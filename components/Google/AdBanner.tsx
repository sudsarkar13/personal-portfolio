import React from "react";

type AdBannerTypes = {
	dataAdSlot: string;
	dataAdFormat: string;
	dataFullWidthResponsive: boolean;
};

export const GAD_ID: string =
	process.env.NEXT_PUBLIC_GADS_ID || "default-value";

const AdBanner = ({
	dataAdSlot,
	dataAdFormat,
	dataFullWidthResponsive,
}: AdBannerTypes) => {
	return (
		<div>
			<ins
				className='adsbygoogle'
				style={{ display: "block" }}
				data-ad-client={GAD_ID}
        data-ad-slot={ dataAdSlot }
        data-ad-format={ dataAdFormat }
        data-full-width-responsive={ dataFullWidthResponsive.toString() }
			></ins>
		</div>
	);
};

export default AdBanner;
