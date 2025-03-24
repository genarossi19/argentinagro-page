import { Skeleton } from "@/components/ui/skeleton";

export function ServiceCardSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-100 shadow-md">
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
  );
}

export function FeaturedServiceCardSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-100 shadow-md">
      <Skeleton className="h-64 w-full" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-7 w-3/4" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-5/6" />
        <div className="pt-2">
          <Skeleton className="h-5 w-32" />
        </div>
      </div>
    </div>
  );
}
