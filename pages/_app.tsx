import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const GTM_ID: string = process.env.NEXT_PUBLIC_GTM_ID || "default-value";
export const GA_ID: string = process.env.NEXT_PUBLIC_GA_ID || "default-value";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Analytics />
			<SpeedInsights />
			<GoogleTagManager gtmId={GTM_ID} />
			<GoogleAnalytics gaId={GA_ID} />
			<Component {...pageProps} />
		</>
	);
}
