import ContactButtons from "../components/ContactButtons/ContactButtons";

export const metadata = {
  title: "Back Framing | SquirrelQuest",
  description:
    "Back framing services in Calgary, Alberta. Specializing in residential and commercial back framing. Quality craftsmanship and reliable service.",

  // Open Graph / Facebook
  openGraph: {
    title: "Back Framing | SquirrelQuest",
    description:
      "Professional back framing services in Calgary. Quality craftsmanship and reliable service.",
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
    url: "https://squirrelquest.pro/services/back-framing",
    siteName: "SquirrelQuest",
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "Back Framing | SquirrelQuest",
    description:
      "Professional back framing services in Calgary. Quality craftsmanship and reliable service.",
    images: ["https://squirrelquest.pro/images/logo.webp"],
    creator: "@squirrelquest",
  },

  alternates: {
    canonical: "https://squirrelquest.pro/services/back-framing",
  },

  // Additional metadata
  keywords: [
    "back framing",
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

function BackFraming() {
  return (
    <div className='services-content back-framing column'>
      <div className='content column gap20'>
        <h1>Back Framing</h1>
        <p>
          Not finished? Missing hold backs? Want to go onto the next project and
          just be done? SquirrelQuest provides services in completing those
          pesky tasks that are too complicated for the average worker. Missing
          Joists, framed wrong, complete disasters. We will service you like
          none other. We seek these problems to enhance our framing
          capabilities, so no task is too complex for us. We are the solution to
          your problems.
        </p>
        <ContactButtons />
      </div>

      <div className='content column gap10'>
        <h2>Back Framing Specialist</h2>
        <h2>Missing Joists</h2>
        <h2>Structural Framing Corrections</h2>
        <h2>Hold Back Completions</h2>
        <h2>Frame Reinforcement</h2>
        <h2>Post-Construction Framing Fixes</h2>
        <h2>And More!</h2>
        <p>
          When it comes to back framing challenges, SquirrelQuest stands out as
          your go-to solution provider. Our skilled craftsmen excel at tackling
          complex framing corrections and reinforcements that others might shy
          away from. We take pride in our ability to transform problematic
          structures into sound, code-compliant frameworks that stand the test
          of time. Whether it&apos;s addressing missing components or completely
          rebuilding compromised sections, we bring precision and expertise to
          every back framing project.
        </p>
      </div>
    </div>
  );
}

export default BackFraming;
