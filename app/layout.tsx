import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Burhan Siraj | Applied AI/ML & Data Engineer",
  description:
    "Portfolio of Burhan Siraj. Applied AI/ML Engineer, Data Engineer, Agentic AI specialist. Pursuing BSCS at Iqra University.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Data Engineer",
    "LangGraph",
    "CrewAI",
    "Python",
    "Next.js",
  ],
  openGraph: {
    title: "Burhan Siraj | Applied AI/ML & Data Engineer",
    description:
      "Portfolio of Burhan Siraj. Applied AI/ML Engineer, Data Engineer, Agentic AI specialist.",
    url: "https://burhansiraj.me",
    siteName: "Burhan Siraj Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-primary">
        {children}
      </body>
    </html>
  );
}
