import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelvin's Portfolio",
  description: "Lee Qin Wen (Kelvin) — Software Engineer & Cyber Enthusiast based in Singapore.",
};

// Apply the saved/system theme before first paint to avoid a light→dark flash
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
