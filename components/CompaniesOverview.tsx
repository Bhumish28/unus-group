"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const companies = [
  {
    id: "engineering",
    number: "01",
    logo: "/company-logos/unus-engineering.jpeg",
    title: "UNUS Engineering & Consultant",
    subtitle: "Engineering & Project Consultancy",
    description:
      "Quantity surveying, cost estimation, project management consultancy, contract administration and proactive cost control.",
    href: "/companies/engineering",
    openNewTab: true,
  },

  {
    id: "homes",
    number: "02",
    logo: "/company-logos/unus-homes.png",
    title: "UNUS Homes",
    subtitle: "Sustainable Construction",
    description:
      "Innovative ground screw foundation systems for sustainable homes, cottages and versatile structural applications.",
    href: "/companies/homes",
    openNewTab: false,
  },

  {
    id: "interior",
    number: "03",
    logo: "/company-logos/unus-interior.png",
    title: "UNUS Interior & Design",
    subtitle: "Interior Design & Execution",
    description:
      "Turnkey residential and commercial interiors with customized layouts, 3D visualization and premium finishes.",
    href: "/companies/interior",
    openNewTab: false,
  },
];

export default function CompaniesOverview() {
  return (
    <section
      id="companies"
      className="
        scroll-mt-28
        overflow-hidden
        bg-[#F8FAF8]
        px-6
        py-16
        md:py-20
        lg:px-8
        lg:py-20
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="max-w-3xl"
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
            UNUS Group
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-tight
              text-[#17211D]
              md:text-5xl
              lg:text-[52px]
            "
          >
            One group.{" "}
            <span className="text-[#145A46]">
              Three specialized businesses.
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-[#66736D]
            "
          >
            From engineering and construction to sustainable homes
            and thoughtfully designed interiors, UNUS Group brings
            specialized expertise together under one vision.
          </p>
        </motion.div>

        {/* CARDS */}
        <div
          className="
            mt-10
            grid
            items-stretch
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              className="h-full"
              initial={{
                opacity: 0,
                y: 45,
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
                duration: 0.6,
                delay: index * 0.13,
                ease: "easeOut",
              }}
            >
              <Link
                href={company.href}
                target={
                  company.openNewTab
                    ? "_blank"
                    : undefined
                }
                rel={
                  company.openNewTab
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  relative
                  flex
                  h-full
                  min-h-[390px]
                  flex-col
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-[#DCE5E0]
                  bg-white
                  p-7
                  shadow-[0_4px_20px_rgba(20,90,70,0.04)]

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-[#BFD3C9]
                  hover:shadow-[0_24px_60px_rgba(20,90,70,0.12)]

                  active:scale-[0.985]
                "
              >
                {/* HOVER */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#EFF7F2]
                    via-white
                    to-white
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-1
                    flex-col
                  "
                >
                  {/* LOGO + NAME */}
                  <div
                    className="
                      flex
                      min-h-[100px]
                      items-start
                      gap-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-[90px]
                        w-[102px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[20px]
                        border
                        border-[#DCE7E1]
                        bg-white
                        p-3
                        shadow-[0_4px_12px_rgba(20,90,70,0.06)]

                        transition-all
                        duration-300

                        group-hover:scale-105
                        group-hover:border-[#BCD3C8]
                      "
                    >
                      <Image
                        src={company.logo}
                        alt={`${company.title} logo`}
                        width={110}
                        height={80}
                        className="
                          max-h-[68px]
                          max-w-[82px]
                          object-contain
                        "
                      />
                    </div>

                    <h3
                      className="
                        max-w-[260px]
                        pt-1
                        text-[25px]
                        font-semibold
                        leading-[1.15]
                        tracking-[-0.02em]
                        text-[#17211D]

                        transition-colors
                        duration-300

                        group-hover:text-[#145A46]

                        lg:text-[26px]
                      "
                    >
                      {company.title}
                    </h3>
                  </div>

                  {/* CATEGORY */}
                  <p
                    className="
                      mt-5
                      min-h-[20px]
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#145A46]
                    "
                  >
                    {company.subtitle}
                  </p>

                  <div
                    className="
                      mt-5
                      h-px
                      w-full
                      bg-[#E1E9E5]
                    "
                  />

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-6
                      max-w-[320px]
                      text-[15px]
                      leading-7
                      text-[#66736D]
                    "
                  >
                    {company.description}
                  </p>

                  {/* BOTTOM */}
                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      justify-between
                      pt-8
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-bold
                        tracking-[0.18em]
                        text-[#96A59D]
                        transition-colors
                        group-hover:text-[#145A46]
                      "
                    >
                      {company.number}
                    </span>

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D4E1DA]
                        bg-white
                        text-[#145A46]

                        transition-all
                        duration-300

                        group-hover:w-[72px]
                        group-hover:border-[#145A46]
                        group-hover:bg-[#145A46]
                        group-hover:text-white
                      "
                    >
                      <ArrowRight
                        size={23}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-[3px]
                        "
                      />
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}