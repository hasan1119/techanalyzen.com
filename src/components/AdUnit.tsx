"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdUnitProps {
  slotId: string; // Your AdSense ad slot ID
  className?: string;
  style?: React.CSSProperties;
  format?: string;
  responsive?: boolean;
}

export default function AdUnit({
  slotId,
  className,
  style,
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
    <ins
      className={`adsbygoogle ${className || ""}`}
      style={{ display: "block", width: "100%" }}
      data-ad-client='ca-pub-5811365802634379'
      data-ad-slot={slotId}
      data-ad-format={format}
      data-full-width-responsive={responsive.toString()}
    />
  );
}
