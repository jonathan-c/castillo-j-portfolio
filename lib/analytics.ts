import { track } from "@vercel/analytics";

export function trackOutboundClick(label: string, url: string) {
  track("outbound_click", { label, url });
}

export function trackResumeDownload() {
  track("resume_download");
}
