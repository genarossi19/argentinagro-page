"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Truck,
  Tractor,
  PenToolIcon as Tools,
  Search,
  ArrowRight,
  Wheat,
  Shield,
} from "lucide-react";
import { OtrosServiciosSkeletonLoader } from "@/components/OtrosServiciosSkeletonLoader";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

// Variantes de animación para Framer Motion
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function OtrosServiciosContent({ title, servicios }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = servicios.length + 1; // +1 para la imagen principal

  // Manejar la carga de imágenes
  const handleImageLoad = () => {
    setImagesLoaded((prev) => {
      const newCount = prev + 1;
      if (newCount >= totalImages) {
        // Todas las imágenes cargadas
        setTimeout(() => setIsLoading(false), 300);
      }
      return newCount;
    });
  };

  // Precargar imágenes
  useEffect(() => {
    // Precargar imagen principal
    const mainImg = new Image();
    mainImg.src = "/otros.jpg";
    mainImg.onload = handleImageLoad;

    // Precargar imágenes de servicios
    servicios.forEach((servicio) => {
      const img = new Image();
      img.src = servicio.imagen;
      img.onload = handleImageLoad;
    });

    // Fallback por si las imágenes fallan o tardan demasiado
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Renderizar skeletons mientras isLoading es true
  if (isLoading) {
    return <OtrosServiciosSkeletonLoader />;
  }

  return (
    <section className="w-[95%] mx-auto mb-28">
      {/* Barra de progreso de scroll */}
      <ScrollProgressBar />

      {/* Encabezado con título y badge */}
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <Badge
          variant="outline"
          className="mb-4 px-4 py-1 text-sm tracking-wider text-logo-blue border-logo-blue/20 bg-logo-blue/5 rounded-full inline-flex"
        >
          Soluciones agrícolas integrales
        </Badge>
        <h1 className="text-[40px] font-semibold text-center text-logo-blue">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 tracking-wider mt-4">
          Complementamos nuestros servicios principales con soluciones
          especializadas para cubrir todas las necesidades de su explotación
          agrícola.
        </p>
      </motion.div>

      {/* Imagen principal con overlay y efecto */}
      <motion.div
        className="mt-10 w-full h-[400px] relative rounded-xl overflow-hidden group"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <img
          className="object-center object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
          src="/otros.jpg"
          alt={title}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-white text-3xl font-bold tracking-wider mb-2">
            Servicios complementarios
          </h2>
          <p className="text-white/90 tracking-wider max-w-2xl">
            Ofrecemos una amplia gama de servicios adicionales para optimizar
            cada etapa del ciclo productivo agrícola.
          </p>
        </motion.div>
      </motion.div>

      {/* Tarjetas de servicios en grid */}
      <motion.div
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {servicios.map((servicio, index) => (
            <motion.div key={index} variants={fadeUp}>
              <Card className="group overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl h-[400px] flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full ${servicio.color} flex items-center justify-center text-white`}
                  >
                    {servicio.icono === "Truck" && (
                      <Truck className="h-5 w-5" />
                    )}
                    {servicio.icono === "Tractor" && (
                      <Tractor className="h-5 w-5" />
                    )}
                    {servicio.icono === "Tools" && (
                      <Tools className="h-5 w-5" />
                    )}
                    {servicio.icono === "Search" && (
                      <Search className="h-5 w-5" />
                    )}
                  </div>
                  <img
                    src={servicio.imagen || "/placeholder.svg"}
                    alt={servicio.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl tracking-wider text-gray-900 group-hover:text-logo-blue transition-colors">
                    {servicio.titulo}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-gray-600 tracking-wider text-sm line-clamp-3">
                    {servicio.descripcion}
                  </p>
                </CardContent>

                <CardFooter className="mt-auto pt-0">
                  <a
                    href={servicio.href}
                    className="inline-flex items-center text-logo-blue font-medium tracking-wider text-sm group-hover:underline"
                  >
                    Ver detalles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Sección de beneficios */}
      <motion.div
        className="mt-20 bg-logo-blue/5 rounded-xl p-8 border border-logo-blue/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold tracking-wider text-gray-900 mb-6 text-center">
          ¿Por qué elegir nuestros servicios?
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <motion.div
            className="flex flex-col items-center text-center"
            variants={fadeUp}
          >
            <div className="h-14 w-14 rounded-full bg-logo-blue/10 flex items-center justify-center text-logo-blue mb-4">
              <Shield className="h-7 w-7" />
            </div>
            <h3 className="font-semibold tracking-wider text-gray-900 mb-2">
              Experiencia comprobada
            </h3>
            <p className="text-gray-600 tracking-wider">
              Más de 20 años de experiencia en el sector agrícola nos avalan,
              garantizando resultados óptimos en cada servicio.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            variants={fadeUp}
          >
            <div className="h-14 w-14 rounded-full bg-logo-blue/10 flex items-center justify-center text-logo-blue mb-4">
              <Tractor className="h-7 w-7" />
            </div>
            <h3 className="font-semibold tracking-wider text-gray-900 mb-2">
              Equipamiento de última generación
            </h3>
            <p className="text-gray-600 tracking-wider">
              Contamos con maquinaria moderna y tecnología avanzada para ofrecer
              servicios eficientes y de alta calidad.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            variants={fadeUp}
          >
            <div className="h-14 w-14 rounded-full bg-logo-blue/10 flex items-center justify-center text-logo-blue mb-4">
              <Wheat className="h-7 w-7" />
            </div>
            <h3 className="font-semibold tracking-wider text-gray-900 mb-2">
              Soluciones integrales
            </h3>
            <p className="text-gray-600 tracking-wider">
              Ofrecemos un conjunto completo de servicios para cubrir todas las
              etapas del ciclo productivo de sus cultivos.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CTA final */}
      <motion.div
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold tracking-wider text-gray-900 mb-4">
          ¿Necesita alguno de estos servicios?
        </h2>
        <p className="text-gray-600 tracking-wider max-w-2xl mx-auto mb-6">
          Contáctenos para obtener más información o solicitar un presupuesto
          personalizado para su explotación agrícola.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=542392480555&text=%C2%A1Hola!%2C%20te%20hago%20una%20consulta."
          target="_blank"
          rel="noreferrer"
        >
          <Button
            className="bg-logo-blue hover:bg-logo-blue/90 text-white gap-3 group px-6 py-6 text-base tracking-wider"
            size="lg"
          >
            <span>Contactar ahora</span>
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
