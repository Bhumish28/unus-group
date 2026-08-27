"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
  MapPin,
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

export default function Footer() {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();

    const section =
      document.getElementById(sectionId);

    if (!section) return;

    const navbarOffset = 110;

    const position =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${sectionId}`
    );
  };

  return (
    <footer
      className="
        overflow-hidden
        bg-[#0C2F26]
        text-white
      "
    >
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          px-5
          py-14
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12
            md:grid-cols-2
            lg:grid-cols-[1.25fr_0.7fr_1fr_1.2fr]
            lg:gap-10
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-[64px]
                  w-[64px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  p-1.5
                "
              >
                <Image
                  src="/unus-logo.jpeg"
                  alt="UNUS Group"
                  width={60}
                  height={60}
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>

              <div>
                <p
                  className="
                    text-xl
                    font-bold
                    tracking-[0.14em]
                  "
                >
                  UNUS
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-bold
                    tracking-[0.20em]
                    text-white/55
                  "
                >
                  GROUP
                </p>
              </div>
            </Link>

            <p
              className="
                mt-6
                max-w-sm
                text-[15px]
                leading-7
                text-white/55
              "
            >
              Engineering, innovative construction
              solutions and thoughtful interior
              design under one group.
            </p>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/40
              "
            >
              Navigation
            </p>

            <div
              className="
                mt-5
                flex
                flex-col
                items-start
                gap-3
              "
            >
              <FooterSectionLink
                href="#about"
                onClick={(e) =>
                  scrollToSection(
                    e,
                    "about"
                  )
                }
              >
                About Us
              </FooterSectionLink>

              <FooterSectionLink
                href="#companies"
                onClick={(e) =>
                  scrollToSection(
                    e,
                    "companies"
                  )
                }
              >
                Our Companies
              </FooterSectionLink>

              <FooterSectionLink
                href="#services"
                onClick={(e) =>
                  scrollToSection(
                    e,
                    "services"
                  )
                }
              >
                Services
              </FooterSectionLink>

              <FooterSectionLink
                href="#projects"
                onClick={(e) =>
                  scrollToSection(
                    e,
                    "projects"
                  )
                }
              >
                Projects
              </FooterSectionLink>

              <FooterSectionLink
                href="#contact"
                onClick={(e) =>
                  scrollToSection(
                    e,
                    "contact"
                  )
                }
              >
                Contact Us
              </FooterSectionLink>
            </div>
          </div>

          {/* =================================================
              COMPANIES
          ================================================== */}

          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/40
              "
            >
              Our Companies
            </p>

            <div
              className="
                mt-5
                flex
                flex-col
                items-start
                gap-4
              "
            >
              <FooterPageLink href="/companies/engineering">
                UNUS Engineering & Consultant
              </FooterPageLink>

              <FooterPageLink href="/companies/homes">
                UNUS Homes
              </FooterPageLink>

              <FooterPageLink href="/companies/interior">
                UNUS Interior & Design
              </FooterPageLink>
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/40
              "
            >
              Contact
            </p>

            <div
              className="
                mt-5
                space-y-5
              "
            >
              {/* EMAIL */}

              <a
                href="/opening?target=gmail"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-[14px]
                  leading-6
                  text-white/65
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  size={17}
                  className="
                    mt-1
                    shrink-0
                    text-white/40
                  "
                />

                <span className="break-all">
                  unusconsultantsak@gmail.com
                </span>
              </a>

              {/* PHONE */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-[14px]
                  leading-6
                  text-white/65
                "
              >
                <Phone
                  size={17}
                  className="
                    mt-1
                    shrink-0
                    text-white/40
                  "
                />

                <div>
                  <a
                    href="tel:+918378813147"
                    className="
                      block
                      sm:pointer-events-none
                    "
                  >
                    +91 83788 13147
                  </a>

                  <a
                    href="tel:+918999394694"
                    className="
                      mt-1
                      block
                      sm:pointer-events-none
                    "
                  >
                    +91 89993 94694
                  </a>
                </div>
              </div>

              {/* =================================================
                  OUR PRESENCE
              ================================================== */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <MapPin
                  size={17}
                  className="
                    mt-1
                    shrink-0
                    text-white/40
                  "
                />

                <div className="min-w-0">
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white/40
                    "
                  >
                    Our Presence
                  </p>

                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      items-center
                      gap-x-2.5
                      gap-y-1.5
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
                            gap-2.5
                          "
                        >
                          <span
                            className="
                              text-[14px]
                              font-semibold
                              text-white/70
                            "
                          >
                            {location}
                          </span>

                          {index <
                            locations.length -
                              1 && (
                            <span
                              className="
                                text-[16px]
                                font-black
                                leading-none
                                text-white/80
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
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div
        className="
          border-t
          border-white/10
          px-5
          py-5
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-3
            text-[12px]
            text-white/35
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} UNUS
            Group. All rights reserved.
          </p>

          <p>
            Engineering · Homes · Interior &
            Design
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER SECTION LINK
========================================================= */

function FooterSectionLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        group
        inline-flex
        items-center
        gap-1.5
        text-[14px]
        font-medium
        text-white/55
        transition-colors
        hover:text-white
      "
    >
      {children}
    </Link>
  );
}

/* =========================================================
   FOOTER PAGE LINK
========================================================= */

function FooterPageLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        items-start
        gap-2
        text-[14px]
        font-medium
        leading-6
        text-white/55
        transition-colors
        hover:text-white
      "
    >
      <span>{children}</span>

      <ArrowUpRight
        size={14}
        className="
          mt-1
          shrink-0
          opacity-0
          transition-all
          duration-200
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:opacity-100
        "
      />
    </Link>
  );
}