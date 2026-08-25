"use client";

import Image from "next/image";
import { motion } from "motion/react";

const founders = [
  {
    name: "Aarohi Pawar",
    role: "Founder",
    image: "/founders/aarohi.png",
  },
  {
    name: "Kumar Pawar",
    role: "Founder",
    image: "/founders/kumar.png",
  },
];

export default function Founders() {
  return (
    <section
      id="founders"
      className="
        scroll-mt-32
        overflow-hidden
        bg-white
        px-6
        py-20
        md:py-24
        lg:px-8
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
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
            Founders & Leadership
          </p>

          <h2
            className="
              mt-4
              max-w-4xl
              text-4xl
              font-semibold
              leading-[1.1]
              tracking-tight
              text-[#17211D]
              md:text-5xl
              lg:text-[54px]
            "
          >
            The people behind{" "}
            <span className="text-[#145A46]">
              UNUS Group.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-5xl
              text-base
              leading-8
              text-[#66736D]
              md:text-lg
            "
          >
            Our team brings experience across construction,
            engineering and project management, with a strong focus
            on professional execution, continuous learning and the
            ability to manage complex projects.
          </p>
        </motion.div>

        {/* FOUNDERS */}
        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-4xl
            grid-cols-1
            gap-14
            sm:grid-cols-2
            md:mt-16
          "
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="
                flex
                flex-col
                items-center
                text-center
              "
            >

              {/* FOUNDER IMAGE */}
              <div
                className="
                  relative
                  h-[240px]
                  w-[240px]
                  overflow-hidden
                  rounded-full
                  border
                  border-[#CADDD3]
                  bg-[#EAF3EE]

                  shadow-[0_12px_35px_rgba(20,90,70,0.10)]

                  transition-all
                  duration-500

                  hover:scale-[1.035]
                  hover:shadow-[0_18px_45px_rgba(20,90,70,0.16)]

                  md:h-[285px]
                  md:w-[285px]
                "
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="
                    (max-width: 768px) 240px,
                    285px
                  "
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* NAME */}
              <h3
                className="
                  mt-7
                  text-2xl
                  font-bold
                  tracking-[-0.02em]
                  text-[#17211D]
                  md:text-3xl
                "
              >
                {founder.name}
              </h3>

              {/* ROLE */}
              <p
                className="
                  mt-2
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#145A46]
                "
              >
                {founder.role}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}