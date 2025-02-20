"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useInView } from "react-intersection-observer";
import * as LazyLoadModule from "react-lazy-load-image-component";
import { useMemo } from "react";

const images = [
  {
    id: 1,
    src: "/images/maquinas1.jpeg",
    alt: "maquinas1",
    size: "large",
    categories: ["maquinaria"],
    origin: "images",
  },
  {
    id: 2,
    src: "/cosecha1.jpg",
    alt: "cosecha1",
    size: "small",
    categories: ["maquinaria", "cosecha"],
    origin: "public",
  },
  {
    id: 3,
    src: "/fertilizacion3.jpg",
    alt: "fertilizacion3",
    size: "tall",
    categories: ["fertilizacion", "avion"],
    origin: "public",
  },
  {
    id: 4,
    src: "/cosechadoras.JPG",
    alt: "cosechadoras",
    size: "small",
    categories: ["maquinaria", "cosecha"],
    origin: "public",
  },

  {
    id: 6,
    src: "/images/dron6.jpeg",
    alt: "dron6",
    size: "small",
    categories: ["fertilizacion"],
    origin: "images",
  },
  {
    id: 7,
    src: "/images/camiones1.jpeg",
    alt: "camiones1",
    size: "small",
    categories: ["maquinaria"],
    origin: "images",
  },
  {
    id: 5,
    src: "/fertilizacion1.jpg",
    alt: "fertilizacion1",
    size: "wide",
    categories: ["avion"],
    origin: "public",
  },
  {
    id: 8,
    src: "/images/camiones2.jpeg",
    alt: "camiones2",
    size: "tall",
    categories: ["maquinaria"],
    origin: "images",
  },

  {
    id: 10,
    src: "/images/camiones3.jpeg",
    alt: "camiones3",
    size: "large",
    categories: ["maquinaria"],
    origin: "images",
  },
  {
    id: 11,
    src: "/images/camiones4.jpeg",
    alt: "camiones4",
    size: "small",
    categories: ["maquinaria"],
    origin: "images",
  },
  {
    id: 9,
    src: "/fertilizacion2.jpg",
    alt: "fertilizacion2",
    size: "tall",
    categories: ["siembra", "avion"],
    origin: "public",
  },

  {
    id: 10,
    src: "/images/maquinas2.jpeg",
    alt: "maquinas2",
    size: "small",
    categories: ["maquinaria"],
    origin: "images",
  },
  {
    id: 11,
    src: "/images/jhondeere1.jpeg",
    alt: "jhondeere1",
    size: "wide",
    categories: ["maquinaria", "cosecha"],
  },
  {
    id: 12,
    src: "/images/maquinas8.jpeg",
    alt: "maquinas8",
    size: "large",
    categories: ["maquinaria"],
  },
  {
    id: 13,
    src: "/images/turbo1.jpeg",
    alt: "turbo1",
    size: "small",
    categories: ["avion"],
  },
  {
    id: 14,
    src: "/images/newholland1.jpeg",
    alt: "newholland1",
    size: "small",
    categories: ["maquinaria", "cosecha"],
  },
  {
    id: 15,
    src: "/images/tolva1.jpeg",
    alt: "tolva1",
    size: "small",
    categories: ["maquinaria"],
  },
  {
    id: 16,
    src: "/images/tractor1.jpeg",
    alt: "tractor1",
    size: "small",
    categories: ["maquinaria"],
  },
];

const allCategories = [
  "maquinaria",
  "avion",
  "cosecha",
  "siembra",
  "fertilizacion",
];

const ImageSkeleton = ({ src, alt }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative w-full h-[200px]">
      {/* Skeleton visible solo si la imagen aún no ha cargado */}
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-md" />
      )}

      {/* Imagen con evento onLoad para detectar cuando carga */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsImageLoaded(true)}
      />
    </div>
  );
};

const LazyImage = ({ src, alt, size, isFiltered, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Carga la imagen solo una vez cuando entra en la vista
  });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${
        !isFiltered
          ? `${size === "large" ? "sm:col-span-2 sm:row-span-2" : ""}
             ${size === "wide" ? "sm:col-span-2" : ""}
             ${size === "tall" ? "sm:row-span-2" : ""}`
          : ""
      }`}
      onClick={onClick}
    >
      <div
        className="w-full h-0"
        style={{
          paddingBottom: isFiltered ? "75%" : size === "tall" ? "140%" : "75%",
        }}
      >
        {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full" />}
        {inView && (
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
        <p className="text-white p-4 text-center text-sm md:text-base font-light tracking-wide">
          Toca para ampliar
        </p>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const filteredImages = useMemo(() => {
    return selectedCategories.length === 0
      ? images
      : images.filter((image) =>
          selectedCategories.every((cat) => image.categories.includes(cat))
        );
  }, [selectedCategories]);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section className="py-8 md:py-4">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-logo-blue relative"
        >
          <span className="relative z-10">Echanos un vistazo</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategories.includes(category)
                    ? "bg-logo-blue text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategories.join(",")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
          >
            {isLoading
              ? Array.from({ length: filteredImages.length }).map(
                  (_, index) => (
                    <ImageSkeleton
                      key={index}
                      size={images[index % images.length].size}
                      isFiltered={selectedCategories.length > 0}
                    />
                  )
                )
              : filteredImages.map((image) => (
                  <LazyImage
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    size={image.size}
                    isFiltered={selectedCategories.length > 0}
                    onClick={() => openLightbox(image)}
                  />
                ))}
          </motion.div>
        </AnimatePresence>
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
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
