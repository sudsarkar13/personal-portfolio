import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Adsense from "@/components/Google/Adsense";

export const GTM_ID: string = process.env.NEXT_PUBLIC_GTM_ID || "default-value";
export const GA_ID: string = process.env.NEXT_PUBLIC_GA_ID || "default-value";
export const GAD_ID: string = process.env.NEXT_PUBLIC_GADS_ID || "default-value";

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<Adsense pubId={GAD_ID} />
			</Head>
			<body>
				<Main />
				<NextScript />
				<GoogleTagManager gtmId={GTM_ID} />
				<GoogleAnalytics gaId={GA_ID} />
			</body>
		</Html>
	);
}
