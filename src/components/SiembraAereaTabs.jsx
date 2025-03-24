import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Leaf, Target, Zap } from "lucide-react";

export function SiembraAereaTabs() {
  return (
    <Tabs defaultValue="equipamiento" className="w-full">
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="equipamiento">Equipamiento</TabsTrigger>
        <TabsTrigger value="ventajas">Ventajas</TabsTrigger>
        <TabsTrigger value="resultados">Resultados</TabsTrigger>
      </TabsList>

      <TabsContent value="equipamiento" className="space-y-4">
        <div className="flex items-start gap-4 p-4 rounded-lg bg-logo-blue/5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-logo-blue/10 text-logo-blue">
            <Plane className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Avión Especial (Turbo Kruk)
            </h3>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-logo-blue" />
                <span>750 HP de potencia</span>
              </li>
              <li className="flex items-center gap-2">
                <Target className="h-4 w-4 text-logo-blue" />
                <span>Gran capacidad de carga (1.500 Kg)</span>
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-logo-blue" />
                <span>
                  Puede operar en superficies muy cortas (300-400 Mts)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-lg">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-logo-blue/10 text-logo-blue">
            <Plane className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Puelche 260 paso variable
            </h3>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li className="flex items-center gap-2">
                <Target className="h-4 w-4 text-logo-blue" />
                <span>Menor capacidad (600 Kg)</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-logo-blue" />
                <span>
                  Muy ágil para aplicaciones en sectores cercanos a montes o
                  líneas eléctricas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 text-gray-500">
          <p>
            Al operar desde lugares cercanos a los objetivos, se minimizan
            considerablemente los costos operativos y se maximiza la eficiencia
            del servicio.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="ventajas" className="space-y-4">
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded-lg border border-logo-blue/20 bg-logo-blue/5">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Eficiencia operativa
            </h3>
            <p className="text-gray-500">
              Nuestra capacidad para operar en superficies cortas (300-400 Mts)
              nos permite acceder a áreas que otros no pueden, reduciendo
              tiempos y costos operativos.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-logo-blue/20">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Versatilidad
            </h3>
            <p className="text-gray-500">
              Contamos con dos tipos de aeronaves que se adaptan a diferentes
              necesidades: alta capacidad de carga o mayor agilidad para zonas
              complejas.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-logo-blue/20">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Experiencia comprobada
            </h3>
            <p className="text-gray-500">
              Con 20 años de experiencia en la zona, hemos perfeccionado
              nuestras técnicas para garantizar los mejores resultados en cada
              aplicación.
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="resultados" className="space-y-4">
        <div className="bg-logo-blue/5 p-6 rounded-lg border border-logo-blue/20">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">
            Cultivos y momentos óptimos
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 mt-0.5 rounded-full bg-logo-blue/20 flex items-center justify-center text-logo-blue">
                <span className="text-sm font-medium">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Soja en estado fenológico R6-R7
                </p>
                <p className="text-gray-500">
                  Los mejores resultados los hemos logrado cuando comienza la
                  senescencia de las hojas y se produce la caída de las mismas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 mt-0.5 rounded-full bg-logo-blue/20 flex items-center justify-center text-logo-blue">
                <span className="text-sm font-medium">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Siembra al voleo sobre maíces y girasoles
                </p>
                <p className="text-gray-500">
                  Hemos sembrado avena, rye-grass, vicia y centeno con muy
                  buenos resultados.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 border-l-4 border-logo-blue bg-logo-blue/5 rounded-r-lg">
          <p className="italic text-gray-600">
            "Nuestra experiencia nos ha permitido perfeccionar las técnicas de
            siembra aérea, logrando resultados excepcionales en diversos tipos
            de cultivos."
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
