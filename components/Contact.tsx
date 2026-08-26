"use client";

import { motion } from "motion/react";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const locations = [
  "Mumbai",
  "Goa",
  "Pune",
  "Badlapur",
  "Shirdi",
  "Karjat",
  "Sawantwadi",
  "Sindhudurg",
];

export default function Contact() {
  const email =
    "unusconsultantsak@gmail.com";

  return (
    <section
      id="contact"
      className="
        scroll-mt-28
        bg-[#F8FAF8]
        px-5
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            HEADING
        ====================================================== */}

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
          }}
          className="
            mb-10
            md:mb-12
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#145A46]
              md:text-base
            "
          >
            Contact Us
          </p>

          <h2
            className="
              mt-4
              max-w-4xl
              text-[34px]
              font-semibold
              leading-[1.08]
              tracking-[-0.03em]
              text-[#17211D]
              sm:text-4xl
              md:text-5xl
              lg:text-[54px]
            "
          >
            Have a project in mind?{" "}
            <span className="text-[#145A46]">
              Let&apos;s build it together.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-[16px]
              leading-8
              text-[#66736D]
              md:text-[18px]
            "
          >
            Connect with UNUS Group to discuss
            engineering, ground screw construction
            or interior design requirements.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT GRID
        ====================================================== */}

        <div
          className="
            grid
            overflow-hidden
            rounded-[32px]
            border
            border-[#DDE6E1]
            bg-white
            shadow-[0_18px_55px_rgba(20,50,38,0.07)]
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* =================================================
              LEFT PANEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              flex
              flex-col
              justify-between
              bg-[#123E31]
              px-7
              py-9
              text-white
              sm:px-9
              sm:py-11
              lg:px-12
              lg:py-12
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/55
                "
              >
                UNUS Group
              </p>

              <h3
                className="
                  mt-4
                  max-w-lg
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-[-0.02em]
                  sm:text-4xl
                "
              >
                One group.
                <br />
                Multiple capabilities.
              </h3>

              <p
                className="
                  mt-5
                  max-w-md
                  text-[16px]
                  leading-8
                  text-white/65
                "
              >
                Tell us what you are planning and
                our team can help you identify the
                right UNUS service.
              </p>

              {/* BUSINESS TAGS */}

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-2.5
                "
              >
                {[
                  "Engineering",
                  "UNUS Homes",
                  "Interior & Design",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.07]
                      px-4
                      py-2
                      text-[13px]
                      font-semibold
                      text-white/80
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* WHATSAPP */}

            <a
              href="/opening?target=whatsapp"
              className="
                group
                mt-10
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-white
                px-5
                py-3.5
                text-[15px]
                font-bold
                text-[#123E31]
                transition-all
                duration-300
                hover:scale-[1.03]
                active:scale-[0.98]
              "
            >
              <MessageCircle
                size={19}
                strokeWidth={2}
              />

              Start a Conversation

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </motion.div>

          {/* =================================================
              RIGHT PANEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              px-7
              py-9
              sm:px-9
              sm:py-11
              lg:px-12
              lg:py-12
            "
          >
            {/* EMAIL */}

            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EAF3EE]
                  text-[#145A46]
                "
              >
                <Mail size={19} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#8A9690]
                  "
                >
                  Email
                </p>

                <a
                  href="/opening?target=gmail"
                  className="
                    mt-2
                    block
                    break-all
                    text-[16px]
                    font-semibold
                    text-[#17211D]
                    transition-colors
                    hover:text-[#145A46]
                    sm:text-[17px]
                  "
                >
                  {email}
                </a>
              </div>
            </div>

            {/* DIVIDER */}

            <div
              className="
                my-7
                h-px
                bg-[#E3EAE6]
              "
            />

            {/* PHONE */}

            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EAF3EE]
                  text-[#145A46]
                "
              >
                <Phone size={19} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#8A9690]
                  "
                >
                  Call Us
                </p>

                <div
                  className="
                    mt-2
                    flex
                    flex-col
                    gap-1.5
                  "
                >
                  {/* MOBILE */}

                  <a
                    href="tel:+918378813147"
                    className="
                      text-[16px]
                      font-semibold
                      text-[#17211D]
                      sm:hidden
                    "
                  >
                    +91 83788 13147
                  </a>

                  <a
                    href="tel:+918999394694"
                    className="
                      text-[16px]
                      font-semibold
                      text-[#17211D]
                      sm:hidden
                    "
                  >
                    +91 89993 94694
                  </a>

                  {/* DESKTOP */}

                  <p
                    className="
                      hidden
                      text-[17px]
                      font-semibold
                      text-[#17211D]
                      sm:block
                    "
                  >
                    +91 83788 13147
                  </p>

                  <p
                    className="
                      hidden
                      text-[17px]
                      font-semibold
                      text-[#17211D]
                      sm:block
                    "
                  >
                    +91 89993 94694
                  </p>
                </div>
              </div>
            </div>

            {/* DIVIDER */}

            <div
              className="
                my-7
                h-px
                bg-[#E3EAE6]
              "
            />

            {/* =================================================
                OUR PRESENCE
            ================================================== */}

            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EAF3EE]
                  text-[#145A46]
                "
              >
                <MapPin size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#8A9690]
                  "
                >
                  Our Presence
                </p>

                <p
                  className="
                    mt-2
                    text-[15px]
                    leading-7
                    text-[#77827D]
                  "
                >
                  Across key locations in
                  Maharashtra & Goa
                </p>

                {/* LOCATION LIST */}

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    items-center
                    gap-x-3
                    gap-y-2
                  "
                >
                  {locations.map(
                    (
                      location,
                      index
                    ) => (
                      <div
                        key={location}
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            text-[17px]
                            font-semibold
                            text-[#26362F]
                            sm:text-[18px]
                          "
                        >
                          {location}
                        </span>

                        {index <
                          locations.length -
                            1 && (
                          <span
                            className="
                              text-[19px]
                              font-black
                              leading-none
                              text-[#26362F]
                            "
                          >
                            •
                          </span>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}