"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useInView } from "react-intersection-observer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Plus } from "lucide-react";

const ImageSkeleton = ({ size, isFiltered }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${
        !isFiltered
          ? `${size === "large" ? "col-span-2 row-span-2" : ""}
             ${size === "wide" ? "col-span-2" : ""}
             ${size === "tall" ? "row-span-2" : ""}`
          : ""
      }`}
    >
      <div
        className="w-full h-0"
        style={{
          paddingBottom: isFiltered
            ? "75%"
            : size === "tall"
            ? "200%"
            : size === "large"
            ? "100%"
            : "75%",
        }}
      >
        <Skeleton className="absolute inset-0 w-full h-full" />
      </div>
    </div>
  );
};

const LazyImage = ({ src, alt, size, isFiltered, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [inView, src]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${
        !isFiltered
          ? `${size === "large" ? "col-span-2 row-span-2" : ""}
             ${size === "wide" ? "col-span-2" : ""}
             ${size === "tall" ? "row-span-2" : ""}`
          : ""
      }`}
      onClick={onClick}
    >
      <div
        className="w-full h-0"
        style={{
          paddingBottom: isFiltered
            ? "75%"
            : size === "tall"
            ? "200%"
            : size === "large"
            ? "100%"
            : "75%",
        }}
      >
        {inView && (
          <>
            <img
              src={src || "/placeholder.svg"}
              alt={alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{ filter: isLoaded ? "none" : "blur(10px)" }}
            />
            {!isLoaded && (
              <Skeleton className="absolute inset-0 w-full h-full" />
            )}
          </>
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
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/get-categories.json");
        if (!response.ok) {
          throw new Error("Network response was not ok (categories)");
        }
        const data = await response.json();
        const categories = data.categories.map((cat) => cat.name.toLowerCase());

        // Set the first 5 categories as main categories
        setMainCategories(categories.slice(0, 5));
        // Set all categories
        setAllCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch images from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/get-images.json");
        if (!response.ok) {
          throw new Error("Network response was not ok (images)");
        }
        const data = await response.json();
        // Adapt the data to match the expected structure
        const adaptedImages = data.images.map((image) => ({
          ...image,
          categories: image.categories.map((cat) => cat.name.toLowerCase()),
        }));
        setImages(adaptedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = useMemo(() => {
    return selectedCategories.length === 0
      ? images
      : images.filter((image) =>
          selectedCategories.every((cat) => image.categories.includes(cat))
        );
  }, [selectedCategories, images]);

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

  // Filter categories that are not in mainCategories
  const otherCategories = allCategories.filter(
    (cat) => !mainCategories.includes(cat)
  );

  const filteredOtherCategories = otherCategories.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section ref={containerRef} className="py-8 md:py-4 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50"
        style={{
          scaleX,
          transformOrigin: "0%",
          backgroundColor: "#0050AC", // logo-blue color
        }}
      />
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
          {mainCategories.map((category) => (
            <Button
              key={category}
              onClick={() => toggleCategory(category)}
              variant={
                selectedCategories.includes(category) ? "default" : "outline"
              }
            >
              {category}
            </Button>
          ))}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                Más filtros <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <Input
                  type="search"
                  placeholder="Buscar filtros..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="space-y-2">
                  {filteredOtherCategories.map((category) => (
                    <Button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      variant={
                        selectedCategories.includes(category)
                          ? "default"
                          : "outline"
                      }
                      className="w-full justify-start"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {isLoading ? (
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <ImageSkeleton key={index} size="small" isFiltered={false} />
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategories.join(",")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
            >
              {filteredImages.map((image) => (
                <LazyImage
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  size={image.size}
                  isFiltered={selectedCategories.length > 0}
                  onClick={() => openLightbox(image)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
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
