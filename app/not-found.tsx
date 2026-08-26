import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Home,
} from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[#F8FAF8]
        px-6
        py-16

        lg:px-8
      "
    >
      {/* DECORATIVE BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#EAF3EE]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[200px]
          -left-[200px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#F3E8DC]
          blur-3xl
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        <div
          className="
            grid
            gap-12

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-[18px]
                bg-[#EAF3EE]
                text-[#145A46]
              "
            >
              <Building2
                size={26}
                strokeWidth={1.8}
              />
            </div>

            <p
              className="
                mt-7
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#145A46]
              "
            >
              UNUS Group
            </p>

            <h1
              className="
                mt-4
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.05em]
                text-[#17211D]

                sm:text-6xl
                md:text-7xl
              "
            >
              Page not
              <br />

              <span className="text-[#145A46]">
                found.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-lg
                text-[16px]
                leading-8
                text-[#66736D]

                sm:text-[17px]
              "
            >
              The page you&apos;re looking for may
              have been moved, renamed or does not
              exist.
            </p>

            {/* BUTTONS */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >
              <Link
                href="/"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#145A46]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#0C3B2E]
                  hover:shadow-[0_12px_30px_rgba(20,90,70,0.2)]
                "
              >
                <Home
                  size={17}
                  strokeWidth={1.8}
                />

                Back to Home

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              <Link
                href="/#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#D6E1DC]
                  bg-white
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-[#17211D]

                  transition-all
                  duration-300

                  hover:border-[#145A46]
                  hover:text-[#145A46]
                "
              >
                <ArrowLeft
                  size={17}
                  strokeWidth={1.8}
                />

                Contact UNUS
              </Link>
            </div>
          </div>

          {/* RIGHT 404 VISUAL */}

          <div
            className="
              relative
              flex
              min-h-[300px]
              items-center
              justify-center

              sm:min-h-[380px]
              lg:min-h-[500px]
            "
          >
            <div
              className="
                absolute
                h-[270px]
                w-[270px]
                rounded-full
                border
                border-[#145A46]/10

                sm:h-[340px]
                sm:w-[340px]

                lg:h-[430px]
                lg:w-[430px]
              "
            />

            <div
              className="
                absolute
                h-[210px]
                w-[210px]
                rounded-full
                border
                border-[#145A46]/10

                sm:h-[270px]
                sm:w-[270px]

                lg:h-[340px]
                lg:w-[340px]
              "
            />

            <div
              className="
                absolute
                h-[150px]
                w-[150px]
                rounded-full
                bg-[#EAF3EE]

                sm:h-[200px]
                sm:w-[200px]

                lg:h-[250px]
                lg:w-[250px]
              "
            />

            <p
              className="
                relative
                z-10
                text-[100px]
                font-semibold
                leading-none
                tracking-[-0.08em]
                text-[#145A46]

                sm:text-[140px]
                lg:text-[190px]
              "
            >
              404
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}