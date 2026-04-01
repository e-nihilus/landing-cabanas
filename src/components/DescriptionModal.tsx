"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface DescriptionModalProps {
  title: string;
  description: string;
}

export default function DescriptionModal({
  title,
  description,
}: DescriptionModalProps) {
  const t = useTranslations("PropertyPage");
  const [isOpen, setIsOpen] = useState(false);

  // Mostrar solo las primeras dos líneas
  const preview = description.split("\n").slice(0, 3).join("\n") + "...";

  return (
    <>
      <div>
        <p className="text-text-muted leading-relaxed mb-4 whitespace-pre-wrap">
          {preview}
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="text-primary hover:text-primary-light font-semibold transition-colors"
        >
          {t("readMore")}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-text-dark">
                {title}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-dark text-2xl transition-colors ml-4 flex-shrink-0"
              >
                ×
              </button>
            </div>

            <div className="text-text-muted leading-relaxed whitespace-pre-wrap">
              {description}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-8 w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-semibold transition-all duration-300"
            >
              {t("close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
