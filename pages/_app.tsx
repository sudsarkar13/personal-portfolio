import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Adsense from "@/components/Google/Adsense";

export const GTM_ID: string = process.env.NEXT_PUBLIC_GTM_ID || "default-value";
export const GA_ID: string = process.env.NEXT_PUBLIC_GA_ID || "default-value";
export const GAD_ID: string =
	process.env.NEXT_PUBLIC_GADS_ID || "default-value";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Analytics />
			<SpeedInsights />
			<Component {...pageProps} />
		</>
	);
}
