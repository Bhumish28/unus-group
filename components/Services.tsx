"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Building2,
  House,
  PanelsTopLeft,
} from "lucide-react";

const companies = [
  {
    id: "engineering",
    shortName: "Engineering",
    icon: Building2,
    eyebrow: "Cost & Project Consultancy",
    title: "UNUS Engineering & Consultant",
    description:
      "Professional quantity surveying and project management solutions focused on cost clarity, control and efficient project execution.",
    services: [
      "Quantity Surveying",
      "Cost Estimation & Budgeting",
      "Cost Control & Monitoring",
      "Contract Administration",
      "Planning & Project Management",
    ],
  },

  {
    id: "homes",
    shortName: "Homes",
    icon: House,
    eyebrow: "Ground Screw Solutions",
    title: "UNUS Homes",
    description:
      "Modern ground screw foundation solutions designed to reduce heavy excavation and concrete while enabling faster and more sustainable construction.",
    services: [
      "Ground Screw Foundations",
      "Residential & Cottage Foundations",
      "Solar Mount Foundations",
      "Fencing Foundations",
      "Temporary Structure Foundations",
    ],
  },

  {
    id: "interior",
    shortName: "Interior & Design",
    icon: PanelsTopLeft,
    eyebrow: "Design & Turnkey Execution",
    title: "UNUS Interior & Design",
    description:
      "End-to-end interior solutions combining thoughtful planning, functionality, visualization and premium execution for residential and commercial spaces.",
    services: [
      "Residential Interior Design",
      "Commercial & Office Interiors",
      "Space Planning & Custom Furniture",
      "Modular Kitchen Design",
      "Turnkey Renovation, Lighting & 3D Visualization",
    ],
  },
];

export default function Services() {
  const [activeCompany, setActiveCompany] = useState(0);

  const company = companies[activeCompany];
  const Icon = company.icon;

  return (
    <section
      id="services"
      className="
        scroll-mt-28
        overflow-hidden
        bg-[#F4F8F5]
        px-6
        py-20
        md:py-24
        lg:px-8
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRO */}
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
            ease: "easeOut",
          }}
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">

            <p
              className="
                text-base
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#145A46]
                md:text-lg
              "
            >
              Our Services
            </p>

            <h2
              className="
                mt-4
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-tight
                text-[#17211D]
                md:text-5xl
                lg:text-[54px]
              "
            >
              Specialized expertise{" "}

              <span className="text-[#145A46]">
                across every stage.
              </span>
            </h2>

          </div>

          <p
            className="
              max-w-md
              text-base
              leading-7
              text-[#66736D]
            "
          >
            Explore the capabilities of each UNUS business and
            discover how our specialized teams approach engineering,
            construction and interior solutions.
          </p>

        </motion.div>

        {/* COMPANY SELECTOR */}
        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            mt-12
            grid
            gap-3

            rounded-[26px]

            border
            border-[#DCE6E0]

            bg-white

            p-2

            shadow-[0_8px_30px_rgba(20,90,70,0.05)]

            md:grid-cols-3
          "
        >
          {companies.map((item, index) => {
            const TabIcon = item.icon;
            const isActive =
              activeCompany === index;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setActiveCompany(index)
                }
                className={`
                  group

                  flex
                  min-h-[76px]

                  items-center

                  gap-4

                  rounded-[20px]

                  px-5
                  py-4

                  text-left

                  transition-all
                  duration-300

                  active:scale-[0.98]

                  ${
                    isActive
                      ? `
                        bg-[#145A46]
                        text-white

                        shadow-[0_8px_25px_rgba(20,90,70,0.20)]
                      `
                      : `
                        bg-transparent
                        text-[#33413B]

                        hover:bg-[#F0F6F2]
                      `
                  }
                `}
              >

                {/* TAB ICON */}
                <div
                  className={`
                    flex
                    h-11
                    w-11
                    shrink-0

                    items-center
                    justify-center

                    rounded-xl

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-[#EAF3EE] text-[#145A46]"
                    }
                  `}
                >
                  <TabIcon
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                {/* COMPANY */}
                <p
                  className="
                    text-[15px]
                    font-bold
                    md:text-base
                  "
                >
                  UNUS {item.shortName}
                </p>

              </button>
            );
          })}
        </motion.div>

        {/* ACTIVE COMPANY PANEL */}
        <div className="mt-7">

          <AnimatePresence mode="wait">

            <motion.div
              key={company.id}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
                grid

                overflow-hidden

                rounded-[32px]

                border
                border-[#DCE6E0]

                bg-white

                shadow-[0_15px_45px_rgba(20,90,70,0.07)]

                lg:grid-cols-[0.9fr_1.25fr]
              "
            >

              {/* =========================
                  LEFT COMPANY PANEL
              ========================== */}
              <div
                className="
                  relative

                  overflow-hidden

                  bg-[#0C3B2E]

                  p-8

                  text-white

                  md:p-10
                  lg:p-12
                "
              >

                {/* DECORATIVE CIRCLES */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24

                    h-72
                    w-72

                    rounded-full

                    border
                    border-white/10
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-5
                    -top-5

                    h-44
                    w-44

                    rounded-full

                    border
                    border-white/10
                  "
                />

                <div className="relative z-10">

                  {/* COMPANY ICON */}
                  <div
                    className="
                      flex
                      h-14
                      w-14

                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-white/15

                      bg-white/10

                      text-white

                      backdrop-blur-sm
                    "
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* CATEGORY */}
                  <p
                    className="
                      mt-10

                      text-xs
                      font-bold
                      uppercase

                      tracking-[0.18em]

                      text-white/60
                    "
                  >
                    {company.eyebrow}
                  </p>

                  {/* COMPANY NAME */}
                  <h3
                    className="
                      mt-4

                      max-w-md

                      text-3xl
                      font-semibold

                      leading-[1.12]
                      tracking-tight

                      text-white

                      md:text-4xl
                    "
                  >
                    {company.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-6

                      max-w-md

                      text-[15px]
                      leading-7

                      text-white/70
                    "
                  >
                    {company.description}
                  </p>

                  {/* GROUP */}
                  <div
                    className="
                      mt-10

                      flex
                      items-center
                      gap-3

                      border-t
                      border-white/15

                      pt-6
                    "
                  >
                    <span
                      className="
                        h-2
                        w-2

                        rounded-full

                        bg-[#8BC5A8]
                      "
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase

                        tracking-[0.14em]

                        text-white/60
                      "
                    >
                      UNUS Group
                    </span>

                  </div>

                </div>
              </div>

              {/* =========================
                  KEY RESPONSIBILITIES
              ========================== */}
              <div
                className="
                  p-7
                  md:p-10
                  lg:p-12
                "
              >

                {/* HEADING */}
                <div
                  className="
                    border-b
                    border-[#E0E8E4]
                    pb-6
                  "
                >
                  <p
                    className="
                      text-base
                      font-bold
                      uppercase

                      tracking-[0.16em]

                      text-[#145A46]

                      md:text-lg
                    "
                  >
                    Key Responsibilities
                  </p>
                </div>

                {/* RESPONSIBILITIES */}
                <div>

                  {company.services.map(
                    (service, index) => (
                      <motion.div
                        key={service}
                        initial={{
                          opacity: 0,
                          x: 15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.06,
                        }}
                        className="
                          group

                          flex
                          min-h-[86px]

                          items-center

                          gap-6

                          border-b
                          border-[#E7EDE9]

                          py-5

                          transition-all
                          duration-300

                          last:border-b-0

                          hover:pl-2
                        "
                      >

                        {/* NUMBER */}
                        <span
                          className="
                            min-w-[34px]

                            text-sm
                            font-bold

                            tracking-[0.12em]

                            text-[#9BA7A1]

                            transition-colors
                            duration-300

                            group-hover:text-[#145A46]
                          "
                        >
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        {/* RESPONSIBILITY */}
                        <h4
                          className="
                            text-lg
                            font-semibold

                            text-[#26332D]

                            transition-colors
                            duration-300

                            group-hover:text-[#145A46]

                            md:text-xl
                          "
                        >
                          {service}
                        </h4>

                      </motion.div>
                    )
                  )}

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}