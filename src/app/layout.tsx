import type { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Home | Motion Verse AI",
  description: "Transform Your Vision into Motion, Where Creativity Meets AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <head>
        <link rel="stylesheet" href="/front/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/front/css/style.css" />
        <link rel="stylesheet" href="/front/css/responsive.css" />
        <link rel="stylesheet" href="/front/css/animate.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script src="/front/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
