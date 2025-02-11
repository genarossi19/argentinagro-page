"use client";

import { motion, AnimatePresence, useTransform } from "framer-motion";
import { useState, useRef } from "react";
// Eliminar esta línea: import Image from "next/image"
import { X } from "lucide-react";
import { useScroll } from "framer-motion";
import "@/styles/global.css";
// Componentes
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Datos simulados
const companyHistory = [
  { year: 1976, event: "Fundación de la empresa" },
  {
    year: 1985,
    event: "Lanzamiento de nuestra primera línea de productos orgánicos",
  },
  { year: 1998, event: "Expansión a mercados internacionales" },
  {
    year: 2010,
    event: "Implementación de tecnologías de agricultura de precisión",
  },
  {
    year: 2020,
    event:
      "Desarrollo de soluciones basadas en IA para la protección de cultivos",
  },
];

const teamMembers = [
  {
    name: "Ana Rodríguez",
    role: "CEO",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Ana ha liderado nuestra empresa durante más de una década, impulsando la innovación y el crecimiento sostenible. Su visión ha sido fundamental para posicionarnos como líderes en soluciones agrícolas ecológicas.",
    achievements: [
      "Premio a la Innovación Agrícola 2019",
      "Miembro de la Junta de Sostenibilidad Agrícola",
    ],
  },
  {
    name: "Carlos Mendoza",
    role: "Jefe de Investigación",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Con un doctorado en Biotecnología Agrícola, Carlos lidera nuestro equipo de investigación en el desarrollo de soluciones innovadoras para la protección de cultivos.",
    achievements: [
      "Patente en Biopesticidas Avanzados",
      "Publicación en Nature sobre Agricultura Sostenible",
    ],
  },
  {
    name: "Laura Gómez",
    role: "Directora de Operaciones",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Laura ha optimizado nuestras operaciones globales, implementando prácticas sostenibles en toda nuestra cadena de suministro.",
    achievements: [
      "Certificación en Gestión de Cadena de Suministro Verde",
      "Reducción del 30% en la huella de carbono operativa",
    ],
  },
  {
    name: "Miguel Sánchez",
    role: "Especialista en Sostenibilidad",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Miguel trabaja incansablemente para asegurar que nuestros productos y prácticas sean amigables con el medio ambiente y sostenibles a largo plazo.",
    achievements: [
      "Desarrollo del Programa de Agricultura Regenerativa",
      "Ponente principal en la Cumbre de Sostenibilidad Agrícola 2022",
    ],
  },
];

const machinery = [
  {
    name: "Tractor Inteligente X1",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Equipado con GPS y sensores para una agricultura de precisión.",
  },
  {
    name: "Dron de Monitoreo AgroDron",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Captura imágenes multiespectrales para analizar la salud de los cultivos.",
  },
  {
    name: "Sistema de Riego Automatizado",
    image: "/placeholder.svg?height=600&width=800",
    description: "Optimiza el uso del agua basándose en datos en tiempo real.",
  },
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      data-header-color="white"
      ref={containerRef}
      className="landing-section min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      {/* Hero Section */}
      <motion.section
        className="h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Campo agrícola"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Protegiendo el Futuro de la Agricultura
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Desde 1976, innovando para el bienestar de tus cultivos y el planeta
          </motion.p>
        </div>
      </motion.section>

      {/* Historia de la Empresa */}
      <section className="py-20 px-4" data-header-color="white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestra Historia
        </h2>
        <div className="max-w-4xl mx-auto">
          {companyHistory.map((item, index) => (
            <motion.div
              key={item.year}
              className="flex flex-col md:flex-row items-center mb-8"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/4 text-center md:text-right pr-0 md:pr-4 mb-2 md:mb-0">
                <span className="text-2xl md:text-3xl font-bold text-logo-blue">
                  {item.year}
                </span>
              </div>
              <div className="w-full md:w-3/4 bg-gray-700 p-4 rounded-lg">
                <p>{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 px-4 bg-gray-800 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestro Equipo
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="w-64 text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedMember(member)}
            >
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-logo-blue">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMember && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setSelectedMember(null)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 w-full sm:w-96 h-full bg-gray-800 shadow-lg p-6 overflow-y-auto z-50"
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-white"
                >
                  <X size={24} />
                </button>
                <div className="mt-8">
                  <img
                    src={selectedMember.image || "/placeholder.svg"}
                    alt={selectedMember.name}
                    className="w-[200px] h-[200px] rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-logo-blue text-center mb-4">
                    {selectedMember.role}
                  </p>
                  <p className="text-gray-300 mb-6">{selectedMember.bio}</p>
                  <h4 className="text-xl font-semibold mb-2">
                    Logros Destacados:
                  </h4>
                  <ul className="list-disc pl-5">
                    {selectedMember.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-300 mb-2">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>

      {/* Tecnología y Maquinaria */}
      <section className="py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestra Tecnología
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machinery.map((machine, index) => (
            <motion.div
              key={machine.name}
              className="w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="w-full p-0">
                    <div className="text-center">
                      <div className="aspect-w-4 aspect-h-3 mb-4">
                        <img
                          src={machine.image || "/placeholder.svg"}
                          alt={machine.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{machine.name}</h3>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="text-center">
                    <div className="aspect-w-4 aspect-h-3 mb-4">
                      <img
                        src={machine.image || "/placeholder.svg"}
                        alt={machine.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{machine.name}</h3>
                    <p>{machine.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección de Video */}
      <motion.section
        className="py-20 px-4 bg-gray-800"
        style={{ opacity, scale }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestra Misión en Acción
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full h-full"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* Llamado a la Acción */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Únete a Nuestra Misión
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Descubre cómo nuestras soluciones pueden transformar tu agricultura y
          contribuir a un futuro más sostenible.
        </p>
        <Button className="bg-logo-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contáctanos
        </Button>
      </section>
    </section>
  );
}
