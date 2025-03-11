import { Skeleton } from "@/components/ui/skeleton"

export function OtrosServiciosSkeletonLoader() {
  return (
    <div className="w-[95%] mx-auto space-y-16">
      {/* Encabezado skeleton */}
      <div className="text-center mb-8 space-y-4">
        <div className="flex justify-center">
          <Skeleton className="h-6 w-48 rounded-full" />
        </div>
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
      </div>

      {/* Imagen principal skeleton */}
      <Skeleton className="w-full h-[400px] rounded-xl" />

      {/* Tarjetas de servicios skeletons */}
      <div>
        <Skeleton className="h-10 w-1/3 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-gray-100 shadow-md">
              <Skeleton className="h-48 w-full" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="pt-2">
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de beneficios skeleton */}
      <div className="rounded-xl p-8 border border-gray-100">
        <Skeleton className="h-8 w-1/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3">
              <Skeleton className="h-14 w-14 rounded-full" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA final skeleton */}
      <div className="text-center space-y-4">
        <Skeleton className="h-8 w-1/3 mx-auto" />
        <Skeleton className="h-4 w-2/3 mx-auto" />
        <div className="flex justify-center mt-6">
          <Skeleton className="h-14 w-48 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

