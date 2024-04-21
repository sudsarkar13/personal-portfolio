import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Adsense from "@/components/Google/Adsense";
import Head from "next/head";

export const GTM_ID: string = process.env.NEXT_PUBLIC_GTM_ID || "default-value";
export const GA_ID: string = process.env.NEXT_PUBLIC_GA_ID || "default-value";
export const GAD_ID: string = process.env.NEXT_PUBLIC_GADS_ID || "default-value";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
		<Head>
			<Adsense pubId={GAD_ID} />
		</Head>
			<Analytics />
			<SpeedInsights />
			<GoogleTagManager gtmId={GTM_ID} />
			<GoogleAnalytics gaId={GA_ID} />
			<Adsense pubId={GAD_ID} />
			<Component {...pageProps} />
		</>
	);
}
