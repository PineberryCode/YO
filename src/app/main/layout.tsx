import type { Metadata } from "next"
import ClientWrapper from "./client-wrapper"

export const metadata: Metadata = {
  title: "Mindlunny | Intro",
  description: "Portfolio",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ClientWrapper>
          {children}
        </ClientWrapper>
  );
}
