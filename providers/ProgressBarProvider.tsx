"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
export default function LoadingBar() {
  return (
    <ProgressBar
      height="4px"
      color="#2dd4bf"
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
}
