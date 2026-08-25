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
  ChefHat,
  LampCeiling,
  LayoutDashboard,
  Palette,
  PanelsTopLeft,
  Sofa,
  Sparkles,
  WandSparkles,
} from "lucide-react";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: Sofa,
    title: "Residential Interior Design",
    description:
      "Thoughtful residential interiors designed around comfort, functionality, aesthetics and everyday living.",
  },

  {
    icon: Building2,
    title: "Commercial & Office Interiors",
    description:
      "Professional interior planning and execution for offices, commercial spaces and modern workplaces.",
  },

  {
    icon: ChefHat,
    title: "Modular Kitchen Design",
    description:
      "Modern modular kitchen solutions focused on efficient layouts, storage, usability and premium finishes.",
  },

  {
    icon: LayoutDashboard,
    title: "Space Planning",
    description:
      "Furniture layouts and space planning designed to improve movement, usability and visual balance.",
  },

  {
    icon: LampCeiling,
    title: "Ceiling & Lighting Design",
    description:
      "False ceiling and lighting concepts created to strengthen ambience, functionality and interior character.",
  },

  {
    icon: PanelsTopLeft,
    title: "Customized Furniture",
    description:
      "Furniture solutions tailored to the available space, design language and practical needs of the client.",
  },
];

/* =========================================================
   ADDITIONAL CAPABILITIES
========================================================= */

const capabilities = [
  "Living Room & Bedroom Design",
  "Wall Décor & Colour Consultation",
  "Turnkey Interior Projects",
  "Renovation & Remodeling Services",
  "Modern, Luxury & Minimalist Concepts",
  "3D Design Visualization & Planning",
  "Premium Finishes",
  "Functional & Aesthetic Design",
];

/* =========================================================
   PORTFOLIO IMAGES

   Use actual interior visuals from the PDF.
========================================================= */

const portfolioImages = [
  "/business/interior/interior-1.png",
  "/business/interior/interior-2.png",
  "/business/interior/interior-3.png",
  "/business/interior/interior-4.jpg",
  "/business/interior/interior-5.jpg",
];

/* =========================================================
   DESIGN PRINCIPLES
========================================================= */

const designPrinciples = [
  {
    title: "Creative & Modern",
    description:
      "Contemporary interior concepts built around clean planning, thoughtful detailing and modern visual language.",
  },

  {
    title: "Customized Design",
    description:
      "Design solutions shaped around each client's space, functional requirements and preferred aesthetic.",
  },

  {
    title: "High-Quality Materials",
    description:
      "Material and finish selections intended to create a refined, durable and premium interior environment.",
  },

  {
    title: "Professional Execution",
    description:
      "A structured execution approach that connects design intent with practical on-site implementation.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function InteriorPage() {
  return (
    <main
      className="
        overflow-hidden
        bg-[#F8F5F1]
        text-[#26221F]
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
                group-hover:text-[#2C2622]
              "
            >
              <ArrowLeft size={19} />
            </span>

            Back to UNUS Group
          </Link>

          <Image
            src="/company-logos/unus-interior.png"
            alt="UNUS Interior & Design logo"
            width={125}
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
          bg-[#221E1B]
        "
      >
        <Image
          src="/hero/interior.jpg"
          alt="UNUS Interior and Design"
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

            from-[#1B1715]/95
            via-[#211B18]/76
            to-[#211B18]/25
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

                text-[#D6B28B]

                md:text-lg
              "
            >
              UNUS Interior & Design
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
              Spaces designed around{" "}

              <span className="text-[#E4D5C5]">
                the way you live.
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
              Residential and commercial interiors combining
              creativity, functionality, modern design and
              premium execution.
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
                "Residential",
                "Commercial",
                "Turnkey",
                "3D Visualization",
                "Premium Finishes",
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
          {/* TEXT */}

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

                text-[#9A7154]

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

                text-[#29231F]

                md:text-5xl
                lg:text-[52px]
              "
            >
              Interior design is where function meets experience.
            </h2>

            <p
              className="
                mt-7

                max-w-xl

                text-[19px]
                leading-9

                text-[#5C554F]

                md:text-xl
              "
            >
              Interior design transforms a built space into an
              environment that is functional, comfortable and
              visually coherent.
            </p>

            <p
              className="
                mt-5

                max-w-xl

                text-[18px]
                leading-9

                text-[#5C554F]

                md:text-[19px]
              "
            >
              It brings together space planning, furniture,
              lighting, colours, materials and finishes to create
              interiors that respond to both practical needs and
              aesthetic preferences.
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
                src="/business/interior/interior-1.png"
                alt="UNUS Interior modern living space"
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
                src="/business/interior/interior-2.png"
                alt="UNUS Interior design work"
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
                src="/business/interior/interior-3.png"
                alt="UNUS Interior premium interior"
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
          bg-[#28221F]

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

                text-[#D2AC87]
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
              Stylish.
              <br />
              Functional.
              <br />
              Thoughtful.
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
              UNUS Interior transforms spaces into stylish,
              functional and inspiring environments by combining
              creativity, quality and modern design.
            </p>

            <p
              className="
                mt-5

                text-xl
                leading-9

                text-white/80
              "
            >
              The goal is to create interiors that reflect elegance
              and comfort while maintaining a practical and
              professional approach to execution.
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

              text-[#9A7154]

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

              text-[#29231F]

              md:text-5xl
            "
          >
            Complete interior solutions from planning to execution.
          </h2>

          <div
            className="
              mt-12

              grid
              gap-5

              md:grid-cols-2
              lg:grid-cols-3
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
                      border-[#E2DBD5]

                      bg-[#FAF8F6]

                      p-7

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#CEB9A9]
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

                        bg-[#EFE6E0]

                        text-[#8F684E]
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

                        text-[22px]
                        font-semibold

                        leading-7

                        text-[#2C2723]
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        text-[17px]
                        leading-8

                        text-[#625A54]
                      "
                    >
                      {service.description}
                    </p>
                  </motion.article>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          ADDITIONAL CAPABILITIES
      ====================================================== */}

      <section
        className="
          bg-[#F0EAE5]

          px-6
          py-20

          lg:px-8
          lg:py-24
        "
      >
        <div
          className="
            mx-auto

            grid
            max-w-7xl
            gap-12

            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-start
          "
        >
          <div>
            <p
              className="
                text-base
                font-bold
                uppercase

                tracking-[0.18em]

                text-[#9A7154]
              "
            >
              Design Capabilities
            </p>

            <h2
              className="
                mt-4

                text-4xl
                font-semibold

                leading-tight
                tracking-tight

                text-[#29231F]

                md:text-5xl
              "
            >
              More than decoration.
            </h2>

            <p
              className="
                mt-6

                max-w-md

                text-[19px]
                leading-9

                text-[#5B554F]
              "
            >
              UNUS Interior combines planning, customization,
              visualization and execution to deliver complete
              interior solutions.
            </p>
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {capabilities.map(
              (item, index) => (
                <motion.div
                  key={item}
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
                    flex
                    min-h-[90px]
                    items-center
                    gap-4

                    rounded-[22px]

                    border
                    border-[#D8CEC6]

                    bg-white

                    px-6
                    py-5
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-[#2B2522]

                      text-white
                    "
                  >
                    <Check size={17} />
                  </div>

                  <span
                    className="
                      text-[17px]
                      font-semibold

                      leading-7

                      text-[#302A26]
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED INTERIOR WORK
      ====================================================== */}

      <section
        className="
          bg-[#24201D]

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

              text-[#D3AE8A]
            "
          >
            Selected Interior Work
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
            A closer look at the UNUS Interior design portfolio.
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
            The company profile does not identify individual
            project names, so these visuals are presented as
            selected portfolio work rather than labelled client projects.
          </p>

          <PortfolioSlideshow />
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO GALLERY
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

                  text-[#9A7154]
                "
              >
                Interior Gallery
              </p>

              <h2
                className="
                  mt-4

                  text-4xl
                  font-semibold

                  tracking-tight

                  text-[#29231F]

                  md:text-5xl
                "
              >
                Spaces shaped with detail.
              </h2>
            </div>

            <p
              className="
                max-w-md

                text-lg
                leading-8

                text-[#5E5752]
              "
            >
              Interior visuals from the UNUS profile showing
              modern layouts, finishes, lighting and design details.
            </p>
          </div>

          <div
            className="
              mt-10

              grid
              auto-rows-[210px]
              grid-cols-2
              gap-4

              md:auto-rows-[230px]
              md:grid-cols-4
            "
          >
            {portfolioImages.map(
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

                    rounded-[26px]

                    ${
                      index === 0
                        ? "col-span-2 row-span-2"
                        : ""
                    }

                    ${
                      index === 3
                        ? "col-span-2"
                        : ""
                    }
                  `}
                >
                  <Image
                    src={src}
                    alt="UNUS Interior portfolio"
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
          DESIGN PRINCIPLES
      ====================================================== */}

      <section
        className="
          bg-[#EFE9E4]

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

              text-[#9A7154]
            "
          >
            Design Philosophy
          </p>

          <h2
            className="
              mt-4

              max-w-4xl

              text-4xl
              font-semibold

              tracking-tight

              text-[#29231F]

              md:text-5xl
            "
          >
            Designed to be beautiful. Built to be usable.
          </h2>

          <div
            className="
              mt-10

              grid
              gap-5

              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {designPrinciples.map(
              (principle, index) => (
                <motion.article
                  key={principle.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="
                    rounded-[26px]

                    border
                    border-[#D8CEC6]

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

                      bg-[#EEE3DD]

                      text-[#8B624A]
                    "
                  >
                    <WandSparkles
                      size={23}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3
                    className="
                      mt-5

                      text-[22px]
                      font-semibold

                      text-[#2C2723]
                    "
                  >
                    {principle.title}
                  </h3>

                  <p
                    className="
                      mt-3

                      text-[17px]
                      leading-8

                      text-[#625A54]
                    "
                  >
                    {principle.description}
                  </p>
                </motion.article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          DELIVERY PROMISE
      ====================================================== */}

      <section
        className="
          bg-[#F9F7F5]

          px-6
          py-24

          lg:px-8
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            overflow-hidden
            rounded-[34px]
            bg-[#2B2522]
            text-white
          "
        >
          <div
            className="
              grid

              lg:grid-cols-[1fr_1fr]
            "
          >
            <div
              className="
                px-8
                py-12

                md:px-12
                md:py-14
              "
            >
              <p
                className="
                  text-base
                  font-bold
                  uppercase

                  tracking-[0.18em]

                  text-[#D3AE8A]
                "
              >
                Our Execution Focus
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
                From concept to completed interior.
              </h2>

              <p
                className="
                  mt-6

                  max-w-xl

                  text-[18px]
                  leading-9

                  text-white/70
                "
              >
                UNUS Interior focuses on combining design planning,
                quality execution and premium finishing to create
                functional and aesthetically strong spaces.
              </p>

              <div
                className="
                  mt-8
                  space-y-4
                "
              >
                {[
                  "3D Design Visualization & Planning",
                  "Quality Execution with Premium Finishes",
                  "Functional and Aesthetic Design Approach",
                  "On-Time Project Delivery with Client Satisfaction",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-7
                        w-7

                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-[#B98664]

                        text-white
                      "
                    >
                      <Check size={15} />
                    </div>

                    <span
                      className="
                        text-[17px]
                        font-medium

                        text-white/80
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                relative
                min-h-[420px]
              "
            >
              <Image
                src="/business/interior/interior-5.jpg"
                alt="UNUS Interior premium execution"
                fill
                className="object-cover"
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-r

                  from-[#2B2522]/40
                  to-transparent
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BACK TO GROUP
      ====================================================== */}

      <section
        className="
          bg-[#24201D]

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
              Explore the complete UNUS Group.
            </h3>
          </div>

          <Link
            href="/#companies"
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

              text-[#28221F]

              transition-all
              duration-300

              hover:scale-105

              active:scale-95
            "
          >
            View All Businesses

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
   PORTFOLIO SLIDESHOW
========================================================= */

function PortfolioSlideshow() {
  const [currentImage, setCurrentImage] =
    useState(0);

  useEffect(() => {
    const interval =
      window.setInterval(() => {
        setCurrentImage(
          (previous) =>
            (previous + 1) %
            portfolioImages.length
        );
      }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
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
      <div
        className="
          relative
          h-[500px]
          overflow-hidden

          md:h-[620px]
        "
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={portfolioImages[currentImage]}
            initial={{
              opacity: 0,
              scale: 1.035,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.015,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0
            "
          >
            <Image
              src={
                portfolioImages[
                  currentImage
                ]
              }
              alt={`UNUS Interior portfolio ${
                currentImage + 1
              }`}
              fill
              sizes="100vw"
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

            from-black/65
            via-black/5
            to-black/10
          "
        />

        {/* TEXT */}

        <div
          className="
            absolute
            bottom-8
            left-8

            max-w-xl

            md:bottom-10
            md:left-10
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase

              tracking-[0.18em]

              text-[#D5B28F]
            "
          >
            UNUS Interior Portfolio
          </p>

          <h3
            className="
              mt-3

              text-3xl
              font-semibold

              text-white

              md:text-4xl
            "
          >
            Modern spaces with a refined visual language.
          </h3>
        </div>

        {/* COUNTER */}

        <div
          className="
            absolute
            right-6
            top-6

            rounded-full

            border
            border-white/20

            bg-black/25

            px-4
            py-2

            text-sm
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
            portfolioImages.length
          ).padStart(2, "0")}
        </div>

        {/* INDICATORS */}

        <div
          className="
            absolute
            bottom-8
            right-8

            flex
            items-center
            gap-2

            md:bottom-10
            md:right-10
          "
        >
          {portfolioImages.map(
            (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show portfolio image ${
                  index + 1
                }`}
                onClick={() =>
                  setCurrentImage(index)
                }
                className={`
                  h-[4px]

                  rounded-full

                  transition-all
                  duration-300

                  ${
                    currentImage === index
                      ? "w-10 bg-white"
                      : "w-5 bg-white/35 hover:bg-white/65"
                  }
                `}
              />
            )
          )}
        </div>

      </div>
    </motion.div>
  );
}