import ContactButtons from "./components/ContactButtons/ContactButtons";
import "./services.css";

export const metadata = {
  title: "Our Services | SquirrelQuest",
  description:
    "Structural erections services in Calgary, Alberta. Specializing in residential and commercial structural erections. Quality craftsmanship and reliable service.",

  // Open Graph / Facebook
  openGraph: {
    title: "Our Services | SquirrelQuest",
    description:
      "Professional structural erections services in Calgary. Quality craftsmanship and reliable service.",
    images: [
      {
        url: "https://squirrelquest.pro/images/logo.webp", // Default logo
        width: 512,
        height: 512,
        alt: "SquirrelQuest Logo",
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://squirrelquest.pro/services",
    siteName: "SquirrelQuest",
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "Our Services | SquirrelQuest",
    description:
      "Professional structural erections services in Calgary. Quality craftsmanship and reliable service.",
    images: ["https://squirrelquest.pro/images/logo.webp"],
    creator: "@squirrelquest",
  },

  alternates: {
    canonical: "https://squirrelquest.pro/services",
  },

  // Additional metadata
  keywords: [
    "structural erections",
    "calgary construction",
    "commercial construction",
    "residential construction",
    "alberta construction",
    "building services",
    "professional construction",
    "squirrelquest",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

function Services() {
  return (
    <div className='services-content unique-services column'>
      <div className='content column gap20'>
        <h1>SquirrelQuest Services</h1>
        <p>
          Explore our professional services.
          <br /> Carpentry, Structural Erections, Back Framing, and more.
          <br /> Contact for other requests...
        </p>
        <ContactButtons />
      </div>
    </div>
  );
}

export default Services;
