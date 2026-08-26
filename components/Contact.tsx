"use client";

import { motion } from "motion/react";

import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

/* =========================================================
   CONTACT DETAILS
========================================================= */

const email = "unusconsultantsak@gmail.com";

const phoneOneDisplay = "+91 83788 13147";
const phoneOneNumber = "+918378813147";

const phoneTwoDisplay = "+91 89993 94694";
const phoneTwoNumber = "+918999394694";

const officeAddress =
  "301 Trimurty Plaza, Above the Ola Show Room, Near McDonald's, Badlapur East, Maharashtra 421503";

/* =========================================================
   GMAIL LINK
========================================================= */

const gmailLink =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${email}` +
  `&su=${encodeURIComponent("UNUS Group Enquiry")}` +
  `&body=${encodeURIComponent(
    "Hi,\n\nI have a query regarding UNUS Group services. I would like to know more about your services and discuss my requirements.\n\nThank you."
  )}`;

/* =========================================================
   WHATSAPP
========================================================= */

const whatsappMessage =
  "Hi, I have a query regarding UNUS Group services. I would like to discuss my requirements with you.";

const whatsappLink =
  `https://wa.me/918999394694?text=${encodeURIComponent(
    whatsappMessage
  )}`;

/* =========================================================
   GOOGLE MAPS
========================================================= */

const googleMapsLink =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    officeAddress
  )}`;

/* =========================================================
   CONTACT COMPONENT
========================================================= */

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        scroll-mt-28
        overflow-hidden
        bg-[#F5F3EE]
        px-6
        py-24
        lg:px-8
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}

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
          }}
          className="
            grid
            gap-8
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
          "
        >
          <div>
            <p
              className="
                text-base
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#B76832]
                md:text-lg
              "
            >
              Contact Us
            </p>

            <h2
              className="
                mt-4
                max-w-4xl
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.03em]
                text-[#20221F]
                md:text-5xl
                lg:text-[56px]
              "
            >
              Have a project in mind?{" "}
              <span className="text-[#6F665B]">
                Let&apos;s build it together.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-lg
              text-[18px]
              leading-9
              text-[#65635D]
              lg:justify-self-end
            "
          >
            Connect with UNUS Group for engineering consultancy,
            ground screw construction or complete interior design
            solutions.
          </p>
        </motion.div>

        {/* MAIN CONTACT PANEL */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-12
            overflow-hidden
            rounded-[36px]
            border
            border-[#DDD8D0]
            bg-white
            shadow-[0_24px_70px_rgba(48,42,34,0.08)]
          "
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT PANEL */}

            <div
              className="
                relative
                overflow-hidden
                bg-[#242522]
                px-8
                py-10
                text-white
                md:px-11
                md:py-12
              "
            >
              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-[280px]
                  w-[280px]
                  rounded-full
                  border
                  border-white/10
                "
              />

              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-[170px]
                  w-[170px]
                  rounded-full
                  border
                  border-white/10
                "
              />

              <div className="relative z-10">

                <div
                  className="
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/10
                  "
                >
                  <Building2 size={25} />
                </div>

                <p
                  className="
                    mt-8
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#D8B184]
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
                    md:text-[40px]
                  "
                >
                  Engineering, construction and design under one
                  group.
                </h3>

                <p
                  className="
                    mt-6
                    max-w-md
                    text-[17px]
                    leading-8
                    text-white/65
                  "
                >
                  Tell us what you&apos;re planning and our team can
                  help you identify the right UNUS business for your
                  requirements.
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
                    "Engineering Consultancy",
                    "UNUS Homes",
                    "Interior & Design",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/15
                        bg-white/[0.06]
                        px-4
                        py-2.5
                        text-[14px]
                        font-semibold
                        text-white/75
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* WHATSAPP */}

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#D9681E]
                    px-6
                    py-4
                    text-[16px]
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#C75D19]
                    active:scale-95
                  "
                >
                  <MessageCircle size={19} />

                  Start a Conversation

                  <ArrowUpRight
                    size={19}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </div>

            {/* RIGHT CONTACT DETAILS */}

            <div
              className="
                flex
                flex-col
                justify-center
                px-8
                py-10
                md:px-11
                md:py-12
              "
            >
              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#A87349]
                "
              >
                Get In Touch
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-[#242722]
                  md:text-4xl
                "
              >
                Talk to the UNUS team.
              </h3>

              <div className="mt-9 space-y-5">

                {/* EMAIL */}

                <ContactRow
                  icon={Mail}
                  label="Email"
                >
                  <a
                    href={gmailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      break-all
                      text-[18px]
                      font-semibold
                      text-[#292D28]
                      transition-colors
                      duration-200
                      hover:text-[#D9681E]
                    "
                  >
                    {email}
                  </a>
                </ContactRow>

                {/* BOTH PHONE NUMBERS */}

                <ContactRow
                  icon={Phone}
                  label="Phone"
                >
                  {/* DESKTOP */}

                  <div
                    className="
                      hidden
                      space-y-1
                      md:block
                    "
                  >
                    <p
                      className="
                        text-[18px]
                        font-semibold
                        leading-8
                        text-[#292D28]
                      "
                    >
                      {phoneOneDisplay}
                    </p>

                    <p
                      className="
                        text-[18px]
                        font-semibold
                        leading-8
                        text-[#292D28]
                      "
                    >
                      {phoneTwoDisplay}
                    </p>
                  </div>

                  {/* MOBILE - BOTH OPEN DIALER */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-2
                      md:hidden
                    "
                  >
                    <a
                      href={`tel:${phoneOneNumber}`}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-[18px]
                        font-semibold
                        text-[#292D28]
                        transition-colors
                        hover:text-[#D9681E]
                      "
                    >
                      {phoneOneDisplay}

                      <Phone size={15} />
                    </a>

                    <a
                      href={`tel:${phoneTwoNumber}`}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-[18px]
                        font-semibold
                        text-[#292D28]
                        transition-colors
                        hover:text-[#D9681E]
                      "
                    >
                      {phoneTwoDisplay}

                      <Phone size={15} />
                    </a>
                  </div>
                </ContactRow>

                {/* OFFICE / GOOGLE MAPS */}

                <ContactRow
                  icon={MapPin}
                  label="Office"
                >
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      max-w-xl
                      items-start
                      gap-2
                      text-[17px]
                      font-medium
                      leading-8
                      text-[#4F5851]
                      transition-colors
                      duration-200
                      hover:text-[#D9681E]
                    "
                  >
                    <span>
                      301 Trimurty Plaza, Above the Ola Show Room,
                      Near McDonald&apos;s, Badlapur East — 421503
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="
                        mt-[6px]
                        shrink-0
                        transition-transform
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>
                </ContactRow>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT ROW
========================================================= */

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        grid
        gap-4
        rounded-[22px]
        border
        border-[#E3E0DA]
        bg-white
        p-5
        sm:grid-cols-[56px_1fr]
        sm:items-center
      "
    >
      <div
        className="
          flex
          h-13
          w-13
          items-center
          justify-center
          rounded-2xl
          bg-[#F0ECE5]
          text-[#8F684A]
        "
      >
        <Icon
          size={22}
          strokeWidth={1.8}
        />
      </div>

      <div>
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#99928A]
          "
        >
          {label}
        </p>

        <div className="mt-1">
          {children}
        </div>
      </div>
    </div>
  );
}