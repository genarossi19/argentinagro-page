"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Plane,
  Tractor,
  Wheat,
  Droplets,
  SprayCanIcon as Spray,
  MoreHorizontal,
  ArrowRight,
  CheckCircle,
  DrillIcon as Drone,
} from "lucide-react";

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

export function ServiciosContent({ servicios, caracteristicas }) {
  const serviciosDestacados = servicios.slice(0, 3);

  return (
    <div>
      <section className="relative bg-gradient-to-b py-20 animate-fade-in ">
        <div className="container mx-auto px-4 mt-28">
          <div className="text-center mb-12 animate-fade-in-down">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm tracking-wider text-logo-blue border-logo-blue/20 bg-logo-blue/5 rounded-full inline-flex"
            >
              Soluciones agropecuarias integrales
            </Badge>
            <h1 className="text-5xl font-bold text-logo-blue tracking-wider mb-4">
              Nuestros Servicios Agropecuarios
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 tracking-wider text-lg">
              Ofrecemos una amplia gama de servicios especializados para cubrir
              todas las necesidades de su explotación agrícola, combinando
              tecnología de vanguardia con la experiencia de nuestro equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-stagger-cards">
            {serviciosDestacados.map((servicio, index) => (
              <a
                href={servicio.href}
                className="group"
                key={servicio.title} // Utilizando el título como clave única
              >
                <Card className="overflow-hidden border-0 shadow-lg h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-stagger-cards">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className={`absolute top-4 right-4 z-10 w-12 h-12 rounded-full ${servicio.color} flex items-center justify-center text-white`}
                    >
                      {servicio.icono === "Plane" && (
                        <Plane className="h-6 w-6" />
                      )}
                      {servicio.icono === "Tractor" && (
                        <Tractor className="h-6 w-6" />
                      )}
                      {servicio.icono === "Wheat" && (
                        <Wheat className="h-6 w-6" />
                      )}
                    </div>
                    <img
                      loading="lazy"
                      src={servicio.imageUrl || "/placeholder.svg"}
                      alt={servicio.altText}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-2xl font-bold tracking-wider">
                        {servicio.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 tracking-wider">
                      {servicio.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="inline-flex items-center text-logo-blue font-medium tracking-wider group-hover:underline">
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 tracking-wider mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            ¿Por qué elegir nuestros servicios?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {caracteristicas.map((caracteristica, index) => (
              <motion.div
                className="bg-logo-blue/5 rounded-lg p-6 border border-logo-blue/10 transition-all duration-300 hover:shadow-md"
                key={caracteristica.titulo} // Utilizando el título como clave única
                variants={fadeUp}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-logo-blue/10 text-logo-blue">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-wider text-gray-900 mb-2">
                      {caracteristica.titulo}
                    </h3>
                    <p className="text-gray-600 tracking-wider text-sm">
                      {caracteristica.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 tracking-wider mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            Todos nuestros servicios
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {servicios.map((servicio) => (
              <motion.a
                href={servicio.href}
                className="group"
                key={servicio.title} // Utilizando el título como clave única
                variants={fadeUp}
              >
                <Card className="overflow-hidden border-0 shadow-md h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full ${servicio.color} flex items-center justify-center text-white`}
                    >
                      {servicio.icono === "Plane" && (
                        <Plane className="h-5 w-5" />
                      )}
                      {servicio.icono === "Tractor" && (
                        <Tractor className="h-5 w-5" />
                      )}
                      {servicio.icono === "Wheat" && (
                        <Wheat className="h-5 w-5" />
                      )}
                      {servicio.icono === "Droplets" && (
                        <Droplets className="h-5 w-5" />
                      )}
                      {servicio.icono === "Spray" && (
                        <Spray className="h-5 w-5" />
                      )}
                      {servicio.icono === "Drone" && (
                        <Drone className="h-5 w-5" />
                      )}
                      {servicio.icono === "MoreHorizontal" && (
                        <MoreHorizontal className="h-5 w-5" />
                      )}
                    </div>
                    <img
                      loading="lazy"
                      src={servicio.imageUrl || "/placeholder.svg"}
                      alt={servicio.altText}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold tracking-wider">
                        {servicio.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 tracking-wider">
                      {servicio.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
