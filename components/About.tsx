"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Target,
  Eye,
  ShieldCheck,
  Leaf,
  Users,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Transparency, honesty and responsible execution across every project.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "A strong commitment to quality, precision and dependable project delivery.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients, contractors and consultants to achieve better outcomes.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Promoting efficient construction methods and responsible use of resources.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Adopting modern ideas, technologies and construction solutions.",
  },
];

export default function About() {
  const [missionOpen, setMissionOpen] =
    useState(false);

  const [visionOpen, setVisionOpen] =
    useState(false);

  return (
    <section
      id="about"
      className="
        scroll-mt-24
        overflow-hidden
        bg-white
        px-6
        py-24
        lg:px-8
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* ABOUT TOP */}
        <div
          className="
            grid
            gap-14
            lg:grid-cols-2
            lg:items-start
          "
        >

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
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
              About UNUS Group
            </p>

            <h2
              className="
                mt-5
                max-w-xl

                font-serif

                text-4xl
                font-semibold

                leading-[1.1]
                tracking-tight

                text-[#17211D]

                md:text-5xl
                lg:text-6xl
              "
            >
              Building with purpose.
              <br />

              <span className="text-[#145A46]">
                Designing for the future.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-xl

                text-base
                leading-8

                text-[#66736D]

                md:text-lg
              "
            >
              UNUS Group brings together specialized expertise in
              engineering consultancy, sustainable construction and
              interior design to create efficient, functional and
              future-ready spaces.
            </p>

            <p
              className="
                mt-5
                max-w-xl

                text-base
                leading-8

                text-[#66736D]
              "
            >
              Through its three specialized businesses, the group
              focuses on quality execution, innovative solutions and
              thoughtful project delivery across the built environment.
            </p>

            <Link
              href="#companies"
              className="
                group
                mt-8

                inline-flex
                items-center
                gap-2

                text-sm
                font-semibold

                text-[#145A46]

                transition-all
                duration-300

                hover:gap-3
              "
            >
              Explore Our Companies

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-1
                "
              />
            </Link>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="grid gap-5"
          >

            {/* MISSION */}
            <div
              id="mission"
              className="
                scroll-mt-32
                overflow-hidden

                rounded-[28px]

                border
                border-[#DDE6E1]

                bg-[#F8FAF8]

                transition-all
                duration-300

                hover:border-[#BCD3C8]
                hover:shadow-lg
              "
            >
              <button
                type="button"
                onClick={() =>
                  setMissionOpen(!missionOpen)
                }
                className="
                  w-full
                  p-8
                  text-left
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-5
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0

                      items-center
                      justify-center

                      rounded-2xl

                      bg-[#EAF3EE]
                      text-[#145A46]
                    "
                  >
                    <Target
                      size={23}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="flex-1">

                    <p
                      className="
                        text-sm
                        font-bold
                        uppercase

                        tracking-[0.16em]

                        text-[#145A46]

                        md:text-base
                      "
                    >
                      Our Mission
                    </p>

                    <h3
                      className="
                        mt-3

                        text-xl
                        font-semibold

                        leading-snug

                        text-[#17211D]

                        md:text-2xl
                      "
                    >
                      Deliver value through precision and reliability.
                    </h3>

                  </div>

                  <ChevronDown
                    size={22}
                    className={`
                      mt-2
                      text-[#145A46]

                      transition-transform
                      duration-300

                      ${
                        missionOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                </div>
              </button>

              <AnimatePresence>
                {missionOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div
                      className="
                        border-t
                        border-[#DDE6E1]

                        px-8
                        pb-8
                        pt-7
                      "
                    >
                      <p
                        className="
                          text-sm
                          font-bold
                          uppercase

                          tracking-[0.16em]

                          text-[#145A46]
                        "
                      >
                        Complete Mission
                      </p>

                      <p
                        className="
                          mt-4

                          text-base
                          leading-8

                          text-[#53615A]
                        "
                      >
                        Our mission is to provide professional,
                        reliable, and high-quality quantity surveying
                        services that support the successful delivery
                        of construction projects.
                      </p>

                      <p
                        className="
                          mt-4

                          text-base
                          leading-8

                          text-[#53615A]
                        "
                      >
                        We aim to add value to every project by helping
                        our clients make informed decisions, control
                        costs, and achieve their project goals
                        efficiently and effectively.
                      </p>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* VISION */}
            <div
              id="vision"
              className="
                scroll-mt-32
                overflow-hidden

                rounded-[28px]

                border
                border-[#DDE6E1]

                bg-[#F8FAF8]

                transition-all
                duration-300

                hover:border-[#BCD3C8]
                hover:shadow-lg
              "
            >
              <button
                type="button"
                onClick={() =>
                  setVisionOpen(!visionOpen)
                }
                className="
                  w-full
                  p-8
                  text-left
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-5
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0

                      items-center
                      justify-center

                      rounded-2xl

                      bg-[#EAF3EE]
                      text-[#145A46]
                    "
                  >
                    <Eye
                      size={23}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="flex-1">

                    <p
                      className="
                        text-sm
                        font-bold
                        uppercase

                        tracking-[0.16em]

                        text-[#145A46]

                        md:text-base
                      "
                    >
                      Our Vision
                    </p>

                    <h3
                      className="
                        mt-3

                        text-xl
                        font-semibold

                        leading-snug

                        text-[#17211D]

                        md:text-2xl
                      "
                    >
                      Innovation, integrity and excellence.
                    </h3>

                  </div>

                  <ChevronDown
                    size={22}
                    className={`
                      mt-2
                      text-[#145A46]

                      transition-transform
                      duration-300

                      ${
                        visionOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                </div>
              </button>

              <AnimatePresence>
                {visionOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div
                      className="
                        border-t
                        border-[#DDE6E1]

                        px-8
                        pb-8
                        pt-7
                      "
                    >
                      <p
                        className="
                          text-sm
                          font-bold
                          uppercase

                          tracking-[0.16em]

                          text-[#145A46]
                        "
                      >
                        Complete Vision
                      </p>

                      <p
                        className="
                          mt-4

                          text-base
                          leading-8

                          text-[#53615A]
                        "
                      >
                        To be the preferred quantity surveying firm,
                        known for our integrity, innovation, and
                        excellence in providing precise, sustainable,
                        and cost-effective solutions for the
                        construction industry.
                      </p>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>

        {/* WHY CHOOSE UNUS */}
        <motion.div
          id="why-unus"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            scroll-mt-28

            mt-24

            rounded-[32px]

            bg-[#145A46]

            px-7
            py-11

            text-white

            md:px-10
            lg:px-12
            lg:py-12
          "
        >
          <div
            className="
              grid
              gap-10

              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-center
            "
          >

            <div>

              {/* LARGER TITLE */}
              <p
                className="
                  text-lg
                  font-bold
                  uppercase

                  tracking-[0.13em]

                  text-white

                  md:text-xl
                "
              >
                Why Choose UNUS?
              </p>

              <h3
                className="
                  mt-5
                  max-w-md

                  font-serif

                  text-3xl
                  font-semibold

                  leading-tight

                  md:text-4xl
                "
              >
                Practical solutions.
                <br />
                Thoughtful execution.
              </h3>

            </div>

            <div
              className="
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {[
                "Fast Construction",
                "Eco-Friendly Solutions",
                "Cost-Effective Approach",
                "Innovative Design",
                "Quality Assurance",
              ].map((item, index) => (
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
                    delay: index * 0.08,
                  }}
                  className="
                    rounded-2xl

                    border
                    border-white/15

                    bg-white/10

                    px-5
                    py-4

                    text-sm
                    font-medium

                    backdrop-blur-sm

                    transition-all
                    duration-300

                    hover:bg-white/15
                  "
                >
                  {item}
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* CORE VALUES */}
        <div
          id="values"
          className="
            scroll-mt-28
            mt-24
          "
        >
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
            }}
            className="max-w-2xl"
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
              Our Core Values
            </p>

            <h3
              className="
                mt-4

                font-serif

                text-3xl
                font-semibold

                tracking-tight

                text-[#17211D]

                md:text-4xl
              "
            >
              Principles behind the way we work.
            </h3>

            <p
              className="
                mt-5
                leading-7
                text-[#66736D]
              "
            >
              The values that guide our approach to projects,
              partnerships and long-term relationships.
            </p>

          </motion.div>

          <div
            className="
              mt-12
              grid
              gap-5

              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {values.map(
              (value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
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
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    className="
                      group

                      rounded-[24px]

                      border
                      border-[#DDE6E1]

                      bg-[#F8FAF8]

                      p-6

                      transition-all
                      duration-300

                      hover:-translate-y-2
                      hover:border-[#BCD3C8]
                      hover:bg-white
                      hover:shadow-lg
                    "
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11

                        items-center
                        justify-center

                        rounded-xl

                        bg-[#EAF3EE]
                        text-[#145A46]

                        transition-all
                        duration-300

                        group-hover:bg-[#145A46]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                      />
                    </div>

                    <h4
                      className="
                        mt-6

                        text-lg
                        font-semibold

                        text-[#17211D]
                      "
                    >
                      {value.title}
                    </h4>

                    <p
                      className="
                        mt-3

                        text-sm
                        leading-6

                        text-[#66736D]
                      "
                    >
                      {value.description}
                    </p>

                  </motion.div>
                );
              }
            )}
          </div>

        </div>

      </div>
    </section>
  );
}