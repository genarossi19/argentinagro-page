import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PulverizacionFAQ() {
  const faqs = [
    {
      pregunta: "¿Qué ventajas ofrece la pulverización aérea?",
      respuesta:
        "La pulverización aérea permite tratar grandes superficies en poco tiempo, acceder a terrenos difíciles, evitar el pisoteo de cultivos y aplicar tratamientos en momentos críticos independientemente del estado del suelo.",
    },
    {
      pregunta: "¿Qué tipos de productos pueden aplicarse?",
      respuesta:
        "Nuestro servicio permite la aplicación de insecticidas, fungicidas y herbicidas, adaptando la dosis y el tipo de aplicación según las necesidades específicas de cada cultivo y situación.",
    },
    {
      pregunta: "¿Cómo se garantiza la precisión de la aplicación?",
      respuesta:
        "Utilizamos aviones equipados con computadoras agrícolas y banderillero satelital que aseguran una distribución uniforme del producto, eliminando subdosis o sobredosis que podrían afectar la eficacia del tratamiento.",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold tracking-wider text-gray-900">
        Preguntas frecuentes
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium tracking-wider text-gray-800">
              {faq.pregunta}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 tracking-wider">
              {faq.respuesta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
