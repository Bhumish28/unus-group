"use client";

import { useEffect, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";

type OpeningType = "whatsapp" | "gmail";

export default function OpeningPage() {
  const [type, setType] = useState<OpeningType | null>(null);
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const target: OpeningType =
      params.get("target") === "gmail"
        ? "gmail"
        : "whatsapp";

    setType(target);

    // Start progress animation
    window.requestAnimationFrame(() => {
      setProgress(true);
    });

    const whatsappMessage =
      "Hi, I have a query regarding UNUS Group services. I would like to discuss my requirements with you.";

    const whatsappUrl =
      `https://wa.me/918999394694?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=unusconsultantsak@gmail.com` +
      `&su=${encodeURIComponent("UNUS Group Enquiry")}` +
      `&body=${encodeURIComponent(
        "Hi,\n\nI have a query regarding UNUS Group services. I would like to discuss my requirements with you.\n\nThank you."
      )}`;

    const destination =
      target === "gmail"
        ? gmailUrl
        : whatsappUrl;

    // Keep loading screen visible
    const timer = window.setTimeout(() => {
      window.location.href = destination;
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!type) {
    return (
      <main className="min-h-screen bg-[#F8FAF8]" />
    );
  }

  const isWhatsApp = type === "whatsapp";

  const Icon = isWhatsApp
    ? MessageCircle
    : Mail;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAF8] px-6">

      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#EAF3EE] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#F3E8DC] blur-3xl" />

      {/* CONTENT */}

      <div className="relative z-10 flex max-w-md flex-col items-center text-center">

        {/* ICON WITH ROTATING CURVE */}

        <div className="relative flex h-[92px] w-[92px] items-center justify-center">

          {/* ROTATING BORDER */}

          <div
            className="absolute inset-0 animate-spin rounded-[30px] border-[3px] border-[#DDE8E3] border-t-[#145A46]"
            style={{
              animationDuration: "1s",
            }}
          />

          {/* ICON */}

          <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-[23px] bg-[#EAF3EE] text-[#145A46]">
            <Icon
              size={30}
              strokeWidth={1.8}
            />
          </div>
        </div>

        {/* BRAND */}

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#145A46]">
          UNUS Group
        </p>

        {/* TITLE */}

        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#17211D] sm:text-4xl">
          Opening{" "}
          {isWhatsApp
            ? "WhatsApp"
            : "Gmail"}
          ...
        </h1>

        {/* DESCRIPTION */}

        <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#66736D]">
          Please wait while we connect you with the
          UNUS Group team.
        </p>

        {/* PROGRESS BAR */}

        <div className="mt-9 h-[4px] w-52 overflow-hidden rounded-full bg-[#DDE6E1]">
          <div
            className="h-full rounded-full bg-[#145A46] transition-[width] duration-[1800ms] ease-in-out"
            style={{
              width: progress
                ? "100%"
                : "0%",
            }}
          />
        </div>

        {/* STATUS */}

        <p className="mt-4 text-xs font-medium text-[#8A9690]">
          Redirecting securely...
        </p>

      </div>
    </main>
  );
}