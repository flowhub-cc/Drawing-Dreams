import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Playfair_Display,
  Roboto,
  Source_Sans_3,
} from "next/font/google";
import "../../globals.css";

// Secondary font: Source Sans 3 (professional, readable)
const inter = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Secondary font: Source Sans 3 (professional, readable)
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Secondary font: Source Sans 3 (professional, readable)
const playfair = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Drawing Dreams Art Institute | Live Landscape Drawing Workshop",
  description:
    "Join our live art workshop and learn landscape drawing step-by-step. Perfect for beginners. Only ₹30 per person. Limited seats available!",
  keywords: [
    "art workshop",
    "landscape drawing",
    "drawing classes",
    "online art workshop",
    "beginner art",
    "art for kids",
    "drawing dreams",
  ],
  authors: [{ name: "Drawing Dreams Art Institute" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drawingdreams.in",
    title: "Drawing Dreams Art Institute | Live Landscape Drawing Workshop",
    description:
      "Learn professional drawing techniques in just 90 minutes. Perfect for beginners!",
    siteName: "Drawing Dreams",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.jpeg' type='image/jpeg' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-CK357Q7VME'
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CK357Q7VME');`}
        </script>
        <script>
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '735925022161748');
fbq('track', 'PageView');
  `}
        </script>
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: "none" }}
            src='https://www.facebook.com/tr?id=735925022161748&ev=PageView&noscript=1'
          />
        </noscript>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body
        className={`${inter.variable} ${sourceSans.variable} ${playfair.variable} font-sans antialiased bg-gradient-to-b from-orange-50 to-white text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
