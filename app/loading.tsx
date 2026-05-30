export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-pulse rounded-full bg-border" />
        <p className="animate-pulse text-sm text-gray-400">Loading Dashboard...</p>
      </div>
    </div>
  );
}
