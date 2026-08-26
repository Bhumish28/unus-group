"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  {
    value: 13,
    suffix: "+",
    label: "Ongoing Assignments",
    description: "Active engineering and construction assignments",
  },
  {
    value: 75,
    suffix: "+",
    label: "Acres Managed",
    description: "Large-scale project management experience",
  },
  {
    value: 100,
    suffix: "+",
    label: "Plots",
    description: "Part of our Kingsbay Highlands project experience",
  },
  {
    value: 3,
    suffix: "",
    label: "Specialized Businesses",
    description: "Engineering, Homes and Interior & Design",
  },
];

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2100;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(value * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="
        overflow-hidden
        border-y
        border-[#DDE6E1]
        bg-[#F1F6F3]
        px-6
        py-14

        md:py-16

        lg:px-8
        lg:py-16
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION LABEL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            mb-10
            flex
            items-center
            gap-4

            md:mb-12
          "
        >
          <span
            className="
              h-px
              w-10
              bg-[#145A46]/40
            "
          />

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#145A46]

              md:text-sm
            "
          >
            UNUS in Numbers
          </p>
        </motion.div>

        {/* STATS GRID */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-6
            gap-y-10

            lg:grid-cols-4
            lg:gap-0
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 28,
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
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className={`
                relative

                ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-[#145A46]/15"
                    : ""
                }

                lg:px-8

                first:lg:pl-0
                last:lg:pr-0
              `}
            >
              {/* NUMBER */}

              <div
                className="
                  text-[42px]
                  font-semibold
                  leading-none
                  tracking-[-0.04em]
                  text-[#145A46]

                  sm:text-5xl

                  lg:text-[58px]
                "
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              {/* LABEL */}

              <h3
                className="
                  mt-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#17211D]

                  sm:text-base
                "
              >
                {stat.label}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-2
                  max-w-[220px]
                  text-xs
                  leading-5
                  text-[#66736D]

                  sm:text-sm
                  sm:leading-6
                "
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}