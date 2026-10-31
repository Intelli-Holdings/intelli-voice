import { cn } from "@/lib/utils";

// Intelli brand lockup: the Intelli mark (headset arc with two sparkles) with
// the "Intelli" wordmark set beside it in the app font (Geist).
// - default: blue mark, wordmark follows the theme foreground colour.
// - `inverse`: white mark + white wordmark for always-dark surfaces
//   (e.g. the auth brand panel).
// - `mark`: the mark on its own (e.g. the app sidebar header).
// Height is controlled by the caller via className (e.g. "h-7").
export function BrandLogo({
  className,
  inverse = false,
  mark = false,
}: {
  className?: string;
  inverse?: boolean;
  mark?: boolean;
}) {
  const src = inverse ? "/intelli-mark-white.svg" : "/intelli-mark.svg";

  if (mark) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt="Intelli" className={cn("w-auto select-none", className)} />
    );
  }

  return (
    <span
      className={cn("inline-flex items-center gap-2 select-none", className)}
      aria-label="Intelli"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" aria-hidden className="h-full w-auto" />
      <span
        className={cn(
          "text-xl font-semibold leading-none tracking-tight",
          inverse ? "text-white" : "text-foreground",
        )}
      >
        Intelli
      </span>
    </span>
  );
}
