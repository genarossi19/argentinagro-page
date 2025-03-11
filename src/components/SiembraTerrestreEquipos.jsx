import { Settings, Gauge, Leaf, Droplets } from "lucide-react"

export function SiembraTerrestreEquipos() {
  const equipos = [
    {
      nombre: "Sembradora Agrometal TX-MEGA",
      descripcion:
        "16 surcos a 52 cm entre hileras, neumática con siembra variable de fertilizante y semilla, ideal para maíces.",
      icono: Settings,
    },
    {
      nombre: "Sembradora JUBER 5200",
      descripcion:
        "Siembra grano grueso y fino a diversas distancias (17,5 cm, 35 cm, 52 cm, 70 cm), con sistema de dosificación Master Mac y siembra variable.",
      icono: Gauge,
    },
    {
      nombre: "Sembradora Crucianelli GRINGA",
      descripcion:
        "28 cuerpos a 35 cm, con sistema PRECISION PLANTING, neumática y variable en fertilizante y semilla. Ideal para maíces, con excelentes resultados en uniformidad de nacimientos.",
      icono: Leaf,
    },
    {
      nombre: "Sembradora SuperDancar",
      descripcion: "12 cuerpos a 52 cm, neumática y variable Mastermac, ideal para suelos húmedos.",
      icono: Droplets,
    },
  ]

  return (
    <div className="space-y-6">
      {equipos.map((equipo, index) => (
        <div
          key={index}
          className="flex items-start gap-6 p-6 rounded-lg transition-all hover:bg-logo-blue/5"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-logo-blue/10 text-logo-blue">
            <equipo.icono className="h-7 w-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-wider text-gray-900">{equipo.nombre}</h3>
            <p className="text-gray-600 tracking-wider">{equipo.descripcion}</p>
          </div>
        </div>
      ))}

      <div className="mt-6 p-6 border-l-4 border-logo-blue bg-logo-blue/5 rounded-r-lg">
        <p className="italic text-gray-600 tracking-wider">
          "Nuestros equipos de siembra terrestre están equipados con la última tecnología para garantizar una siembra
          precisa y uniforme, maximizando el rendimiento de sus cultivos."
        </p>
      </div>
    </div>
  )
}

