import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hello world!",
};

export default function ({ children }: { children: React.ReactNode }) {
    return <section>{children}</section>;
}
