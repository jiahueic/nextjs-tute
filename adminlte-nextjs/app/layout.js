import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AdminLTE Dashboard",
  description: "AdminLTE dashboard in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
        />
        <link rel="stylesheet" href="/dist/css/adminlte.min.css" />
      </head>
      <body>
        {children}
        {/* Scripts */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />

        {/* Load Chart.js before Dashboard script */}
        <Script
          src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"
          strategy="beforeInteractive"
        />

        {/* Load AdminLTE and Dashboard JS after the page is interactive */}
        <Script src="dist/js/adminlte.js?v=3.2.0" strategy="afterInteractive" />
        <Script src="/dist/js/demo.js" strategy="lazyOnload" />
        <Script src="/dist/js/dashboard3.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
