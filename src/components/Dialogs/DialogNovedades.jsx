import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function DialogNovedades({ className }) {
  const [step, setStep] = useState(1);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const stepContent = [
    {
      title: "Aplicación con drones",
      description: "Descubre la última tecnología en aplicación",
      image: "/dron2.jpeg",
      link: "/servicios/drones/", // URL específica para este paso
    },
  ];

  const totalSteps = stepContent.length;

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
  };

  return (
    <>
      {/* Botón que abre el diálogo */}
      <Button
        type="button"
        onClick={() => setIsDialogVisible(true)}
        className={className} // Pasamos las clases de Tailwind aquí
      >
        <span>Novedades</span>
      </Button>

      {/* Diálogo */}
      {isDialogVisible && (
        <Dialog
          open={isDialogVisible}
          onOpenChange={(open) => {
            if (!open) setIsDialogVisible(false);
          }}
        >
          <DialogContent className="gap-0 p-0 [&>button:last-child]:text-black">
            {/* Título NOVEDADES */}
            <div className="text-black text-center font-bold text-xl py-2">
              NOVEDADES
            </div>

            {/* Imagen del paso */}
            <div className="flex justify-center px-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={stepContent[step - 1].image}
                  alt={`Imagen del paso ${step}`}
                />
              </div>
            </div>

            {/* Contenido del diálogo */}
            <div className="space-y-6 px-6 pb-6 pt-3">
              <DialogHeader>
                <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
                <DialogDescription>
                  {stepContent[step - 1].description}
                </DialogDescription>
              </DialogHeader>

              {/* Indicadores de pasos */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex justify-center space-x-1.5 max-sm:order-1">
                  {[...Array(totalSteps)].map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setStep(index + 1)}
                      className={`h-2 w-2 cursor-pointer rounded-full border transition-all duration-300 ${
                        index + 1 === step
                          ? "bg-black border-black"
                          : "bg-gray-300 border-gray-300"
                      }`}
                      title={`Ir al paso ${index + 1}`}
                    />
                  ))}
                </div>
                <DialogFooter>
                  {/* Botón Ver más con enlace dinámico */}
                  <a
                    href={stepContent[step - 1].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCloseDialog}
                    >
                      Ver más
                    </Button>
                  </a>

                  {step < totalSteps ? (
                    <Button
                      className="group"
                      type="button"
                      onClick={handleContinue}
                    >
                      Siguiente
                      <ArrowRight
                        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Button>
                  ) : (
                    <DialogClose asChild>
                      <Button type="button" onClick={handleCloseDialog}>
                        Okay
                      </Button>
                    </DialogClose>
                  )}
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
