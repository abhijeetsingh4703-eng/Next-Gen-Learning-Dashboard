"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
      <p className="mb-6 text-sm text-gray-400">
        We couldn&apos;t connect to the database or fetch your data.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
