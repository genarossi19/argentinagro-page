import { Skeleton } from "@/components/ui/skeleton";
import {
  ServiceCardSkeleton,
  FeaturedServiceCardSkeleton,
} from "@/components/ServiceCardSkeleton";

export function ServiciosSkeletonLoader() {
  return (
    <div className="space-y-16 mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center">
            <Skeleton className="h-6 w-48 rounded-full" />
          </div>
          <Skeleton className="h-12 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[...Array(3)].map((_, i) => (
            <FeaturedServiceCardSkeleton key={i} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Skeleton className="h-10 w-1/3 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-lg p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Skeleton className="h-10 w-1/3 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <ServiceCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
