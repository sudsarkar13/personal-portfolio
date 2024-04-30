import React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "amp-ad": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            > & {
                width: string;
                height: string;
                type: string;
                "data-ad-client": string;
                "data-ad-slot": string;
                "data-auto-format": string;
                "data-full-width": string;
            };
        }
    }
}