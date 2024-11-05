import localFont from "next/font/local";
import "./global.css";
import Header from "./components/Header/Header";
import PrefetchPages from "./components/PrefetchPages";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const itim = localFont({
  src: "./fonts/Itim-Regular.ttf",
  variable: "--font-itim",
  weight: "100 900",
});
const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas-neue",
  weight: "100 900",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  metadataBase: new URL("https://squirrelquest.pro"),
  title:
    "SquirrelQuest: Professional Construction & Carpentry Services in Calgary",
  description:
    "SquirrelQuest offers professional construction and carpentry services in Calgary including structural erections, back framing, and specialty carpentry. Quality craftsmanship and reliable service for residential and commercial projects.",

  icons: {
    icon: "/favicon.webp",
  },

  // Robots meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    url: "https://squirrelquest.pro",
    title:
      "SquirrelQuest: Professional Construction & Carpentry Services in Calgary",
    description:
      "SquirrelQuest offers professional construction and carpentry services in Calgary including structural erections, back framing, and specialty carpentry. Quality craftsmanship and reliable service for residential and commercial projects.",
    images: [
      {
        url: "https://squirrelquest.pro/images/logo.webp",
        width: 512,
        height: 512,
        alt: "SquirrelQuest Logo",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary",
    title:
      "SquirrelQuest: Professional Construction & Carpentry Services in Calgary",
    description:
      "SquirrelQuest offers professional construction and carpentry services in Calgary including structural erections, back framing, and specialty carpentry. Quality craftsmanship and reliable service for residential and commercial projects.",
    images: ["https://squirrelquest.pro/images/logo.webp"],
  },

  keywords:
    "carpentry services calgary, residential framing alberta, commercial framing calgary, back framing specialist, professional services calgary, construction calgary, entertainment calgary, squirrelquest, construction calgary, structural erections calgary, specialty carpentry calgary",
  creator: "blanch.dev",
  author: "blanch.dev",
  generator: "Next.js",
  applicationName: "SquirrelQuest Productions",
  referrer: "origin-when-cross-origin",
  publisher: "SquirrelQuest Productions",
  category: "Construction, Carpentry, Entertainment, Professional Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#141414' />
        <link rel='apple-touch-icon' href='/images/logo.webp' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SquirrelQuest Productions",
              image: "https://squirrelquest.pro/images/logo.webp",
              description:
                "Professional carpentry, structural erections, back framing, and more in Calgary, Alberta",
              url: "https://squirrelquest.pro",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Calgary",
                addressRegion: "Alberta",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "51.0447",
                longitude: "-114.0719",
              },
              telephone: "+15872299345",
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-17:00",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "51.0447",
                  longitude: "-114.0719",
                },
                geoRadius: "50000",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${itim.variable} ${bebasNeue.variable} column aic`}
      >
        <Script
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-BK4YXEE648'
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BK4YXEE648');
            `,
          }}
        />
        <PrefetchPages />
        <Header />
        {children}
      </body>
    </html>
  );
}
