import ContactButtons from "../components/ContactButtons/ContactButtons";

export const metadata = {
  title: "Specialty Carpentry | SquirrelQuest",
  description:
    "Specialty carpentry services in Calgary, Alberta. Specializing in custom woodworking, finish carpentry, and architectural details. Quality craftsmanship and reliable service.",

  // Open Graph / Facebook
  openGraph: {
    title: "Specialty Carpentry | SquirrelQuest",
    description:
      "Professional specialty carpentry services in Calgary. Quality craftsmanship and reliable service.",
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
    url: "https://squirrelquest.pro/services/specialty-carpentry",
    siteName: "SquirrelQuest",
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "Specialty Carpentry | SquirrelQuest",
    description:
      "Professional specialty carpentry services in Calgary. Quality craftsmanship and reliable service.",
    images: ["https://squirrelquest.pro/images/logo.webp"],
    creator: "@squirrelquest",
  },

  alternates: {
    canonical: "https://squirrelquest.pro/services/specialty-carpentry",
  },

  // Additional metadata
  keywords: [
    "specialty carpentry",
    "custom woodworking",
    "finish carpentry",
    "architectural details",
    "calgary construction",
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

function SpecialtyCarpentry() {
  return (
    <div className='services-content specialty-carpentry column'>
      <div className='content column gap20'>
        <h1>Specialty Carpentry</h1>
        <p>
          Welcome to SquirrelQuest&apos;s specialty carpentry division, where
          artistry meets precision in woodworking. Our master craftsmen
          specialize in creating bespoke carpentry solutions that transform
          spaces and capture imaginations.
          <br />
          <br />
          From elegant crown moldings to custom-built entertainment centers, we
          approach each project as a unique opportunity to showcase the beauty
          of fine woodworking. Our expertise spans traditional hand-crafted
          techniques to modern CNC precision, ensuring every detail is executed
          flawlessly.
          <br />
          <br />
          Serving Calgary and the surrounding communities, we&apos;ve built our
          reputation on delivering exceptional specialty carpentry that stands
          apart. Whether it&apos;s intricate millwork, custom cabinetry, or
          architectural accents, we bring creativity and technical excellence to
          every project we undertake.
        </p>
        <ContactButtons />
      </div>

      <div className='content column gap10'>
        <h2>Custom Woodworking</h2>
        <h2>Finish Carpentry</h2>
        <h2>Architectural Details</h2>
        <h2>And More!</h2>
        <p>
          Here at SquirrelQuest, we take pride in transforming ordinary spaces
          into extraordinary showcases through our specialty carpentry services.
          Our skilled artisans blend time-honored woodworking traditions with
          cutting-edge methods to craft custom pieces that perfectly balance
          form and function. Whether it&apos;s intricate moldings, custom
          cabinetry, or architectural features, we bring unparalleled attention
          to detail to every project we undertake.
        </p>
      </div>
    </div>
  );
}

export default SpecialtyCarpentry;
