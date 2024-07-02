"use client";
import ProgressBarProvider from "@/providers/ProgressBarProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBarProvider />
      {children}
    </>
  );
};

export default Provider;
