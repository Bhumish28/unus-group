"use client";

import {
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  Building2,
  Landmark,
  MapPin,
  Ruler,
} from "lucide-react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
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
  return (
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
            scroll-mt-32

            mt-12

            grid
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
            scroll-mt-32

            mt-16

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
            {/* LEFT CONTENT */}

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

            {/* RIGHT IMAGE COLLAGE */}

            <div
              className="
                grid
                min-h-[360px]
                grid-cols-2
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
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

                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    bg-black/10
                  "
                />
              </div>

              <div
                className="
                  relative
                  overflow-hidden
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

                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    bg-black/10
                  "
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            UPCOMING PROJECT
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
            scroll-mt-32

            mt-7

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
            {/* IMAGE */}

            <div
              className="
                relative

                min-h-[360px]
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
                className="object-cover"
              />
            </div>

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
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string;
    client: string;
    location: string;
    service: string;
    description: string;
    images: string[];
  };

  index: number;
}) {
  const [currentImage, setCurrentImage] =
    useState(0);

  /* =====================================================
     AUTO CHANGE PHOTO EVERY 4 SECONDS
  ====================================================== */

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
          PROJECT PHOTO SLIDESHOW
      ================================================== */}

      <div
        className="
          relative

          h-[300px]

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
              className="object-cover"
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

        {/* SERVICE LABEL */}

        <div
          className="
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

        {/* IMAGE COUNT */}

        <div
          className="
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

        {/* IMAGE INDICATORS */}

        <div
          className="
            absolute
            bottom-5
            left-5

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
        <div
          className="
            flex
            items-center
            gap-2

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

        <h3
          className="
            mt-4

            text-[25px]
            font-semibold

            leading-tight
            tracking-[-0.02em]

            text-[#17211D]
          "
        >
          {project.title}
        </h3>

        {/* DETAILS */}

        <div
          className="
            mt-5
            space-y-3
          "
        >
          {/* CLIENT */}

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

          {/* LOCATION */}

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

          {/* SERVICE */}

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

        {/* DIVIDER */}

        <div
          className="
            my-6

            h-px

            bg-[#E1E8E4]
          "
        />

        {/* DESCRIPTION */}

        <p
          className="
            text-[16px]
            leading-8

            text-[#65736C]
          "
        >
          {project.description}
        </p>

        {/* NO ARROW OR BUTTON BELOW */}
      </div>
    </motion.article>
  );
}