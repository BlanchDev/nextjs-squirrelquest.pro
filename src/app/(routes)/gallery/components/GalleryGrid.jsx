"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Icon } from "@iconify/react";

function GalleryImage({ src, alt, onClick }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <button ref={ref} className='gallery-item' onClick={() => onClick(src)}>
      {inView && (
        <Image
          src={src}
          alt={alt}
          width={245}
          height={245}
          quality={75}
          className='gallery-image'
          style={{ objectFit: "cover" }}
        />
      )}
    </button>
  );
}

function Modal({ src, onClose }) {
  if (!src) return null;

  return (
    <div className='gallery-modal'>
      <button className='gallery-modal-overlay' onClick={onClose} />
      <div className='gallery-modal-content'>
        <button className='close-button' onClick={onClose}>
          <Icon icon='carbon:close-filled' />
        </button>
        <button className='modal-content' onClick={(e) => e.stopPropagation()}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt='Gallery full size'
            className='modal-image'
            style={{ objectFit: "contain" }}
            width={1024}
            height={1024}
          />
        </button>
      </div>
    </div>
  );
}

export default function GalleryGrid({ photos }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (photos.length === 0) {
    return <p>No photos available yet.</p>;
  }

  return (
    <>
      <div className='gallery-grid'>
        {photos.map((photo, index) => (
          <GalleryImage
            key={index + 1}
            src={`/images/gallery/${photo}`}
            alt={`Gallery image ${index + 1}`}
            onClick={setSelectedImage}
          />
        ))}
      </div>

      <Modal src={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}
