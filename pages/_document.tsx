import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const GTM_ID: string = process.env.NEXT_PUBLIC_GTM_ID || "default-value";
export const GA_ID: string = process.env.NEXT_PUBLIC_GA_ID || "default-value";

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Main />
				<GoogleTagManager gtmId={GTM_ID} />
				<GoogleAnalytics gaId={GA_ID} />
				<NextScript />
			</body>
		</Html>
	);
}
