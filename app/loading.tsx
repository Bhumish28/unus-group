export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F8FAF8]">
      {/* NAVBAR SKELETON */}

      <div
        className="
          fixed
          left-0
          right-0
          top-0
          z-50
          border-b
          border-[#E1E8E4]
          bg-white/95
          px-6
          backdrop-blur-md

          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[90px]
            max-w-7xl
            items-center
            justify-between
          "
        >
          <div
            className="
              h-12
              w-36
              animate-pulse
              rounded-xl
              bg-[#E4ECE8]
            "
          />

          <div className="hidden items-center gap-8 lg:flex">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="
                  h-4
                  w-20
                  animate-pulse
                  rounded-full
                  bg-[#E4ECE8]
                "
              />
            ))}
          </div>

          <div
            className="
              h-10
              w-10
              animate-pulse
              rounded-xl
              bg-[#E4ECE8]

              lg:hidden
            "
          />
        </div>
      </div>

      {/* HERO SKELETON */}

      <section
        className="
          flex
          min-h-[100svh]
          items-center
          px-6
          pt-[110px]

          lg:min-h-screen
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-7xl
            gap-12

            lg:grid-cols-2
            lg:items-center
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                h-4
                w-44
                animate-pulse
                rounded-full
                bg-[#D7E4DE]
              "
            />

            <div
              className="
                mt-7
                h-14
                w-full
                max-w-xl
                animate-pulse
                rounded-2xl
                bg-[#DFE8E4]
              "
            />

            <div
              className="
                mt-4
                h-14
                w-[80%]
                max-w-lg
                animate-pulse
                rounded-2xl
                bg-[#DFE8E4]
              "
            />

            <div
              className="
                mt-8
                h-4
                w-full
                max-w-lg
                animate-pulse
                rounded-full
                bg-[#E5ECE9]
              "
            />

            <div
              className="
                mt-3
                h-4
                w-[85%]
                max-w-md
                animate-pulse
                rounded-full
                bg-[#E5ECE9]
              "
            />

            <div
              className="
                mt-8
                flex
                gap-3
              "
            >
              <div
                className="
                  h-12
                  w-40
                  animate-pulse
                  rounded-full
                  bg-[#D3E1DB]
                "
              />

              <div
                className="
                  h-12
                  w-32
                  animate-pulse
                  rounded-full
                  bg-[#E4EBE8]
                "
              />
            </div>
          </div>

          {/* RIGHT IMAGE PLACEHOLDER */}

          <div
            className="
              hidden
              h-[520px]
              animate-pulse
              rounded-[32px]
              bg-[#DFE8E4]

              lg:block
            "
          />
        </div>
      </section>

      {/* LOADING TEXT */}

      <div
        className="
          fixed
          bottom-8
          left-1/2
          z-50
          -translate-x-1/2
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-[#DDE6E1]
            bg-white
            px-5
            py-3
            shadow-lg
          "
        >
          <span
            className="
              h-2
              w-2
              animate-pulse
              rounded-full
              bg-[#145A46]
            "
          />

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#145A46]
            "
          >
            Loading UNUS
          </span>
        </div>
      </div>
    </main>
  );
}