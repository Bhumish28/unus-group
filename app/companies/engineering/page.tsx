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
  Calculator,
  ClipboardCheck,
  FileText,
  Gauge,
  MapPin,
  Ruler,
} from "lucide-react";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: Ruler,
    title: "Quantity Surveying",
    description:
      "Determining quantities of construction materials and works to support accurate measurement, planning and project costing.",
  },

  {
    icon: Calculator,
    title: "Cost Estimation & Budgeting",
    description:
      "Preparing detailed project cost estimates and budgets to help clients make informed financial decisions.",
  },

  {
    icon: Gauge,
    title: "Cost Control & Monitoring",
    description:
      "Monitoring project expenditure and helping maintain better control over construction costs throughout execution.",
  },

  {
    icon: FileText,
    title: "Contract Administration",
    description:
      "Supporting contracts, agreements, billing documentation, BOQ preparation and project administration.",
  },

  {
    icon: ClipboardCheck,
    title: "Planning & Project Management",
    description:
      "Planning, coordinating and overseeing project execution with attention to cost, progress and delivery.",
  },
];

/* =========================================================
   SELECTED PROJECTS
========================================================= */

const selectedProjects = [
  {
    title: "360 MLD Wastewater Treatment Plant",

    location:
      "Brihanmumbai Municipal Corporation (BMC)",

    scope:
      "Preparing Bar Bending Schedule (BBS) for actual use on site with cutting and bending.",

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

    location:
      "Airports Authority of India (AAI), Chennai",

    scope:
      "Preparing Bar Bending Schedule (BBS) for actual use on site with cutting and bending.",

    images: [
      "/business/engineering/chennai-1.png",
      "/business/engineering/chennai-2.png",
      "/business/engineering/chennai-3.png",
      "/business/engineering/chennai-4.png",
    ],
  },

  {
    title: "Kingsbay Highlands",

    location:
      "Kamshet, Maval — Lonavala",

    scope:
      "Project Management Consultancy across 75+ acres, 100+ plots and civil works including roads, villas, bridges, retaining works and water tanks.",

    images: [
      "/business/engineering/kingsbay-1.png",
      "/business/engineering/kingsbay-2.png",
      "/business/engineering/kingsbay-3.png",
    ],
  },

  {
    title: "The Aam Bagh",

    location:
      "Vengurla, Sindhudurg — Maharashtra / Goa",

    scope:
      "Listed in the UNUS company profile as an upcoming development project.",

    images: [
      "/business/engineering/aam-bagh-plan.png",
      "/business/engineering/aam-bagh-team.png",
    ],
  },
];

/* =========================================================
   PROJECT GALLERY
========================================================= */

const galleryImages = [
  "/business/engineering/pmc-factory.png",
  "/business/engineering/pmc-site-1.png",
  "/business/engineering/pmc-site-2.png",

  "/business/engineering/bmc-1.png",
  "/business/engineering/bmc-2.png",
  "/business/engineering/bmc-3.png",
  "/business/engineering/bmc-4.png",

  "/business/engineering/chennai-1.png",
  "/business/engineering/chennai-2.png",
  "/business/engineering/chennai-3.png",
  "/business/engineering/chennai-4.png",

  "/business/engineering/kingsbay-1.png",
  "/business/engineering/kingsbay-2.png",
  "/business/engineering/kingsbay-3.png",

  "/business/engineering/aam-bagh-plan.png",
  "/business/engineering/aam-bagh-team.png",
];

/* =========================================================
   ONGOING PROJECTS
========================================================= */

const ongoingProjects = [
  "Basil Chandrakant — A Wing + B Wing, G+13 Floor, Pune",

  "Basil Shivraj — G+19 Floor, Pune",

  "N.K. Buildcon — A & B Wing, Geo River Breeze, G+10 Floor, Pune",

  "SVG Project — B1 + B2, G+15 Floor, Wakad, Pune",

  "Tulsi Nisarg — D, E & F Wing, G+7, Neral",

  "STP Drawing / BBS — Kukreja Mehek",

  "AGUS Murli Factory — Ambernath, MS Shed BOQ",

  "Orbis School Building — G+4",

  "Crescent School Building — G+7",

  "Moreland Goa Project — Billing + BOQ",

  "RB Project — A, B & C Wing, G+7 Floor, Pune",

  "Skycraft Buildcom — G+16 Floor, Pune",

  "Shelar Arcade — G+7 Floor, Badlapur",
];

/* =========================================================
   PAGE
========================================================= */

export default function EngineeringPage() {
  return (
    <main
      className="
        overflow-hidden
        bg-[#F5F6F7]
        text-[#18202A]
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

                bg-white/10

                backdrop-blur-md

                transition-all

                group-hover:bg-white
                group-hover:text-[#152535]
              "
            >
              <ArrowLeft size={19} />
            </span>

            Back to UNUS Group
          </Link>

          {/* IMPORTANT:
              actual file is .jpeg
          */}
          <Image
            src="/company-logos/unus-engineering.jpeg"
            alt="UNUS Engineering logo"
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
          bg-[#101C29]
        "
      >

        {/* IMPORTANT:
            actual hero file is .jpg
        */}
        <Image
          src="/business/engineering/engineering-hero.jpg"
          alt="UNUS Engineering and Consultant"
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

            from-[#0B1725]/95
            via-[#0B1725]/78
            to-[#0B1725]/30
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-[#07111B]/60
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
                text-[#E3A46E]

                md:text-lg
              "
            >
              UNUS Engineering & Consultant
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
              Precision behind every{" "}

              <span className="text-[#D8E4EE]">
                construction decision.
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
              Quantity surveying, cost estimation, cost control
              and project management services focused on accuracy,
              transparency and efficient project execution.
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
                "Quantity Surveying",
                "Cost Management",
                "PMC",
                "BOQ",
                "BBS",
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
          UNDERSTANDING DOMAIN
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

                text-[#B96832]

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

                text-[#17202A]

                md:text-5xl
                lg:text-[52px]
              "
            >
              Cost intelligence and project control for construction.
            </h2>

            {/* DARK TEXT MADE BIGGER */}
            <p
              className="
                mt-7
                max-w-xl

                text-[19px]
                leading-9

                text-[#4E5B65]

                md:text-xl
              "
            >
              Quantity surveying is focused on measuring
              construction work, estimating project costs,
              preparing budgets and monitoring expenditure
              throughout the project lifecycle.
            </p>

            <p
              className="
                mt-5
                max-w-xl

                text-[18px]
                leading-9

                text-[#4E5B65]

                md:text-[19px]
              "
            >
              Project management consultancy extends this with
              planning, coordination and execution oversight,
              helping clients make informed decisions while
              maintaining better control over cost and progress.
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

                h-[330px]

                overflow-hidden

                rounded-[30px]

                md:h-[390px]
              "
            >
              <Image
                src="/business/engineering/about-building.png"
                alt="Engineering consultancy"
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
                src="/business/engineering/mission-building-1.png"
                alt="Commercial construction project"
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
                src="/business/engineering/mission-building-2.png"
                alt="Construction consultancy project"
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
          bg-[#162534]

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

                text-[#E4A36D]
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
              Accuracy.
              <br />
              Transparency.
              <br />
              Cost control.
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
              UNUS Engineering & Consultants provides quantity
              surveying solutions across residential, commercial,
              industrial and infrastructure projects.
            </p>

            <p
              className="
                mt-5

                text-xl
                leading-9

                text-white/80
              "
            >
              The company focuses on detailed cost assessments,
              professional advice and proactive project management
              to help projects progress efficiently and within
              planned budgets.
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

              text-[#B96832]

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

              md:text-5xl
            "
          >
            Professional support from estimation to execution.
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
                      border-[#DCE1E6]

                      bg-[#F7F9FB]

                      p-6

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#BAC6D0]
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

                        bg-[#E8EEF3]

                        text-[#173B5E]
                      "
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* DARK TITLE BIGGER */}
                    <h3
                      className="
                        mt-6

                        text-xl
                        font-semibold

                        leading-7

                        text-[#202B33]
                      "
                    >
                      {service.title}
                    </h3>

                    {/* DARK DESCRIPTION BIGGER */}
                    <p
                      className="
                        mt-3

                        text-[16px]
                        leading-7

                        text-[#586772]
                      "
                    >
                      {service.description}
                    </p>

                  </motion.article>
                );
              }
            )}

          </div>

          {/* SERVICE IMAGES */}
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
              "/business/engineering/service-consulting.png",
              "/business/engineering/service-site-team.png",
              "/business/engineering/service-drawings.png",
              "/business/engineering/service-construction.png",
            ].map((src) => (
              <div
                key={src}
                className="
                  relative

                  h-[220px]

                  overflow-hidden

                  rounded-[24px]
                "
              >
                <Image
                  src={src}
                  alt="UNUS Engineering service"
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
          SELECTED PROJECT EXPERIENCE
      ====================================================== */}

      <section
        className="
          bg-[#111D2B]

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

              text-[#E69B66]
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
            Infrastructure, PMC and active construction assignments.
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
            Each project automatically rotates through photographs
            from the UNUS project portfolio every four seconds.
          </p>

          <div
            className="
              mt-12

              grid
              items-stretch
              gap-6

              lg:grid-cols-2
            "
          >

            {selectedProjects.map(
              (project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  location={project.location}
                  scope={project.scope}
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

                  text-[#B96832]
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

                  md:text-5xl
                "
              >
                Engineering work in action.
              </h2>

            </div>

            {/* DARK TEXT BIGGER */}
            <p
              className="
                max-w-md

                text-lg
                leading-8

                text-[#54636E]
              "
            >
              A visual collection of project management,
              infrastructure and construction work shown in
              the UNUS company profile.
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
                      (index % 4) *
                      0.05,
                  }}
                  className={`
                    relative

                    overflow-hidden

                    rounded-[24px]

                    ${
                      index === 0 ||
                      index === 5 ||
                      index === 11
                        ? "col-span-2 row-span-2"
                        : ""
                    }
                  `}
                >
                  <Image
                    src={src}
                    alt="UNUS Engineering project"
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
          ONGOING ASSIGNMENTS
      ====================================================== */}

      <section
        className="
          bg-[#ECEFF2]

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

            lg:grid-cols-[0.72fr_1.28fr]
          "
        >

          {/* LEFT */}
          <div>

            <p
              className="
                text-base
                font-bold
                uppercase

                tracking-[0.18em]

                text-[#B96832]

                md:text-lg
              "
            >
              Ongoing Assignments
            </p>

            <h2
              className="
                mt-4

                text-4xl
                font-semibold

                leading-tight
                tracking-tight

                md:text-5xl
              "
            >
              BOQ, estimation, billing & quantity surveying.
            </h2>

            {/* BIGGER DARK TEXT */}
            <p
              className="
                mt-6

                max-w-md

                text-[19px]
                leading-9

                text-[#4F5E68]

                md:text-xl
              "
            >
              The company profile lists ongoing work covering
              RCC and architectural finishing estimation,
              BOQ preparation, billing, cost management and
              quantity surveying.
            </p>

          </div>

          {/* PROJECT LIST */}
          <div
            className="
              grid
              gap-4

              sm:grid-cols-2
            "
          >

            {ongoingProjects.map(
              (project, index) => (
                <motion.div
                  key={project}
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
                      (index % 4) *
                      0.05,
                  }}
                  className="
                    min-h-[145px]

                    rounded-[22px]

                    border
                    border-[#CDD5DB]

                    bg-white

                    px-6
                    py-6

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#AEBBC4]
                    hover:shadow-md
                  "
                >

                  <span
                    className="
                      text-base
                      font-bold

                      tracking-[0.15em]

                      text-[#A06F48]
                    "
                  >
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  {/* MAIN DARK PROJECT TEXT MUCH BIGGER */}
                  <p
                    className="
                      mt-4

                      text-[19px]
                      font-semibold

                      leading-8
                      tracking-[-0.01em]

                      text-[#25313A]

                      md:text-[21px]
                    "
                  >
                    {project}
                  </p>

                </motion.div>
              )
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          UNUS HOMES LINK
      ====================================================== */}

      <section
        className="
          bg-[#0D1721]

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

                text-white/50
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

          {/* 
            WORKING NOW:
            Takes visitor to existing UNUS Homes section
            on homepage.

            Later change to:
            href="/companies/homes"
            after we build Homes page.
          */}

          <Link
            href="/companies/homes"
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

              text-[#111820]

              transition-all
              duration-300

              hover:scale-105

              active:scale-95
            "
          >
            Explore UNUS Homes

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
   PROJECT CARD
========================================================= */

function ProjectCard({
  title,
  location,
  scope,
  images,
}: {
  title: string;
  location: string;
  scope: string;
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

      {/* IMAGE SLIDER */}
      <div
        className="
          relative

          h-[340px]

          overflow-hidden

          bg-[#0B1520]
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

            from-black/50
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

      {/* PROJECT DETAILS */}
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

            text-[#E4A171]
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
          {scope}
        </p>

      </div>

    </motion.article>
  );
}