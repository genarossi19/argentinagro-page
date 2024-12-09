"use client";

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
import { cn } from "@/lib/utils";
import DialogImg from "@/public/dialog-content.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DialogDemo() {
  const [step, setStep] = useState(1);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const stepContent = [
    {
      title: "Welcome to Origin UI",
      description:
        "Discover a powerful collection of components designed to enhance your development workflow.",
    },
    {
      title: "Customizable Components",
      description:
        "Each component is fully customizable and built with modern web standards in mind.",
    },
    {
      title: "Ready to Start?",
      description:
        "Begin building amazing interfaces with our comprehensive component library.",
    },
    {
      title: "Get Support",
      description:
        "Access our extensive documentation and community resources to make the most of Origin UI.",
    },
  ];

  const totalSteps = stepContent.length;

  // Muestra el diálogo si el usuario no lo ha visto antes
  useEffect(() => {
    const hasSeenDialog = localStorage.getItem("hasSeenDialog");
    if (!hasSeenDialog) {
      setIsDialogVisible(true);
    }
  }, []);

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleSkipDialog = () => {
    setIsDialogVisible(false); // Cierra el diálogo
    localStorage.setItem("hasSeenDialog", "true"); // Guarda que el usuario ya lo vio
  };

  return (
    <>
      {isDialogVisible && (
        <Dialog
          open={isDialogVisible}
          onOpenChange={(open) => {
            if (!open) setIsDialogVisible(false);
          }}
        >
          <DialogContent className="gap-0 p-0 [&>button:last-child]:text-white">
            <div className="p-2">
              <Image
                className="w-full rounded-lg"
                src={DialogImg}
                width={382}
                height={216}
                alt="dialog"
              />
            </div>
            <div className="space-y-6 px-6 pb-6 pt-3">
              <DialogHeader>
                <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
                <DialogDescription>
                  {stepContent[step - 1].description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex justify-center space-x-1.5 max-sm:order-1">
                  {[...Array(totalSteps)].map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "h-1.5 w-1.5 rounded-full bg-primary",
                        index + 1 === step ? "bg-primary" : "opacity-20"
                      )}
                    />
                  ))}
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={handleSkipDialog}
                    >
                      Skip
                    </Button>
                  </DialogClose>
                  {step < totalSteps ? (
                    <Button
                      className="group"
                      type="button"
                      onClick={handleContinue}
                    >
                      Next
                      <ArrowRight
                        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Button>
                  ) : (
                    <DialogClose asChild>
                      <Button type="button" onClick={handleSkipDialog}>
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
