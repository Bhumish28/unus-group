"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Expand,
  Landmark,
  MapPin,
  Ruler,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Project = {
  title: string;
  client: string;
  location: string;
  service: string;
  description: string;
  images: string[];
  logo: string;
  logoAlt: string;
};

type LightboxData = {
  title: string;
  images: string[];
  currentIndex: number;
};

/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Project[] = [
  {
    title:
      "360 MLD Wastewater Treatment Plant",

    client:
      "Brihanmumbai Municipal Corporation (BMC)",

    location:
      "Mumbai, Maharashtra",

    service:
      "Bar Bending Schedule (BBS)",

    description:
      "Preparing Bar Bending Schedule for actual site use, including cutting and bending requirements.",

    logo:
      "/client-logos/bmc.png",

    logoAlt:
      "Brihanmumbai Municipal Corporation logo",

    images: [
      "/business/engineering/bmc-1.png",
      "/business/engineering/bmc-2.png",
      "/business/engineering/bmc-3.png",
      "/business/engineering/bmc-4.png",
    ],
  },

  {
    title:
      "Chennai International Airport — Phase II",

    client:
      "Airports Authority of India (AAI)",

    location:
      "Chennai, Tamil Nadu",

    service:
      "Bar Bending Schedule (BBS)",

    description:
      "BBS preparation for actual site execution as part of the Chennai International Airport Phase II project.",

    logo:
      "/client-logos/aai.png",

    logoAlt:
      "Airports Authority of India logo",

    images: [
      "/business/engineering/chennai-1.png",
      "/business/engineering/chennai-2.png",
      "/business/engineering/chennai-3.png",
      "/business/engineering/chennai-4.png",
    ],
  },

  {
    title:
      "Kingsbay Highlands",

    client:
      "Project Management Consultancy",

    location:
      "Kamshet, Maval — Lonavala",

    service:
      "PMC",

    description:
      "Project management consultancy across 75+ acres and 100+ plots, covering civil works such as roads, villas, bridges, retaining works and water tanks.",

    logo:
      "/client-logos/kingsbay.png",

    logoAlt:
      "Kingsbay Highlands logo",

    images: [
      "/business/engineering/kingsbay-1.png",
      "/business/engineering/kingsbay-2.png",
      "/business/engineering/kingsbay-3.png",
    ],
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Projects() {
  const [lightbox, setLightbox] =
    useState<LightboxData | null>(null);

  const openLightbox = (
    title: string,
    images: string[],
    currentIndex = 0
  ) => {
    setLightbox({
      title,
      images,
      currentIndex,
    });
  };

  return (
    <>
      <section
        id="projects"
        className="
          scroll-mt-28
          overflow-hidden
          bg-[#F6F8F7]
          px-6
          py-24

          lg:px-8
          lg:py-28
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* =====================================================
              SECTION HEADING
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              flex
              flex-col
              gap-7

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-base
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#145A46]

                  md:text-lg
                "
              >
                Our Projects
              </p>

              <h2
                className="
                  mt-4
                  max-w-4xl
                  text-4xl
                  font-semibold
                  leading-[1.08]
                  tracking-tight
                  text-[#17211D]

                  md:text-5xl

                  lg:text-[52px]
                "
              >
                Experience across infrastructure,
                construction and{" "}

                <span className="text-[#145A46]">
                  project management.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-[17px]
                leading-8
                text-[#66736D]
              "
            >
              Selected project experience from UNUS
              Engineering & Consultant across public
              infrastructure, aviation and large-scale
              development projects.
            </p>
          </motion.div>

          {/* =====================================================
              FEATURED PROJECT CARDS
          ====================================================== */}

          <div
            id="ongoing-projects"
            className="
              mt-12
              grid
              scroll-mt-32
              gap-7

              lg:grid-cols-3
            "
          >
            {projects.map(
              (project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onOpen={openLightbox}
                />
              )
            )}
          </div>

          {/* =====================================================
              GOVERNMENT / PUBLIC AUTHORITY PROJECTS
          ====================================================== */}

          <motion.div
            id="government-projects"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              mt-16
              scroll-mt-32
              overflow-hidden
              rounded-[34px]
              bg-[#123E31]
              text-white
            "
          >
            <div
              className="
                grid

                lg:grid-cols-[0.9fr_1.1fr]
              "
            >
              {/* LEFT */}

              <div
                className="
                  px-8
                  py-10

                  md:px-10
                  md:py-12
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/10
                  "
                >
                  <Landmark size={24} />
                </div>

                <p
                  className="
                    mt-7
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white/60
                  "
                >
                  Government & Public Authority
                  Projects
                </p>

                <h3
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                    leading-tight

                    md:text-4xl
                  "
                >
                  Experience supporting major public
                  infrastructure.
                </h3>

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-[17px]
                    leading-8
                    text-white/70
                  "
                >
                  UNUS Engineering&apos;s project
                  portfolio includes work connected
                  with Brihanmumbai Municipal
                  Corporation and the Airports
                  Authority of India.
                </p>
              </div>

              {/* IMAGES */}

              <div
                className="
                  grid
                  min-h-[360px]
                  grid-cols-2
                "
              >
                {/* BMC */}

                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      projects[0].title,
                      projects[0].images,
                      1
                    )
                  }
                  className="
                    group
                    relative
                    cursor-zoom-in
                    overflow-hidden
                    text-left
                  "
                >
                  <Image
                    src="/business/engineering/bmc-2.png"
                    alt="BMC wastewater treatment project"
                    fill
                    sizes="50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700

                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/10
                      transition-colors

                      group-hover:bg-black/25
                    "
                  />

                  <Expand
                    size={20}
                    className="
                      absolute
                      bottom-5
                      right-5
                      text-white
                      opacity-0
                      drop-shadow-lg
                      transition-all

                      group-hover:opacity-100
                    "
                  />
                </button>

                {/* CHENNAI */}

                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      projects[1].title,
                      projects[1].images,
                      1
                    )
                  }
                  className="
                    group
                    relative
                    cursor-zoom-in
                    overflow-hidden
                    text-left
                  "
                >
                  <Image
                    src="/business/engineering/chennai-2.png"
                    alt="Chennai International Airport Phase II"
                    fill
                    sizes="50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700

                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/10
                      transition-colors

                      group-hover:bg-black/25
                    "
                  />

                  <Expand
                    size={20}
                    className="
                      absolute
                      bottom-5
                      right-5
                      text-white
                      opacity-0
                      drop-shadow-lg
                      transition-all

                      group-hover:opacity-100
                    "
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              UPCOMING PROJECT — AAM BAGH
          ====================================================== */}

          <motion.div
            id="upcoming-projects"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              mt-7
              scroll-mt-32
              overflow-hidden
              rounded-[32px]
              border
              border-[#DBE4DF]
              bg-white
            "
          >
            <div
              className="
                grid

                lg:grid-cols-[1fr_1fr]
                lg:items-stretch
              "
            >
              {/* =================================================
                  AAM BAGH IMAGE — CLICK TO OPEN
              ================================================== */}

              <button
                type="button"
                onClick={() =>
                  openLightbox(
                    "The Aam Bagh",
                    [
                      "/business/engineering/aam-bagh-plan.png",
                    ],
                    0
                  )
                }
                className="
                  group
                  relative
                  min-h-[360px]
                  cursor-zoom-in
                  overflow-hidden
                  text-left
                "
              >
                <Image
                  src="/business/engineering/aam-bagh-plan.png"
                  alt="The Aam Bagh upcoming project"
                  fill
                  sizes="
                    (max-width: 1024px) 100vw,
                    50vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700

                    group-hover:scale-105
                  "
                />

                {/* HOVER OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-300

                    group-hover:bg-black/20
                  "
                />

                {/* VIEW FULLSCREEN */}

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-black/45
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    opacity-100
                    backdrop-blur-md
                    transition-all

                    lg:translate-y-2
                    lg:opacity-0

                    lg:group-hover:translate-y-0
                    lg:group-hover:opacity-100
                  "
                >
                  <Expand size={16} />

                  View Fullscreen
                </div>
              </button>

              {/* CONTENT */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  px-8
                  py-10

                  md:px-10
                  md:py-12
                "
              >
                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#B96832]
                  "
                >
                  Upcoming Project
                </p>

                <h3
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-[#17211D]

                    md:text-4xl
                  "
                >
                  The Aam Bagh
                </h3>

                <div
                  className="
                    mt-4
                    flex
                    items-start
                    gap-2
                    text-[16px]
                    text-[#66736D]
                  "
                >
                  <MapPin
                    size={18}
                    className="
                      mt-1
                      shrink-0
                      text-[#145A46]
                    "
                  />

                  Vengurla, Sindhudurg —
                  Maharashtra / Goa
                </div>

                <p
                  className="
                    mt-6
                    max-w-lg
                    text-[17px]
                    leading-8
                    text-[#5E6B64]
                  "
                >
                  Listed in the UNUS company profile
                  as an upcoming development project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FULLSCREEN PROJECT LIGHTBOX
      ========================================================= */}

      <AnimatePresence>
        {lightbox && (
          <ProjectLightbox
            key={lightbox.title}
            data={lightbox}
            onClose={() =>
              setLightbox(null)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;

  onOpen: (
    title: string,
    images: string[],
    index: number
  ) => void;
}) {
  const [currentImage, setCurrentImage] =
    useState(0);

  /* AUTO SLIDESHOW */

  useEffect(() => {
    if (project.images.length <= 1) {
      return;
    }

    const interval =
      window.setInterval(() => {
        setCurrentImage(
          (previous) =>
            (previous + 1) %
            project.images.length
        );
      }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [project.images.length]);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-[#DCE5E0]
        bg-white
        shadow-[0_10px_35px_rgba(20,50,38,0.05)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(20,50,38,0.10)]
      "
    >
      {/* =================================================
          PHOTO
      ================================================== */}

      <div
        onClick={() =>
          onOpen(
            project.title,
            project.images,
            currentImage
          )
        }
        className="
          relative
          h-[300px]
          cursor-zoom-in
          overflow-hidden
          bg-[#DDE4E0]
        "
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={
              project.images[
                currentImage
              ]
            }
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
              scale: 1.02,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0
            "
          >
            <Image
              src={
                project.images[
                  currentImage
                ]
              }
              alt={`${project.title} image ${
                currentImage + 1
              }`}
              fill
              sizes="
                (max-width: 1024px) 100vw,
                33vw
              "
              className="
                object-cover
                transition-transform
                duration-700

                lg:group-hover:scale-[1.03]
              "
            />
          </motion.div>
        </AnimatePresence>

        {/* GRADIENT */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
          "
        />

        {/* SERVICE */}

        <div
          className="
            pointer-events-none
            absolute
            left-5
            top-5
            rounded-full
            bg-white/90
            px-4
            py-2
            text-xs
            font-bold
            uppercase
            tracking-[0.12em]
            text-[#145A46]
            backdrop-blur-md
          "
        >
          {project.service}
        </div>

        {/* COUNTER */}

        <div
          className="
            pointer-events-none
            absolute
            right-5
            top-5
            rounded-full
            bg-black/35
            px-3
            py-2
            text-xs
            font-semibold
            text-white
            backdrop-blur-md
          "
        >
          {String(
            currentImage + 1
          ).padStart(2, "0")}
          {" / "}
          {String(
            project.images.length
          ).padStart(2, "0")}
        </div>

        {/* INDICATORS */}

        <div
          onClick={(event) =>
            event.stopPropagation()
          }
          className="
            absolute
            bottom-5
            left-5
            z-10
            flex
            items-center
            gap-2
          "
        >
          {project.images.map(
            (_, imageIndex) => (
              <button
                key={imageIndex}
                type="button"
                aria-label={`Show ${
                  project.title
                } image ${
                  imageIndex + 1
                }`}
                onClick={() =>
                  setCurrentImage(
                    imageIndex
                  )
                }
                className={`
                  h-[3px]
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    currentImage ===
                    imageIndex
                      ? "w-8 bg-white"
                      : "w-4 bg-white/40 hover:bg-white/70"
                  }
                `}
              />
            )
          )}
        </div>

        {/* EXPAND ICON */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-5
            right-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black/40
            text-white
            backdrop-blur-md
            transition-all

            lg:translate-y-2
            lg:opacity-0

            lg:group-hover:translate-y-0
            lg:group-hover:opacity-100
          "
        >
          <Expand size={17} />
        </div>
      </div>

      {/* =================================================
          PROJECT INFORMATION
      ================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-7
        "
      >
        {/* LABEL + LOGO */}

        <div
          className="
            flex
            min-h-[70px]
            items-start
            justify-between
            gap-4
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              pt-2
              text-xs
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#B96832]
            "
          >
            <Building2 size={16} />

            Featured Project
          </div>

          <div
            className="
              flex
              h-[64px]
              w-[88px]
              shrink-0
              items-center
              justify-center
              rounded-[16px]
              border
              border-[#E1E8E4]
              bg-white
              p-2.5
              shadow-[0_5px_18px_rgba(20,50,38,0.05)]
            "
          >
            <Image
              src={project.logo}
              alt={project.logoAlt}
              width={80}
              height={55}
              className="
                max-h-[48px]
                max-w-[70px]
                object-contain
              "
            />
          </div>
        </div>

        <h3
          className="
            mt-3
            text-[25px]
            font-semibold
            leading-tight
            tracking-[-0.02em]
            text-[#17211D]
          "
        >
          {project.title}
        </h3>

        <div
          className="
            mt-5
            space-y-3
          "
        >
          <div
            className="
              flex
              items-start
              gap-3
              text-[15px]
              leading-6
              text-[#56645D]
            "
          >
            <Landmark
              size={17}
              className="
                mt-1
                shrink-0
                text-[#145A46]
              "
            />

            {project.client}
          </div>

          <div
            className="
              flex
              items-start
              gap-3
              text-[15px]
              leading-6
              text-[#56645D]
            "
          >
            <MapPin
              size={17}
              className="
                mt-1
                shrink-0
                text-[#145A46]
              "
            />

            {project.location}
          </div>

          <div
            className="
              flex
              items-start
              gap-3
              text-[15px]
              leading-6
              text-[#56645D]
            "
          >
            <Ruler
              size={17}
              className="
                mt-1
                shrink-0
                text-[#145A46]
              "
            />

            {project.service}
          </div>
        </div>

        <div
          className="
            my-6
            h-px
            bg-[#E1E8E4]
          "
        />

        <p
          className="
            text-[16px]
            leading-8
            text-[#65736C]
          "
        >
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   FULLSCREEN LIGHTBOX
========================================================= */

function ProjectLightbox({
  data,
  onClose,
}: {
  data: LightboxData;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] =
    useState(data.currentIndex);

  const hasMultiple =
    data.images.length > 1;

  const previousImage = () => {
    setCurrentIndex(
      (previous) =>
        previous === 0
          ? data.images.length - 1
          : previous - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex(
      (previous) =>
        (previous + 1) %
        data.images.length
    );
  };

  /* KEYBOARD CONTROLS + LOCK SCROLL */

  useEffect(() => {
    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyboard = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (
        event.key ===
          "ArrowRight" &&
        hasMultiple
      ) {
        nextImage();
      }

      if (
        event.key ===
          "ArrowLeft" &&
        hasMultiple
      ) {
        previousImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      document.body.style.overflow =
        originalOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [hasMultiple, onClose]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-center
        justify-center
        bg-black/90
        px-4
        py-6
        backdrop-blur-md

        sm:px-8
      "
    >
      {/* CLOSE */}

      <button
        type="button"
        aria-label="Close fullscreen image"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className="
          absolute
          right-5
          top-5
          z-30
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/15
          bg-white/10
          text-white
          backdrop-blur-md
          transition-all

          hover:bg-white
          hover:text-black

          sm:right-8
          sm:top-8
        "
      >
        <X size={21} />
      </button>

      {/* MAIN */}

      <div
        onClick={(event) =>
          event.stopPropagation()
        }
        className="
          relative
          flex
          h-full
          w-full
          max-w-[1500px]
          flex-col
          items-center
          justify-center
        "
      >
        {/* IMAGE */}

        <div
          className="
            relative
            h-[72vh]
            w-full
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={
                data.images[
                  currentIndex
                ]
              }
              initial={{
                opacity: 0,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                absolute
                inset-0
              "
            >
              <Image
                src={
                  data.images[
                    currentIndex
                  ]
                }
                alt={`${data.title} fullscreen image`}
                fill
                priority
                sizes="100vw"
                className="
                  object-contain
                "
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* LEFT ARROW */}

        {hasMultiple && (
          <button
            type="button"
            aria-label="Previous image"
            onClick={previousImage}
            className="
              absolute
              left-0
              top-1/2
              z-20
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/35
              text-white
              backdrop-blur-md
              transition-all

              hover:scale-105
              hover:bg-white
              hover:text-black

              sm:left-4
              sm:h-14
              sm:w-14
            "
          >
            <ChevronLeft size={27} />
          </button>
        )}

        {/* RIGHT ARROW */}

        {hasMultiple && (
          <button
            type="button"
            aria-label="Next image"
            onClick={nextImage}
            className="
              absolute
              right-0
              top-1/2
              z-20
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/35
              text-white
              backdrop-blur-md
              transition-all

              hover:scale-105
              hover:bg-white
              hover:text-black

              sm:right-4
              sm:h-14
              sm:w-14
            "
          >
            <ChevronRight size={27} />
          </button>
        )}

        {/* INFORMATION */}

        <div
          className="
            mt-2
            text-center
            text-white
          "
        >
          <h3
            className="
              text-lg
              font-semibold

              sm:text-xl
            "
          >
            {data.title}
          </h3>

          {hasMultiple && (
            <p
              className="
                mt-2
                text-sm
                text-white/55
              "
            >
              {currentIndex + 1}
              {" / "}
              {data.images.length}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}