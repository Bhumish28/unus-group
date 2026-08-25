"use client";

import {
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import Image from "next/image";

import {
  ArrowDown,
  ArrowRight,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

const slides = [
  {
    image: "/hero/engineering.png",
    label: "UNUS ENGINEERING & CONSULTANT",
    title: "Precision Behind Every Project.",
    description:
      "Quantity surveying, project management and cost control focused on accuracy, transparency and efficient execution.",
  },

  {
    image: "/hero/homes.jpg",
    label: "UNUS HOMES",
    title: "Smarter Foundations. Sustainable Living.",
    description:
      "Ground screw construction solutions designed for faster installation, reduced site disturbance and modern living.",
  },

  {
    image: "/hero/interior.jpg",
    label: "UNUS INTERIOR & DESIGN",
    title: "Spaces Designed Around You.",
    description:
      "Residential and commercial interiors combining functionality, thoughtful design and premium execution.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] =
    useState(0);

  /*
    ==========================================
    ALWAYS OPEN WEBSITE AT THE TOP ON REFRESH
    ==========================================
  */
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    /*
      Remove old #companies / #about / etc.
      when browser refreshes the page.
    */
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname +
          window.location.search
      );
    }

    const goToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    };

    /*
      Run more than once because some browsers
      attempt scroll restoration after React loads.
    */
    goToTop();

    requestAnimationFrame(() => {
      goToTop();
    });

    const timeout = window.setTimeout(() => {
      goToTop();
    }, 80);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  /*
    =====================
    HERO AUTO SLIDESHOW
    =====================
  */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (previous) =>
          (previous + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /*
    =====================
    CUSTOM SMOOTH SCROLL
    =====================
  */
  const scrollToSection = (
    sectionId: string
  ) => {
    const section =
      document.getElementById(sectionId);

    if (!section) return;

    const navbarOffset = 90;

    const position =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${sectionId}`
    );
  };

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
      "
    >

      {/* BACKGROUND SLIDER */}
      <AnimatePresence initial={false}>

        <motion.div
          key={currentSlide}
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >

          <Image
            src={
              slides[currentSlide].image
            }
            alt={
              slides[currentSlide].label
            }
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

        </motion.div>

      </AnimatePresence>

      {/* LEFT DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/70
          via-black/35
          to-black/10
        "
      />

      {/* BOTTOM OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/45
          via-transparent
          to-black/15
        "
      />

      {/* HERO CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pt-24
          lg:px-8
        "
      >

        <AnimatePresence mode="wait">

          <motion.div
            key={currentSlide}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-3xl"
          >

            {/* COMPANY NAME */}
            <p
              className="
                mb-5
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
                drop-shadow-md
                sm:text-base
                md:text-lg
              "
            >
              {
                slides[currentSlide]
                  .label
              }
            </p>

            {/* HERO TITLE */}
            <h1
              className="
                max-w-3xl
                text-5xl
                font-semibold
                leading-[1.05]
                tracking-tight
                text-white
                drop-shadow-lg
                sm:text-6xl
                lg:text-7xl
              "
            >
              {
                slides[currentSlide]
                  .title
              }
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-white/85
                md:text-lg
              "
            >
              {
                slides[currentSlide]
                  .description
              }
            </p>

            {/* HERO BUTTONS */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-4
              "
            >

              {/* EXPLORE */}
              <button
                type="button"
                onClick={() =>
                  scrollToSection(
                    "companies"
                  )
                }
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#145A46]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#0C3B2E]
                  active:scale-95
                "
              >
                Explore UNUS Group

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </button>

              {/* PROJECTS */}
              <button
                type="button"
                onClick={() =>
                  scrollToSection(
                    "projects"
                  )
                }
                className="
                  rounded-full
                  border
                  border-white/50
                  bg-white/10
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white/20
                  active:scale-95
                "
              >
                View Projects
              </button>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

      {/* SLIDE INDICATORS */}
      <div
        className="
          absolute
          bottom-9
          left-7
          z-20
          flex
          items-center
          gap-2
          lg:left-10
        "
      >

        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() =>
              setCurrentSlide(index)
            }
            aria-label={`Slide ${
              index + 1
            }`}
            className={`
              h-[3px]
              rounded-full
              transition-all
              duration-300

              ${
                currentSlide === index
                  ? "w-10 bg-white"
                  : "w-5 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}

      </div>

      {/* CENTER SCROLL BUTTON */}
      <button
        type="button"
        onClick={() =>
          scrollToSection("companies")
        }
        aria-label="Scroll down to explore"
        className="
          group
          absolute
          bottom-6
          left-1/2
          z-30

          flex
          h-16
          w-16

          -translate-x-1/2

          items-center
          justify-center

          rounded-full

          border
          border-white/70

          bg-black/15

          text-white

          opacity-70

          backdrop-blur-sm

          transition-all
          duration-300

          hover:scale-110
          hover:bg-black/25
          hover:opacity-100

          active:scale-95
        "
      >

        <ArrowDown
          size={28}
          strokeWidth={1.8}
          className="
            transition-transform
            duration-300
            group-hover:translate-y-1
          "
        />

      </button>

    </section>
  );
}