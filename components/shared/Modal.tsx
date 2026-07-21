"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
      <div
        className={cn(
          "relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl",
          className,
        )}
      >
        <div className="mb-5 flex items-center justify-between">
          {title && (
            <h2 className="text-2xl font-extrabold text-slate-950">{title}</h2>
          )}

          <button
            onClick={onClose}
            className="ml-auto rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-slate-200"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}