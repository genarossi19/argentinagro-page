"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "/images/maquinas4.jpeg",
    alt: "Lush green field with crops",
    size: "large",
  },
  {
    src: "/cosecha1.jpg",
    alt: "Modern farming equipment in action",
    size: "small",
  },
  {
    src: "/fertilizacion3.jpg",
    alt: "Close-up of ripe wheat",
    size: "tall",
  },
  {
    src: "/cosechadoras.JPG",
    alt: "Aerial view of farmland",
    size: "small",
  },
  {
    src: "/fertilizacion1.jpg",
    alt: "Farmer inspecting crops",
    size: "wide",
  },
  {
    src: "/fertilizacion2.jpg",
    alt: "Sustainable irrigation system",
    size: "small",
  },
  {
    src: "/fertilizacion3.jpg",
    alt: "Organic produce harvest",
    size: "small",
  },
  {
    src: "/fertilizacion2.jpg",
    alt: "Lush green field with crops",
    size: "large",
  },
  {
    src: "/cosecha1.jpg",
    alt: "Modern farming equipment in action",
    size: "small",
  },
  {
    src: "/fertilizacion3.jpg",
    alt: "Close-up of ripe wheat",
    size: "tall",
  },
  {
    src: "/cosechadoras.JPG",
    alt: "Aerial view of farmland",
    size: "small",
  },
  {
    src: "/fertilizacion1.jpg",
    alt: "Farmer inspecting crops",
    size: "wide",
  },
  {
    src: "/fertilizacion2.jpg",
    alt: "Sustainable irrigation system",
    size: "small",
  },
  {
    src: "/fertilizacion3.jpg",
    alt: "Organic produce harvest",
    size: "small",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-8 md:py-4 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-logo-blue relative"
        >
          <span className="relative z-9">Echanos un vistazo</span>
          {/* <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-green-200"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L12 12L17 17M7 7L12 12L17 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
        </motion.h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer col-span-1 
        ${image.size === "large" ? "sm:col-span-2 sm:row-span-2" : ""}
        ${image.size === "wide" ? "sm:col-span-2" : ""}
        ${image.size === "tall" ? "sm:row-span-2" : ""}
      `}
              onClick={() => openLightbox(image)}
            >
              <div
                className="w-full h-0"
                style={{
                  paddingBottom: image.size === "tall" ? "140%" : "75%",
                }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <p className="text-white p-4 text-center text-sm md:text-base font-light tracking-wide">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-4xl w-full h-full flex items-center justify-center"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover max-h-[250px] sm:max-h-full transition-transform duration-500 hover:scale-110"
            />

            <button
              className="absolute top-4 right-4 text-white text-4xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
