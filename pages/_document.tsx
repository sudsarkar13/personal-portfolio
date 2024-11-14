import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Adsense from "@/components/Google/Adsense";
import Script from "next/script";
import AdBanner from "../components/Google/AdBanner";

export const GTM_ID: string = process.env.NEXT_PUBLIC_GTM_ID || "default-value";
export const GA_ID: string = process.env.NEXT_PUBLIC_GA_ID || "default-value";
export const GAD_ID: string =
	process.env.NEXT_PUBLIC_GADS_ID || "default-value";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<Adsense pubId={GAD_ID} />
				<meta
					name="google-adsense-account"
					content="ca-pub-9301461712290016"></meta>
				<script
					async
					custom-element="amp-ad"
					src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9301461712290016"
					crossOrigin="anonymous"></Script>
			</Head>
			<body>
				<Main />
				<NextScript />
				<GoogleTagManager gtmId={GTM_ID} />
				<GoogleAnalytics gaId={GA_ID} />
				{/* <AdBanner dataAdSlot="1" dataAdFormat="auto" dataFullWidthResponsive={true} /> */}
				<AdBanner adCode={GAD_ID} />
				<amp-ad
					width="100vw"
					height="320"
					type="adsense"
					data-ad-client="ca-pub-9301461712290016"
					data-ad-slot="3782882970"
					data-auto-format="rspv"
					data-full-width="">
					<div style={{ overflow: "auto" }}></div>
				</amp-ad>
			</body>
		</Html>
	);
}
