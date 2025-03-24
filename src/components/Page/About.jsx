"use client";

import {
  motion,
  AnimatePresence,
  useTransform,
  useSpring,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { useScroll } from "framer-motion";
import "@/styles/global.css";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sprout,
  Plane,
  Building2,
  Tractor,
  SprayCanIcon as Spray,
  Star,
} from "lucide-react";

// Datos simulados
const companyHistory = [
  {
    year: 1976,
    title: "Los inicios",
    event:
      "Francisco Jose Font comienza a trabajar como Ingeniero Agrónomo, especializándose en pulverización de agroquímicos y terapéutica vegetal.",
    icon: "Seedling",
  },
  {
    year: 1997,
    title: "Expansión aérea",
    event:
      "Incorporación del Avión turbo Kruk de 750 HP con capacidad de 1.500 kg, permitiendo un avance significativo en los servicios prestados.",
    icon: "Plane",
  },
  {
    year: 2011,
    title: "Nacimiento de Argentinagro SRL",
    event:
      "La empresa se constituye formalmente, integrando a jóvenes de la familia bajo la dirección de Francisco J. Font. Se incorpora un segundo avión Puelche 260.",
    icon: "Building",
  },
  {
    year: 2019,
    title: "Modernización del equipamiento",
    event:
      "Adquisición de Pulverizadora Pla MD 3300 con sistema SIA y cosechadoras Challenger 660 DT y J.Deere 9770.",
    icon: "Spray",
  },
  {
    year: 2025,
    title: "Nuestro compromiso con el futuro",
    event:
      "Seguimos trabajando para ofrecerte el mejor servicio agropecuario, innovando constantemente y adaptándonos a las necesidades del campo argentino.",
    icon: "Star",
  },
];

const teamMembers = [
  {
    name: "Mauricio José Font",
    role: "Ingeniero Agrónomo y Socio-gerente",
    image: "/team/mauricio.jpg",
    bio: "En la empresa desde 2011. Planificación  de las actividades de la empresa (siembra, cosecha, pulverización, otras labores). Control y análisis de gestión.",
    achievements: [
      "Carreras de karting",
      "Vuelos de paseo",
      "Disfrutar en familia",
    ],
  },
  {
    name: "Viviana Oses",
    role: "Contadora Publica Nacional - Encargada de finanzas",
    image: "/team/viviana.jpeg",
    bio: "Ingrese a la empresa el 10/10/2018, con 20 años de experiencia en el sector agropecuario, decidi acompañar y aportar conocimiento a la empresa joven y en crecimiento",
    achievements: [
      "Atencion a clientes particulares",
      "Fitness acuatico",
      "Series y películas",
      "Compartir momentos en familia",
    ],
  },
  {
    name: "Camila Oderiz",
    role: "Lic. en Administración Rural - Sector administrativo contable",
    image: "/team/camila.jpeg",
    bio: "En la empresa desde 2020, realizo trabajos de facturación, logística de granos en cosecha, cuentas corrientes proveedores y clientes. ",
    achievements: [
      "Hacer deporte",
      "Compartir momentos con familia y amigos",
      "Viajar",
      "Estudiar",
    ],
  },
  {
    name: "Juan Patricio Font",
    role: "Contratista Rural.",
    image: "/team/patricio.jpeg",
    bio: "En la empresa desde 2019. Aplicador terrestre de fitosanitarios. ",
    achievements: [
      "Jugar al Futbol",
      "Compartir momentos con amigos y familia",
    ],
  },
];

const machinery = [
  {
    name: "Cosechadora John Deere 9770",
    image: "/cosecha2.jpeg?height=600&width=800",
    description: "Con plataforma de 35 pies de corte.",
  },
  {
    name: "Cosechadora New Holland ",
    image: "/cosechadora2.JPG?height=600&width=800",
    description: "desc",
  },
  {
    name: "Pulverizadora PLA MD 3300 2019",
    image: "/pulverizacion_terrestre.jpg?height=600&width=800",
    description:
      "Con sistema SIA (estacion meteorologica incorporada) 36 mts de ala mixta, corte por sección, banderillero satelital, piloto automático y computadora de a bordo, operadas por personal.",
  },
  {
    name: "Sembradora JUBER 5200",
    image: "/sembradora_juber5200.jpg?height=600&width=800",
    description:
      "Distancias posibles 17,5 cm. 35 cm. 52 cm y 70 cm entre hileras. Con sistema de dosificación Master Mac, neumática y variable de semilla y fertilizante.",
  },
  {
    name: "Sembradora Crucianelli GRINGA",
    image: "/siembra_terrestre2.jpg?height=600&width=800",
    description:
      "De grano grueso de 28 cuerpos a 35 cm, con sistema PRECISION PLANTING, neumático y variable de semilla y fertilizante. Ideal para maíces, con excelentes resultados en uniformidad de nacimientos.",
  },
  {
    name: "Sembradora Agrometal TX-MEGA",
    image: "/images/img-80.webp",
    description:
      "De 16 surcos a 52 cm entre hileras, neumatica con siembra variabl de fertilizante y semilla.",
  },
  {
    name: "Tractor New Holland",
    image: "/images/img-80.webp",
    description: "Con plataforma de 35 pies, año 2022",
  },
  {
    name: "Avion Turbo Kruk",
    image: "/pulverizacion_aerea3.jpg?height=600&width=800",
    description: "",
  },
  {
    name: "Avion Puelche 260",
    image: "/images/img-80.webp",
    description: "",
  },
];

const ImageWithSkeleton = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  if (error) {
    return <div className={`bg-gray-300 ${className}`}>{alt}</div>;
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
      )}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      data-header-color="white"
      ref={containerRef}
      className="landing-section min-h-[calc(100vh-100px)] bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      {/* Hero Section */}
      <motion.section
        className="h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="/images/img-44.webp"
          alt="Maquinarias"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        />
        <div className="relative z-10 text-center px-4 mb-20">
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
      <section
        className="py-12 px-4 bg-gradient-to-b from-gray-800 to-gray-900"
        data-header-color="white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nuestra Historia
          </h2>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Desde nuestros inicios en 1976, hemos evolucionado constantemente
            para ofrecer los mejores servicios agropecuarios, incorporando
            tecnología de vanguardia y expandiendo nuestras capacidades.
          </p>

          {/* Timeline para desktop */}
          <div className="hidden md:block relative">
            {/* Línea vertical central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-logo-blue"></div>

            <div className="space-y-20">
              {companyHistory.map((item, index) => (
                <div key={item.year} className="relative">
                  {/* Icono central */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-9">
                    <div className="w-14 h-14 rounded-full bg-logo-blue flex items-center justify-center">
                      {item.icon === "Seedling" && (
                        <Sprout className="h-7 w-7 text-white" />
                      )}
                      {item.icon === "Plane" && (
                        <Plane className="h-7 w-7 text-white" />
                      )}
                      {item.icon === "Building" && (
                        <Building2 className="h-7 w-7 text-white" />
                      )}
                      {item.icon === "Tractor" && (
                        <Tractor className="h-7 w-7 text-white" />
                      )}
                      {item.icon === "Spray" && (
                        <Spray className="h-7 w-7 text-white" />
                      )}
                      {item.icon === "Star" && (
                        <Star className="h-7 w-7 text-white" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`flex ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Año */}
                    <motion.div
                      className="w-1/2 flex items-center"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`${
                          index % 2 === 0
                            ? "text-right pr-14"
                            : "text-left pl-14"
                        } w-full`}
                      >
                        <span className="text-5xl font-bold text-logo-blue">
                          {item.year}
                        </span>
                      </div>
                    </motion.div>

                    {/* Contenido */}
                    <motion.div
                      className="w-1/2 flex items-center"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`${
                          index % 2 === 0 ? "pl-14" : "pr-14"
                        } w-full`}
                      >
                        <div className="bg-gray-800/80 p-5 rounded-lg shadow-lg border border-gray-700 backdrop-blur-sm">
                          <h3 className="text-xl font-bold text-logo-blue mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-200 text-sm">{item.event}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline para móvil */}
          <div className="md:hidden space-y-10">
            {companyHistory.map((item) => (
              <motion.div
                key={item.year}
                className="relative pl-10 border-l-2 border-logo-blue"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Icono */}
                <div className="absolute left-0 top-0 transform -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-logo-blue flex items-center justify-center">
                    {item.icon === "Seedling" && (
                      <Sprout className="h-4 w-4 text-white" />
                    )}
                    {item.icon === "Plane" && (
                      <Plane className="h-4 w-4 text-white" />
                    )}
                    {item.icon === "Building" && (
                      <Building2 className="h-4 w-4 text-white" />
                    )}
                    {item.icon === "Tractor" && (
                      <Tractor className="h-4 w-4 text-white" />
                    )}
                    {item.icon === "Spray" && (
                      <Spray className="h-4 w-4 text-white" />
                    )}
                    {item.icon === "Star" && (
                      <Star className="h-4 w-4 text-white" />
                    )}
                  </div>
                </div>

                {/* Año */}
                <div className="mb-2">
                  <span className="text-3xl font-bold text-logo-blue">
                    {item.year}
                  </span>
                </div>

                {/* Contenido */}
                <div className="bg-gray-800/80 p-3 rounded-lg shadow-lg border border-gray-700 backdrop-blur-sm">
                  <h3 className="text-base font-bold text-logo-blue mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-xs">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 px-4 bg-gray-800 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Nuestro Equipo
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="w-64 text-center cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedMember(member)}
            >
              <ImageWithSkeleton
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-[250px] mb-3"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-logo-blue text-sm">{member.role}</p>
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
                  <ImageWithSkeleton
                    src={selectedMember.image || "/placeholder.svg"}
                    alt={selectedMember.name}
                    className="w-[180px] h-[180px] rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-logo-blue text-center mb-4">
                    {selectedMember.role}
                  </p>
                  <p className="text-gray-300 mb-6">{selectedMember.bio}</p>
                  <h4 className="text-xl font-semibold mb-2">
                    Hobbies y otras Actividades:
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
      <section className="py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Nuestra maquinaria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {machinery.map((machine, index) => (
            <motion.div
              key={machine.name}
              className="w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full h-full p-0 hover:bg-transparent hover:opacity-90 transition-opacity"
                  >
                    <div className="text-center space-y-3 group">
                      <div className="aspect-square w-full overflow-hidden rounded-lg">
                        <ImageWithSkeleton
                          src={machine.image || "/placeholder.svg"}
                          alt={machine.name}
                          className="w-full h-full"
                        />
                      </div>
                      <h3 className="text-lg text-white/70 group-hover:text-white transition-colors font-semibold px-4">
                        {machine.name}
                      </h3>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="text-center">
                    <div className="aspect-video w-full mb-4">
                      <ImageWithSkeleton
                        src={machine.image || "/placeholder.svg"}
                        alt={machine.name}
                        className="w-full h-full rounded-lg"
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
        className="py-16 px-4 bg-gray-800"
        style={{ opacity, scale }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Nuestra Misión en Acción
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[500px]">
            <iframe
              src="https://www.youtube.com/embed/KoGEn24fsiM"
              title="Cosecha de Soja 2022 [1] | La Argentina | ArgentinagroSRL"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* Llamado a la Acción */}
      <section className="py-16 px-4 text-center pb-[80px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Compromiso con los Productores
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Impulsamos tu Producción con Innovación y Responsabilidad
        </p>
        <Button className="bg-logo-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contáctanos
        </Button>
      </section>
    </section>
  );
}
