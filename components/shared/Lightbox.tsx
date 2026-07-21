"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  if (!isOpen || images.length === 0) return null;

  const image = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 p-4 text-white">
      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 hover:bg-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 hover:bg-white/20"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>

      <div className="relative mx-auto h-full max-w-6xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          priority
        />
      </div>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-slate-300">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}