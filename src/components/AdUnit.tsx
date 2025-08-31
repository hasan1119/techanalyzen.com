"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdUnitProps {
  type?: "auto" | "in-feed";
  slotId: string; // Your AdSense ad slot ID
  className?: string;
  format?: string;
  responsive?: boolean;
}

export default function AdUnit({
  type = "auto",
  slotId,
  className,
  format = "auto",
  responsive = true,
}: AdUnitProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred in AdUnit.");
      }
    }
  }, []);

  return (
    <>
      {type === "in-feed" ? (
        <ins
          className='adsbygoogle'
          style={{ display: "block" }}
          data-ad-format='fluid'
          data-ad-layout-key='-ef+6k-30-ac+ty'
          data-ad-client='ca-pub-5811365802634379'
          data-ad-slot='1286702831'
        />
      ) : (
        <ins
          className={`adsbygoogle ${className || ""}`}
          style={{ display: "block", width: "100%" }}
          data-ad-client='ca-pub-5811365802634379'
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive={responsive.toString()}
        />
      )}
    </>
  );
}
