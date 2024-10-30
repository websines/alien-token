"use client";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-neutral-900 relative">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
