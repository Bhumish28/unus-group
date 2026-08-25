"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Clock3,
  Leaf,
  Hammer,
  Home,
  Sun,
  Fence,
  Warehouse,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Faster Installation",
    description:
      "A more efficient foundation approach that reduces lengthy groundwork and traditional concrete preparation.",
  },
  {
    icon: Leaf,
    title: "Lower Site Disturbance",
    description:
      "Minimal excavation helps preserve the surrounding ground and keeps the construction process cleaner.",
  },
  {
    icon: Hammer,
    title: "Practical Construction",
    description:
      "Steel ground screws provide a strong foundation solution for a wide range of structures and site conditions.",
  },
];

const comparison = [
  {
    label: "Excavation",
    traditional: "Extensive excavation and groundwork",
    groundScrew: "Minimal excavation required",
  },
  {
    label: "Foundation Material",
    traditional: "Relies heavily on concrete",
    groundScrew: "Steel screws installed directly into soil",
  },
  {
    label: "Installation",
    traditional: "Multiple preparation and construction stages",
    groundScrew: "Faster and more direct installation",
  },
  {
    label: "Concrete Curing",
    traditional: "Requires concrete setting and curing time",
    groundScrew: "No traditional concrete curing period",
  },
  {
    label: "Site Disturbance",
    traditional: "Greater impact on surrounding ground",
    groundScrew: "Reduced disturbance to the site",
  },
  {
    label: "Applications",
    traditional: "Conventional permanent foundations",
    groundScrew: "Homes, cottages, solar, fencing & temporary structures",
  },
];

const applications = [
  {
    icon: Home,
    title: "Homes & Cottages",
    description: "Residential structures and lightweight cottages.",
  },
  {
    icon: Sun,
    title: "Solar Structures",
    description: "Foundation support for solar mounting systems.",
  },
  {
    icon: Fence,
    title: "Fencing",
    description: "Efficient anchoring for fencing installations.",
  },
  {
    icon: Warehouse,
    title: "Temporary Structures",
    description: "Practical support for temporary structural applications.",
  },
];

export default function GroundScrew() {
  return (
    <section
      id="ground-screw"
      className="
        scroll-mt-28
        overflow-hidden
        bg-[#F7F5F0]
        px-6
        py-20
        md:py-24
        lg:px-8
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================================================
            TOP: INTRO + PHOTOS
        ========================================================== */}

        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center
          "
        >
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className="
                text-base
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#A6783D]
                md:text-lg
              "
            >
              UNUS Homes
            </p>

            <h2
              className="
                mt-4
                max-w-2xl
                text-4xl
                font-semibold
                leading-[1.07]
                tracking-tight
                text-[#202522]
                md:text-5xl
                lg:text-[54px]
              "
            >
              A smarter approach to{" "}
              <span className="text-[#725A3A]">
                foundations.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-8
                text-[#66655F]
                md:text-lg
              "
            >
              Ground screw foundations use strong steel foundations
              installed directly into the soil, providing structural
              support without extensive excavation or traditional heavy
              concrete foundations.
            </p>

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-8
                text-[#66655F]
              "
            >
              The system offers a faster and more environmentally
              conscious approach while supporting residential,
              commercial and temporary structural applications.
            </p>

            {/* FEATURES */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Steel Foundation",
                "Minimal Excavation",
                "Faster Setup",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#DDD8CF]
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[#4B4A45]
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#B8894D]
                    "
                  />

                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PHOTOS */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="
              relative
              min-h-[530px]
              md:min-h-[620px]
            "
          >
            {/* LARGE IMAGE */}
            <div
              className="
                group
                absolute
                left-0
                top-0
                h-[430px]
                w-[88%]
                overflow-hidden
                rounded-[34px]
                bg-[#DDD9D0]
                shadow-[0_20px_55px_rgba(40,35,28,0.14)]
                md:h-[500px]
                md:w-[84%]
              "
            >
              <Image
                src="/ground-screw/cottage.png"
                alt="UNUS Homes ground screw project"
                fill
                sizes="(max-width: 1024px) 90vw, 55vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.035]
                "
              />

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

              <div className="absolute bottom-6 left-6">
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white/70
                  "
                >
                  UNUS Homes
                </p>

                <p
                  className="
                    mt-2
                    text-xl
                    font-semibold
                    text-white
                    md:text-2xl
                  "
                >
                  Ground Screw Construction
                </p>
              </div>
            </div>

            {/* SECOND IMAGE */}
            <div
              className="
                group
                absolute
                bottom-0
                right-0
                h-[250px]
                w-[48%]
                overflow-hidden
                rounded-[28px]
                border-[7px]
                border-[#F7F5F0]
                bg-[#DDD9D0]
                shadow-[0_18px_45px_rgba(40,35,28,0.18)]
                md:h-[300px]
                md:w-[47%]
              "
            >
              <Image
                src="/ground-screw/screw.jpg"
                alt="Ground screw foundation installation"
                fill
                sizes="(max-width: 1024px) 50vw, 28vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* FLOATING LABEL */}
            <div
              className="
                absolute
                bottom-[36px]
                left-5
                hidden
                rounded-[18px]
                border
                border-white/80
                bg-white/90
                px-5
                py-4
                shadow-lg
                backdrop-blur-xl
                md:block
              "
            >
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#969087]
                "
              >
                Foundation System
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-semibold
                  text-[#403B34]
                "
              >
                Steel Ground Screws
              </p>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BENEFITS
        ========================================================== */}

        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-3
          "
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="
                  rounded-[26px]
                  border
                  border-[#DDD9D0]
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C9B89D]
                  hover:shadow-[0_15px_35px_rgba(45,39,31,0.08)]
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
                    bg-[#F0ECE4]
                    text-[#8B683D]
                  "
                >
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    text-[#222522]
                  "
                >
                  {benefit.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-[#686761]
                  "
                >
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            PREMIUM COMPARISON
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          {/* COMPARISON HEADER */}
          <div
            className="
              grid
              gap-7
              lg:grid-cols-[1fr_0.75fr]
              lg:items-end
            "
          >
            <div>
              <p
                className="
                  text-base
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#A6783D]
                  md:text-lg
                "
              >
                Foundation Comparison
              </p>

              <h3
                className="
                  mt-4
                  max-w-3xl
                  text-4xl
                  font-semibold
                  leading-[1.08]
                  tracking-tight
                  text-[#222522]
                  md:text-5xl
                "
              >
                Traditional concrete vs.{" "}

                <span className="text-[#725A3A]">
                  ground screw foundations.
                </span>
              </h3>
            </div>

            <p
              className="
                max-w-lg
                text-base
                leading-8
                text-[#69675F]
                lg:justify-self-end
              "
            >
              A practical comparison of the construction process,
              installation requirements and site impact of both
              foundation approaches.
            </p>
          </div>

          {/* COMPARISON TABLE */}
          <div
            className="
              mt-10
              overflow-hidden
              rounded-[32px]
              border
              border-[#D8D3CA]
              bg-white
              shadow-[0_18px_55px_rgba(45,39,31,0.06)]
            "
          >
            {/* TABLE HEADER */}
            <div
              className="
                hidden
                grid-cols-[0.65fr_1fr_1fr]
                border-b
                border-[#DDD8CF]
                md:grid
              "
            >
              <div
                className="
                  bg-[#F7F5F0]
                  px-7
                  py-7
                "
              >
                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#8C8982]
                  "
                >
                  Comparison
                </p>
              </div>

              <div
                className="
                  bg-[#EEEAE3]
                  px-7
                  py-7
                "
              >
                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#77736D]
                  "
                >
                  Traditional
                </p>

                <h4
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    text-[#272825]
                  "
                >
                  Concrete Foundation
                </h4>
              </div>

              <div
                className="
                  bg-[#242624]
                  px-7
                  py-7
                  text-white
                "
              >
                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#D1B180]
                  "
                >
                  UNUS Homes
                </p>

                <h4
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  Ground Screw Foundation
                </h4>
              </div>
            </div>

            {/* ROWS */}
            {comparison.map((row, index) => (
              <div
                key={row.label}
                className={`
                  grid
                  border-b
                  border-[#E4E0D8]
                  last:border-b-0
                  md:grid-cols-[0.65fr_1fr_1fr]

                  ${
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-[#FBFAF7]"
                  }
                `}
              >
                {/* LABEL */}
                <div
                  className="
                    flex
                    items-center
                    px-6
                    py-6
                    md:px-7
                    md:py-7
                  "
                >
                  <p
                    className="
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#9A7951]
                      md:text-[15px]
                    "
                  >
                    {row.label}
                  </p>
                </div>

                {/* TRADITIONAL */}
                <div
                  className="
                    border-t
                    border-[#E4E0D8]
                    px-6
                    py-6
                    md:border-l
                    md:border-t-0
                    md:px-7
                    md:py-7
                  "
                >
                  <p
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#AAA69F]
                      md:hidden
                    "
                  >
                    Concrete Foundation
                  </p>

                  <p
                    className="
                      text-lg
                      font-medium
                      leading-7
                      text-[#575752]
                      md:text-xl
                    "
                  >
                    {row.traditional}
                  </p>
                </div>

                {/* GROUND SCREW */}
                <div
                  className="
                    border-t
                    border-[#E4E0D8]
                    bg-[#F2EEE6]
                    px-6
                    py-6
                    md:border-l
                    md:border-t-0
                    md:px-7
                    md:py-7
                  "
                >
                  <p
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#9A7951]
                      md:hidden
                    "
                  >
                    Ground Screw Foundation
                  </p>

                  <p
                    className="
                      text-lg
                      font-semibold
                      leading-7
                      text-[#292A27]
                      md:text-xl
                    "
                  >
                    {row.groundScrew}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            APPLICATIONS
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mt-20"
        >
          <p
            className="
              text-base
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#A6783D]
              md:text-lg
            "
          >
            Applications
          </p>

          <h3
            className="
              mt-4
              max-w-3xl
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              text-[#222522]
              md:text-5xl
            "
          >
            One foundation system.{" "}

            <span className="text-[#725A3A]">
              Multiple possibilities.
            </span>
          </h3>

          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {applications.map((application, index) => {
              const Icon = application.icon;

              return (
                <motion.div
                  key={application.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    rounded-[24px]
                    border
                    border-[#DDD8CF]
                    bg-white
                    p-6
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#C9B89D]
                    hover:shadow-[0_14px_35px_rgba(45,39,31,0.08)]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#F0ECE4]
                      text-[#8B683D]
                      transition-all
                      duration-300

                      group-hover:bg-[#292A27]
                      group-hover:text-white
                    "
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <h4
                    className="
                      mt-5
                      text-lg
                      font-semibold
                      text-[#282925]
                    "
                  >
                    {application.title}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-[#73706A]
                    "
                  >
                    {application.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}