"use client";

import { trackOutboundClick, trackResumeDownload } from "@/lib/analytics";

export function OutboundLink({
  href,
  label,
  children,
  className,
  isResume,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  isResume?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        trackOutboundClick(label, href);
        if (isResume) trackResumeDownload();
      }}
    >
      {children}
    </a>
  );
}
