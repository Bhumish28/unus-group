"use client";

import {
  useEffect,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Fence,
  Hammer,
  Home,
  Layers3,
  Leaf,
  MapPin,
  Sun,
  Warehouse,
} from "lucide-react";

/* =========================================================
   SERVICES / APPLICATIONS
========================================================= */

const services = [
  {
    icon: Home,
    title: "Homes & Cottages",
    description:
      "Ground screw foundation systems for residential homes, cottages and lightweight structures.",
  },

  {
    icon: Sun,
    title: "Solar Foundations",
    description:
      "Steel ground screw support systems suitable for solar mounting and associated structures.",
  },

  {
    icon: Fence,
    title: "Fencing Foundations",
    description:
      "Efficient foundation support for fencing and boundary installations with reduced excavation.",
  },

  {
    icon: Warehouse,
    title: "Temporary Structures",
    description:
      "Practical foundation systems for temporary, adaptable and lightweight structural applications.",
  },

  {
    icon: Hammer,
    title: "Ground Screw Installation",
    description:
      "Steel foundations installed directly into soil to reduce heavy excavation and conventional concrete work.",
  },
];

/* =========================================================
   SLIDESHOW PROJECTS

   Machan is handled separately as BEFORE / AFTER.
========================================================= */

const projects = [
  {
    title: "Cottage on Loose Sea-Sand Soil",

    location:
      "Ground Screw Cottage Project",

    description:
      "A successful cottage project constructed on loose sea-sand soil using ground screw foundations.",

    images: [
      "/business/homes/sea-sand-1.png",
      "/business/homes/sea-sand-2.png",
      "/business/homes/sea-sand-3.png",
      "/business/homes/sea-sand-4.png",
    ],
  },

  {
    title: "Ground Screw Cottage — Goa",

    location:
      "Goa",

    description:
      "A cottage project in Goa using ground screw foundations as part of the UNUS Homes portfolio.",

    images: [
      "/business/homes/goa-1.png",
      "/business/homes/goa-2.png",
      "/business/homes/goa-3.png",
      "/business/homes/goa-4.png",
    ],
  },
];

/* =========================================================
   PROJECT GALLERY
========================================================= */

const galleryImages = [
  "/business/homes/ground-screw-1.png",
  "/business/homes/ground-screw-2.png",
  "/business/homes/ground-screw-3.png",
  "/business/homes/ground-screw-4.png",

  "/business/homes/machan-before.png",
  "/business/homes/machan-after.png",

  "/business/homes/sea-sand-1.png",
  "/business/homes/sea-sand-2.png",
  "/business/homes/sea-sand-3.png",
  "/business/homes/sea-sand-4.png",

  "/business/homes/goa-1.png",
  "/business/homes/goa-2.png",
  "/business/homes/goa-3.png",
  "/business/homes/goa-4.png",
];

/* =========================================================
   CONSTRUCTION SPECIFICATIONS
========================================================= */

const specifications = [
  {
    label: "Foundation",
    value: "Ground Screw",
  },

  {
    label: "Structure",
    value: "Galvanized Structure",
  },

  {
    label: "Wall Design",
    value: "Siporex Wall Panel",
  },

  {
    label: "Plaster",
    value:
      "Internal 12–15 mm plaster and external 20–25 mm plaster with Ultratech cement",
  },

  {
    label: "Roof",
    value:
      "UPVC triple-coated fibre sheet with drain gutter, ridge end cap and waterproof coated screws",
  },

  {
    label: "Insulation",
    value: "50 mm Rockwool Insulation",
  },

  {
    label: "Windows",
    value:
      "Aluminium 3-track sliding windows with 6 mm toughened glass",
  },

  {
    label: "Doors",
    value:
      "Main door in casement series with key lock system",
  },

  {
    label: "Plumbing",
    value:
      "CP sanitary fittings specified with Jaguar antique copper quality",
  },

  {
    label: "Electrical",
    value:
      "Legrand switches and Polycab wires",
  },

  {
    label: "Tiles",
    value:
      "Varmora vitrified tiles",
  },

  {
    label: "Colouring",
    value:
      "External Apex and internal emulsion",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function HomesPage() {
  return (
    <main
      className="
        overflow-hidden
        bg-[#F7F4EE]
        text-[#26251F]
      "
    >

      {/* =====================================================
          TOP NAV
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          z-50
          w-full
          px-6
          py-6
          lg:px-10
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
          "
        >
          <Link
            href="/"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[15px]
              font-bold
              text-white
            "
          >
            <span
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-black/15
                backdrop-blur-md
                transition-all
                group-hover:bg-white
                group-hover:text-[#29261F]
              "
            >
              <ArrowLeft size={19} />
            </span>

            Back to UNUS Group
          </Link>

          <Image
            src="/company-logos/unus-homes.png"
            alt="UNUS Homes logo"
            width={120}
            height={70}
            className="
              max-h-[58px]
              w-auto
              object-contain
            "
          />
        </div>
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          min-h-[760px]
          overflow-hidden
          bg-[#24231E]
        "
      >
        <Image
          src="/hero/homes.jpg"
          alt="UNUS Homes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#181812]/95
            via-[#201F19]/78
            to-[#201F19]/25
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/55
            via-transparent
            to-black/20
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[760px]
            max-w-7xl
            items-center
            px-6
            pb-16
            pt-32
            lg:px-8
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="max-w-4xl"
          >
            <p
              className="
                text-base
                font-bold
                uppercase
                tracking-[0.20em]
                text-[#DCB77D]
                md:text-lg
              "
            >
              UNUS Homes
            </p>

            <h1
              className="
                mt-6
                max-w-4xl
                text-5xl
                font-semibold
                leading-[1.02]
                tracking-[-0.03em]
                text-white
                md:text-6xl
                lg:text-7xl
              "
            >
              Smarter foundations.{" "}

              <span className="text-[#E3D8C5]">
                Sustainable living.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-xl
                leading-9
                text-white/80
                md:text-[21px]
              "
            >
              Ground screw foundation systems designed to reduce
              excavation, accelerate construction and support
              modern homes and lightweight structures.
            </p>

            <div
              className="
                mt-9
                flex
                flex-wrap
                gap-3
              "
            >
              {[
                "Ground Screws",
                "Homes",
                "Cottages",
                "Solar",
                "Fencing",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-2
                    text-[15px]
                    font-semibold
                    text-white/85
                    backdrop-blur-md
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          UNDERSTANDING THE DOMAIN
      ====================================================== */}

      <section
        className="
          px-6
          py-24
          lg:px-8
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p
              className="
                text-base
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#9A7040]
                md:text-lg
              "
            >
              Understanding the Domain
            </p>

            <h2
              className="
                mt-4
                max-w-2xl
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-tight
                text-[#27251F]
                md:text-5xl
                lg:text-[52px]
              "
            >
              A different way to build foundations.
            </h2>

            <p
              className="
                mt-7
                max-w-xl
                text-[19px]
                leading-9
                text-[#5B574E]
                md:text-xl
              "
            >
              A ground screw is a strong steel foundation system
              installed into the soil like a large screw to support
              buildings without extensive excavation or conventional
              heavy concrete foundations.
            </p>

            <p
              className="
                mt-5
                max-w-xl
                text-[18px]
                leading-9
                text-[#5B574E]
                md:text-[19px]
              "
            >
              The approach can reduce land disturbance and support
              faster construction while providing a flexible
              foundation solution for a range of structures.
            </p>
          </motion.div>

          {/* IMAGES */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              grid
              grid-cols-2
              gap-4
            "
          >
            <div
              className="
                relative
                col-span-2
                h-[340px]
                overflow-hidden
                rounded-[30px]
                md:h-[400px]
              "
            >
              <Image
                src="/business/homes/ground-screw-1.png"
                alt="UNUS Homes ground screw system"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="
                relative
                h-[220px]
                overflow-hidden
                rounded-[26px]
              "
            >
              <Image
                src="/business/homes/ground-screw-2.png"
                alt="Ground screw installation"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="
                relative
                h-[220px]
                overflow-hidden
                rounded-[26px]
              "
            >
              <Image
                src="/business/homes/ground-screw-3.png"
                alt="Ground screw foundation"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          OUR APPROACH
      ====================================================== */}

      <section
        className="
          bg-[#26251F]
          px-6
          py-20
          text-white
          lg:px-8
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-base
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#D6AE75]
              "
            >
              Our Approach
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-semibold
                leading-tight
                md:text-5xl
              "
            >
              Faster.
              <br />
              Cleaner.
              <br />
              Flexible.
            </h2>
          </div>

          <div>
            <p
              className="
                text-xl
                leading-9
                text-white/80
              "
            >
              UNUS Homes focuses on construction using ground screw
              foundations that can reduce heavy excavation and help
              minimise disturbance to the surrounding land.
            </p>

            <p
              className="
                mt-5
                text-xl
                leading-9
                text-white/80
              "
            >
              The concept combines contemporary construction with
              practical foundation technology for cottages, homes,
              solar installations, fencing and temporary structures.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        className="
          bg-white
          px-6
          py-24
          lg:px-8
          lg:py-28
        "
      >
        <div className="mx-auto max-w-7xl">

          <p
            className="
              text-base
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#9A7040]
              md:text-lg
            "
          >
            Our Services
          </p>

          <h2
            className="
              mt-4
              max-w-4xl
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              text-[#27251F]
              md:text-5xl
            "
          >
            Ground screw solutions for multiple applications.
          </h2>

          <div
            className="
              mt-12
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-5
            "
          >
            {services.map(
              (service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
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
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="
                      rounded-[26px]
                      border
                      border-[#DED9D0]
                      bg-[#FAF8F4]
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#CDBD9F]
                      hover:shadow-lg
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
                        bg-[#EEE8DE]
                        text-[#86623A]
                      "
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                      />
                    </div>

                    <h3
                      className="
                        mt-6
                        text-xl
                        font-semibold
                        leading-7
                        text-[#2B2923]
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-[16px]
                        leading-7
                        text-[#625E55]
                      "
                    >
                      {service.description}
                    </p>
                  </motion.article>
                );
              }
            )}
          </div>

          {/* APPLICATION IMAGES */}

          <div
            className="
              mt-10
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {[
              "/business/homes/ground-screw-4.png",
              "/business/homes/application-solar.png",
              "/business/homes/application-fencing.png",
              "/business/homes/application-structure.png",
            ].map((src) => (
              <div
                key={src}
                className="
                  relative
                  h-[230px]
                  overflow-hidden
                  rounded-[24px]
                "
              >
                <Image
                  src={src}
                  alt="UNUS Homes application"
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT EXPERIENCE
      ====================================================== */}

      <section
        className="
          bg-[#24231E]
          px-6
          py-24
          text-white
          lg:px-8
          lg:py-28
        "
      >
        <div className="mx-auto max-w-7xl">

          <p
            className="
              text-base
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#D6AC73]
            "
          >
            Selected Project Experience
          </p>

          <h2
            className="
              mt-4
              max-w-4xl
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              md:text-5xl
            "
          >
            Real ground screw projects delivered by UNUS Homes.
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-white/65
            "
          >
            Project documentation from the UNUS Homes portfolio,
            including before-and-after work and completed cottage
            projects.
          </p>

          {/* =================================================
              MACHAN BEFORE / AFTER
          ================================================== */}

          <MachanBeforeAfter />

          {/* =================================================
              OTHER PROJECT SLIDESHOWS
          ================================================== */}

          <div
            className="
              mt-8
              grid
              items-stretch
              gap-6
              lg:grid-cols-2
            "
          >
            {projects.map(
              (project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  location={project.location}
                  description={project.description}
                  images={project.images}
                />
              )
            )}
          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT GALLERY
      ====================================================== */}

      <section
        className="
          bg-white
          px-6
          py-24
          lg:px-8
          lg:py-28
        "
      >
        <div className="mx-auto max-w-7xl">

          <div
            className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-base
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#9A7040]
                "
              >
                Project Gallery
              </p>

              <h2
                className="
                  mt-4
                  text-4xl
                  font-semibold
                  tracking-tight
                  text-[#27251F]
                  md:text-5xl
                "
              >
                Ground screw construction in action.
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-lg
                leading-8
                text-[#5F5B52]
              "
            >
              A collection of construction, foundation and cottage
              visuals from the UNUS Homes portfolio.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              auto-rows-[170px]
              grid-cols-2
              gap-4
              md:auto-rows-[190px]
              md:grid-cols-4
            "
          >
            {galleryImages.map(
              (src, index) => (
                <motion.div
                  key={src}
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay:
                      (index % 4) * 0.05,
                  }}
                  className={`
                    relative
                    overflow-hidden
                    rounded-[24px]

                    ${
                      index === 0 ||
                      index === 4 ||
                      index === 9
                        ? "col-span-2 row-span-2"
                        : ""
                    }
                  `}
                >
                  <Image
                    src={src}
                    alt="UNUS Homes project"
                    fill
                    sizes="
                      (max-width: 768px) 50vw,
                      25vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSTRUCTION SPECIFICATION
      ====================================================== */}

      <section
        className="
          bg-[#EEEAE2]
          px-6
          py-24
          lg:px-8
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12
            lg:grid-cols-[0.7fr_1.3fr]
          "
        >
          <div>
            <p
              className="
                text-base
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#9A7040]
                md:text-lg
              "
            >
              Home Specification
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-semibold
                leading-tight
                tracking-tight
                text-[#27251F]
                md:text-5xl
              "
            >
              A complete ground screw home system.
            </h2>

            <p
              className="
                mt-6
                max-w-md
                text-[19px]
                leading-9
                text-[#575349]
                md:text-xl
              "
            >
              The company profile presents a G+1 three-bedroom
              concept with approximately 1,750 sq. ft. of
              construction area.
            </p>

            <div
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#27251F]
                px-5
                py-3
                text-white
              "
            >
              <Layers3 size={19} />

              <span
                className="
                  text-[15px]
                  font-semibold
                "
              >
                G+1 · 3 BHK · 1750 sq. ft.
              </span>
            </div>
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {specifications.map(
              (spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay:
                      (index % 4) * 0.05,
                  }}
                  className="
                    min-h-[145px]
                    rounded-[22px]
                    border
                    border-[#D4CEC2]
                    bg-white
                    px-6
                    py-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#BEAB8C]
                    hover:shadow-md
                  "
                >
                  <span
                    className="
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#9A7040]
                    "
                  >
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <h3
                    className="
                      mt-3
                      text-[20px]
                      font-semibold
                      text-[#292720]
                      md:text-[22px]
                    "
                  >
                    {spec.label}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[16px]
                      leading-7
                      text-[#5F5A50]
                    "
                  >
                    {spec.value}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY GROUND SCREWS
      ====================================================== */}

      <section
        className="
          bg-[#FAF8F4]
          px-6
          py-24
          lg:px-8
          lg:py-28
        "
      >
        <div className="mx-auto max-w-7xl">

          <p
            className="
              text-base
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#9A7040]
            "
          >
            Why Ground Screws?
          </p>

          <h2
            className="
              mt-4
              max-w-3xl
              text-4xl
              font-semibold
              tracking-tight
              text-[#27251F]
              md:text-5xl
            "
          >
            Modern foundations with less site disturbance.
          </h2>

          <div
            className="
              mt-10
              grid
              gap-5
              md:grid-cols-3
            "
          >
            {[
              {
                icon: Hammer,
                title:
                  "Reduced Excavation",
                text:
                  "Ground screws are installed directly into the soil and reduce the need for extensive excavation.",
              },

              {
                icon: Leaf,
                title:
                  "Lower Land Disturbance",
                text:
                  "The concept is designed around reduced disturbance to the surrounding site.",
              },

              {
                icon: Check,
                title:
                  "Faster Construction",
                text:
                  "The UNUS Homes profile highlights faster construction as one of the key advantages of the system.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-[26px]
                    border
                    border-[#DED8CD]
                    bg-white
                    p-7
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
                      bg-[#EEE8DE]
                      text-[#86623A]
                    "
                  >
                    <Icon size={23} />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-[22px]
                      font-semibold
                      text-[#292720]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[17px]
                      leading-8
                      text-[#615C53]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT BUSINESS
      ====================================================== */}

      <section
        className="
          bg-[#24231E]
          px-6
          py-14
          text-white
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-white/45
              "
            >
              UNUS Group
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-semibold
                md:text-3xl
              "
            >
              Continue exploring our businesses.
            </h3>
          </div>

          <Link
            href="/companies/interior"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-7
              py-4
              text-[16px]
              font-bold
              text-[#24231E]
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
            "
          >
            Explore UNUS Interior

            <ArrowRight
              size={20}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </section>

    </main>
  );
}

/* =========================================================
   MACHAN BEFORE / AFTER
========================================================= */

function MachanBeforeAfter() {
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
        duration: 0.65,
      }}
      className="
        mt-12
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-white/[0.05]
      "
    >
      {/* HEADER */}

      <div
        className="
          flex
          flex-col
          gap-5
          border-b
          border-white/10
          px-7
          py-7
          md:flex-row
          md:items-end
          md:justify-between
          md:px-9
        "
      >
        <div>
          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#D6AC73]
            "
          >
            <Building2 size={17} />

            Successful Project
          </div>

          <h3
            className="
              mt-3
              text-3xl
              font-semibold
              md:text-4xl
            "
          >
            Machan on Ground Screw
          </h3>
        </div>

        <p
          className="
            max-w-md
            text-[16px]
            leading-7
            text-white/60
          "
        >
          Before-and-after documentation of a completed
          UNUS Homes Machan project using the ground
          screw foundation approach.
        </p>
      </div>

      {/* BEFORE / AFTER */}

      <div
        className="
          grid
          gap-px
          bg-white/10
          md:grid-cols-2
        "
      >

        {/* BEFORE */}

        <div
          className="
            group
            relative
            h-[430px]
            overflow-hidden
            bg-[#1A1915]
          "
        >
          <Image
            src="/business/homes/machan-before.png"
            alt="Machan project before construction"
            fill
            sizes="
              (max-width: 768px) 100vw,
              50vw
            "
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
              bg-gradient-to-t
              from-black/60
              via-transparent
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-6
              left-6
            "
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-white/25
                bg-black/30
                px-4
                py-2
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                backdrop-blur-md
              "
            >
              Before
            </span>
          </div>
        </div>

        {/* AFTER */}

        <div
          className="
            group
            relative
            h-[430px]
            overflow-hidden
            bg-[#1A1915]
          "
        >
          <Image
            src="/business/homes/machan-after.png"
            alt="Machan project after completion"
            fill
            sizes="
              (max-width: 768px) 100vw,
              50vw
            "
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
              bg-gradient-to-t
              from-black/60
              via-transparent
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-6
              left-6
            "
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-[#D9B77C]/50
                bg-[#C08C48]/90
                px-4
                py-2
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                backdrop-blur-md
              "
            >
              After
            </span>
          </div>
        </div>

      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECT SLIDESHOW CARD
========================================================= */

function ProjectCard({
  title,
  location,
  description,
  images,
}: {
  title: string;
  location: string;
  description: string;
  images: string[];
}) {
  const [currentImage, setCurrentImage] =
    useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const interval =
      window.setInterval(() => {
        setCurrentImage(
          (previous) =>
            (previous + 1) %
            images.length
        );
      }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [images.length]);

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
      }}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.05]
      "
    >

      {/* IMAGE SLIDESHOW */}

      <div
        className="
          relative
          h-[350px]
          overflow-hidden
          bg-[#171711]
        "
      >
        <AnimatePresence mode="sync">

          <motion.div
            key={images[currentImage]}
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
              duration: 0.75,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0
            "
          >
            <Image
              src={images[currentImage]}
              alt={`${title} project image ${
                currentImage + 1
              }`}
              fill
              sizes="
                (max-width: 1024px) 100vw,
                50vw
              "
              className="object-cover"
            />
          </motion.div>

        </AnimatePresence>

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/55
            via-black/5
            to-transparent
          "
        />

        {/* COUNTER */}

        <div
          className="
            absolute
            right-5
            top-5
            rounded-full
            border
            border-white/20
            bg-black/25
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
            images.length
          ).padStart(2, "0")}
        </div>

        {/* INDICATORS */}

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
          {images.map(
            (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show ${title} image ${
                  index + 1
                }`}
                onClick={() =>
                  setCurrentImage(index)
                }
                className={`
                  h-[3px]
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    currentImage === index
                      ? "w-9 bg-white"
                      : "w-4 bg-white/40 hover:bg-white/70"
                  }
                `}
              />
            )
          )}
        </div>

      </div>

      {/* INFORMATION */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-7
          md:p-8
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            font-bold
            uppercase
            tracking-[0.14em]
            text-[#D6AC73]
          "
        >
          <Building2 size={17} />

          Project Experience
        </div>

        <h3
          className="
            mt-4
            text-[27px]
            font-semibold
            leading-tight
            md:text-[30px]
          "
        >
          {title}
        </h3>

        <div
          className="
            mt-4
            flex
            items-start
            gap-2
            text-[16px]
            leading-7
            text-white/65
          "
        >
          <MapPin
            size={18}
            className="
              mt-1
              shrink-0
            "
          />

          {location}
        </div>

        <div
          className="
            my-6
            h-px
            w-full
            bg-white/10
          "
        />

        <p
          className="
            text-[17px]
            leading-8
            text-white/75
          "
        >
          {description}
        </p>

      </div>

    </motion.article>
  );
}