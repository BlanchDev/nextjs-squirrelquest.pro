import ContactButtons from "../components/ContactButtons/ContactButtons";

export const metadata = {
  title: "Structural Erections | SquirrelQuest",
  description:
    "Structural erections services in Calgary, Alberta. Specializing in residential and commercial structural erections. Quality craftsmanship and reliable service.",

  // Open Graph / Facebook
  openGraph: {
    title: "Structural Erections | SquirrelQuest",
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
    url: "https://squirrelquest.pro/services/structural-erections",
    siteName: "SquirrelQuest",
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "Structural Erections | SquirrelQuest",
    description:
      "Professional structural erections services in Calgary. Quality craftsmanship and reliable service.",
    images: ["https://squirrelquest.pro/images/logo.webp"],
    creator: "@squirrelquest",
  },

  alternates: {
    canonical: "https://squirrelquest.pro/services/structural-erections",
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

function StructuralErections() {
  return (
    <div className='services-content structural-erections column'>
      <div className='content column gap20'>
        <h1>Structural Erections</h1>
        <p>
          Welcome to SquirrelQuest&apos;s structural erections division, where
          precision meets excellence in construction. Our expert team brings
          unparalleled skill and dedication to every structural project, whether
          residential or commercial.
          <br />
          <br />
          We take pride in our comprehensive approach to structural erections,
          combining cutting-edge techniques with time-tested methodologies. Each
          project is executed with meticulous attention to detail, ensuring
          structural integrity and longevity.
          <br />
          <br />
          Based in Calgary and serving surrounding Alberta communities, our deep
          familiarity with regional construction requirements and environmental
          considerations allows us to deliver exceptional results that stand the
          test of time. Trust us to bring your structural vision to life with
          unwavering commitment to quality and safety.
        </p>
        <ContactButtons />
      </div>

      <div className='content column gap10'>
        <h2>Residential Framing</h2>
        <p>
          Seeking a home that is built right, we here at SquirrelQuest enjoy
          crafting these homes for you. So if you are in the market to have your
          structure erected by the Pros, you will find us to your satisfaction.
          We will work with your Builders to meet Builder&apos;s Code of your
          local province.
        </p>
      </div>

      <div className='content column gap10'>
        <h2>Commercial Framing</h2>
        <p>
          Building even bigger? No problem. We here at SquirrelQuest are highly
          capable of building even the most complex of structures. Where others
          may falter you will find us grinding away to produce your building
          from prefabrication to stick framed. Every piece is important to us
          here at SquirrelQuest, we will make sure to do our best to erect these
          structures swiftly.
        </p>
      </div>

      <div className='content column gap10'>
        <h2>And More!</h2>
        <p>
          From complex industrial buildings to custom residential projects, our
          dedicated team at SquirrelQuest brings unmatched expertise to every
          structural erection challenge. We pride ourselves on precise
          execution, innovative solutions, and a proven track record of
          successful projects across Calgary and beyond.
        </p>
      </div>
    </div>
  );
}

export default StructuralErections;
