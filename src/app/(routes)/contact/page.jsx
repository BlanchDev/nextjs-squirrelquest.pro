import ContactForm from "./components/ContactForm";
import "./contact.css";

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Contact Us | SquirrelQuest",
  description:
    "Get in touch with SquirrelQuest for inquiries, support, or feedback. We are here to assist you with any questions or concerns.",

  // Open Graph / Facebook
  openGraph: {
    title: "Contact Us | SquirrelQuest",
    description:
      "Reach out to SquirrelQuest for any inquiries or support. We are committed to providing excellent customer service.",
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
    url: "https://squirrelquest.pro/contact",
    siteName: "SquirrelQuest",
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "Contact Us | SquirrelQuest",
    description:
      "Connect with SquirrelQuest for any questions or support. We are here to help.",
    images: ["https://squirrelquest.pro/images/logo.webp"],
    creator: "@squirrelquest",
  },

  alternates: {
    canonical: "https://squirrelquest.pro/contact",
  },

  // Additional metadata
  keywords: [
    "contact",
    "support",
    "inquiries",
    "customer service",
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

function Contact() {
  return (
    <>
      {" "}
      <div className='contact-page column aic'>
        <div className='contact-container column'>
          <div className='contact-content column'>
            <div className='content column gap20'>
              <h1>Contact SquirrelQuest</h1>
              <p>
                We would love to hear from you. Whether you have a question
                about our services, pricing, or anything else, our team is ready
                to answer all your questions.
                <br /> Please fill out the form below or use the contact button
                to reach us directly. <br /> or Call us at{" "}
                <span style={{ fontWeight: "bold" }}>1-(587)-229-9345</span>
              </p>
            </div>
            <div className='content column gap20'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce}
      />
    </>
  );
}

export default Contact;
