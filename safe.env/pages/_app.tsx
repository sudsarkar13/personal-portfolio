/* eslint-disable @next/next/no-script-component-in-head */
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import * as gtag from "@/safe.env/lib/gtag"; // Make sure this path is correct based on your project structure
import { GoogleTagManager } from "@next/third-parties/google";

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-0YKKJ9K54P'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
					}}
				/>
				<Script id='google-analytics'>
					{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}');
          `}
				</Script>
			</Head>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<GoogleTagManager gtmId={"GTM-P9WK37ZK"} />
			<Analytics />
			<SpeedInsights />
			<Component {...pageProps} />
		</>
	);
};

export default App;
