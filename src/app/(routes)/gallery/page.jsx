import fs from "fs";
import path from "path";
import GalleryGrid from "./components/GalleryGrid";

import "./gallery.css";

export const metadata = {
  title: "Gallery | SquirrelQuest",
  description:
    "View our project gallery showcasing our construction and carpentry work in Calgary, Alberta. Quality craftsmanship and attention to detail.",

  // Open Graph / Facebook
  openGraph: {
    title: "Gallery | SquirrelQuest",
    description:
      "View our project gallery showcasing our construction and carpentry work in Calgary.",
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
    url: "https://squirrelquest.pro/gallery",
    siteName: "SquirrelQuest",
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "Gallery | SquirrelQuest",
    description:
      "View our project gallery showcasing our construction and carpentry work in Calgary.",
    images: ["https://squirrelquest.pro/images/logo.webp"],
    creator: "@squirrelquest",
  },

  alternates: {
    canonical: "https://squirrelquest.pro/gallery",
  },

  // Additional metadata
  keywords: [
    "construction gallery",
    "carpentry projects",
    "calgary construction",
    "project portfolio",
    "construction photos",
    "alberta construction",
    "building services",
    "squirrelquest",
  ],
};

// Server component
export default async function Gallery() {
  const galleryPath = path.join(process.cwd(), "public/images/gallery");

  let photos = [];

  try {
    if (fs.existsSync(galleryPath)) {
      photos = fs
        .readdirSync(galleryPath)
        .filter(
          (file) =>
            file.endsWith(".jpg") ||
            file.endsWith(".jpeg") ||
            file.endsWith(".png") ||
            file.endsWith(".webp"),
        );
    }
  } catch (error) {
    console.error("Gallery error:", error);
  }

  return (
    <div className='gallery-page column aic gap30'>
      <h1>Gallery</h1>
      <GalleryGrid photos={photos} />
    </div>
  );
}
