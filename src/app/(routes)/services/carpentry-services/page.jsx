import ContactButtons from "../components/ContactButtons/ContactButtons";

export const metadata = {
  title: "Carpentry Services | SquirrelQuest",
  description:
    "Carpentry services in Calgary, Alberta. Specializing in residential framing, commercial framing, and back framing. Quality craftsmanship and reliable service.",

  // Open Graph / Facebook
  openGraph: {
    title: "Carpentry Services | SquirrelQuest",
    description:
      "Professional carpentry services in Calgary. Quality craftsmanship and reliable service.",
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
    url: "https://squirrelquest.pro/services/carpentry-services",
    siteName: "SquirrelQuest",
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "Carpentry Services | SquirrelQuest",
    description:
      "Professional carpentry services in Calgary. Quality craftsmanship and reliable service.",
    images: ["https://squirrelquest.pro/images/logo.webp"],
    creator: "@squirrelquest",
  },

  alternates: {
    canonical: "https://squirrelquest.pro/services/carpentry-services",
  },

  // Additional metadata
  keywords: [
    "carpentry services",
    "calgary construction",
    "residential framing",
    "commercial framing",
    "back framing",
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

function CarpentryServices() {
  return (
    <div className='services-content carpentry-services column'>
      <div className='content column gap20'>
        <h1>Carpentry Services</h1>
        <p>
          Welcome to SquirrelQuest&apos;s comprehensive carpentry solutions. Our
          skilled team brings together years of expertise and passion for
          woodworking to deliver exceptional results. From residential projects
          to commercial developments, we take pride in our meticulous attention
          to detail and commitment to superior craftsmanship. Let us transform
          your construction vision into reality with our professional carpentry
          expertise.
        </p>

        <ContactButtons />
      </div>

      <div className='content column gap10'>
        <h2>Professional Construction Services</h2>
        <h2>Residential Framing</h2>
        <h2>Commercial Framing</h2>
        <h2>Back Framing</h2>
        <h2>Structural Erections</h2>
        <h2>Specialty Carpentry</h2>
        <h2>And More!</h2>
        <p>
          At SquirrelQuest, we specialize in delivering exceptional carpentry
          services tailored to your needs. Our experienced team is committed to
          excellence, ensuring each project meets the highest standards of
          craftsmanship and quality.
        </p>
      </div>
    </div>
  );
}

export default CarpentryServices;
