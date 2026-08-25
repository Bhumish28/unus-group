"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     SCROLL TO SECTION
  ====================================================== */

  const goToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();

    const target = document.getElementById(sectionId);

    if (!target) {
      console.warn(`Section #${sectionId} was not found.`);
      return;
    }

    /*
      Reduced from 110px so sections do not leave
      too much blank space below the navbar.
    */
    const navbarOffset = 110;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${sectionId}`
    );

    setMenuOpen(false);
  };

  /* =====================================================
     NAVBAR STYLES
  ====================================================== */

  const navTextColor = isScrolled
    ? "text-[#26362F] hover:text-[#145A46]"
    : "text-white hover:text-white";

  const navLinkClass = `
    inline-block

    text-[15px]
    font-bold

    tracking-[0.01em]

    transition-all
    duration-200

    hover:scale-105
    active:scale-95

    ${navTextColor}

    ${
      !isScrolled
        ? "drop-shadow-[0_2px_5px_rgba(0,0,0,0.90)]"
        : ""
    }
  `;

  const dropdownButtonClass = `
    flex
    items-center
    gap-1

    text-[15px]
    font-bold

    tracking-[0.01em]

    transition-all
    duration-200

    hover:scale-105
    active:scale-95

    ${navTextColor}

    ${
      !isScrolled
        ? "drop-shadow-[0_2px_5px_rgba(0,0,0,0.90)]"
        : ""
    }
  `;

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50

        w-full

        px-3

        transition-all
        duration-500

        md:px-5

        ${
          !isScrolled
            ? "bg-gradient-to-b from-black/30 via-black/10 to-transparent"
            : ""
        }
      `}
    >
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div
        className={`
          mx-auto
          mt-3

          flex
          h-20
          max-w-7xl

          items-center
          justify-between

          px-5

          transition-all
          duration-500

          lg:px-7

          ${
            isScrolled
              ? `
                  rounded-full

                  border
                  border-white/70

                  bg-white/85

                  shadow-[0_10px_40px_rgba(0,0,0,0.12)]

                  backdrop-blur-xl
                `
              : `
                  border
                  border-transparent

                  bg-transparent
                `
          }
        `}
      >
        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          href="/"
          className="
            flex
            origin-left

            items-center
            gap-4

            transition-transform
            duration-300

            hover:scale-105

            active:scale-95
          "
        >
          <Image
            src="/unus-logo.png"
            alt="UNUS Group Logo"
            width={68}
            height={68}
            priority
            className="
              h-16
              w-auto
              object-contain
            "
          />

          <div className="flex flex-col leading-none">
            <span
              className={`
                text-2xl
                font-bold

                tracking-[0.14em]

                transition-colors
                duration-500

                ${
                  isScrolled
                    ? "text-[#145A46]"
                    : "text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.90)]"
                }
              `}
            >
              UNUS
            </span>

            <span
              className={`
                mt-[4px]

                text-[11px]
                font-bold

                tracking-[0.20em]

                transition-colors
                duration-500

                ${
                  isScrolled
                    ? "text-[#66736D]"
                    : "text-white/90 drop-shadow-[0_2px_5px_rgba(0,0,0,0.90)]"
                }
              `}
            >
              GROUP
            </span>
          </div>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-7

            lg:flex
          "
        >
          {/* HOME */}

          <Link
            href="/"
            className={navLinkClass}
          >
            Home
          </Link>

          {/* =================================================
              ABOUT US DROPDOWN
          ================================================== */}

          <div className="group relative">
            <button
              type="button"
              className={dropdownButtonClass}
            >
              About Us

              <ChevronDown
                size={17}
                strokeWidth={2.4}
                className="
                  transition-transform
                  duration-200

                  group-hover:rotate-180
                "
              />
            </button>

            <div
              className="
                invisible

                absolute
                left-1/2
                top-full

                mt-4
                w-64

                -translate-x-1/2
                translate-y-2

                rounded-2xl

                border
                border-[#DDE6E1]

                bg-white/95

                p-2

                opacity-0

                shadow-xl

                backdrop-blur-xl

                transition-all
                duration-200

                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <DropdownLink
                href="#about"
                onClick={(e) =>
                  goToSection(e, "about")
                }
              >
                About UNUS Group
              </DropdownLink>

              <DropdownLink
                href="#mission"
                onClick={(e) =>
                  goToSection(e, "mission")
                }
              >
                Mission & Vision
              </DropdownLink>

              <DropdownLink
                href="#values"
                onClick={(e) =>
                  goToSection(e, "values")
                }
              >
                Core Values
              </DropdownLink>

              <DropdownLink
                href="#why-unus"
                onClick={(e) =>
                  goToSection(e, "why-unus")
                }
              >
                Why Choose UNUS
              </DropdownLink>

              <DropdownLink
                href="#founders"
                onClick={(e) =>
                  goToSection(e, "founders")
                }
              >
                Founders & Leadership
              </DropdownLink>
            </div>
          </div>

          {/* =================================================
              OUR COMPANIES
          ================================================== */}

          <Link
            href="#companies"
            onClick={(e) =>
              goToSection(e, "companies")
            }
            className={navLinkClass}
          >
            Our Companies
          </Link>

          {/* =================================================
              SERVICES
          ================================================== */}

          <Link
            href="#services"
            onClick={(e) =>
              goToSection(e, "services")
            }
            className={navLinkClass}
          >
            Services
          </Link>

          {/* =================================================
              PROJECTS - NO DROPDOWN
          ================================================== */}

          <Link
            href="#projects"
            onClick={(e) =>
              goToSection(e, "projects")
            }
            className={navLinkClass}
          >
            Projects
          </Link>

          {/* =================================================
              CONTACT
          ================================================== */}

          <Link
            href="#contact"
            onClick={(e) =>
              goToSection(e, "contact")
            }
            className={navLinkClass}
          >
            Contact Us
          </Link>
        </nav>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation menu"
          className={`
            rounded-full

            p-2

            transition-all
            duration-300

            active:scale-90

            lg:hidden

            ${
              isScrolled
                ? "text-[#145A46] hover:bg-[#EAF3EE]"
                : "bg-black/25 text-white backdrop-blur-md"
            }
          `}
        >
          {menuOpen ? (
            <X size={27} />
          ) : (
            <Menu size={27} />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {menuOpen && (
        <div
          className="
            mx-auto
            mt-2

            max-h-[75vh]
            max-w-7xl

            overflow-y-auto

            rounded-[28px]

            border
            border-white/70

            bg-white/95

            px-6
            py-6

            shadow-xl

            backdrop-blur-xl

            lg:hidden
          "
        >
          <nav
            className="
              flex
              flex-col
              gap-5
            "
          >
            {/* HOME */}

            <Link
              href="/"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                font-bold
                text-[#26362F]
              "
            >
              Home
            </Link>

            {/* =================================================
                ABOUT MOBILE
            ================================================== */}

            <MobileGroup title="About Us">
              <MobileLink
                href="#about"
                onClick={(e) =>
                  goToSection(e, "about")
                }
              >
                About UNUS Group
              </MobileLink>

              <MobileLink
                href="#mission"
                onClick={(e) =>
                  goToSection(e, "mission")
                }
              >
                Mission & Vision
              </MobileLink>

              <MobileLink
                href="#values"
                onClick={(e) =>
                  goToSection(e, "values")
                }
              >
                Core Values
              </MobileLink>

              <MobileLink
                href="#why-unus"
                onClick={(e) =>
                  goToSection(e, "why-unus")
                }
              >
                Why Choose UNUS
              </MobileLink>

              <MobileLink
                href="#founders"
                onClick={(e) =>
                  goToSection(e, "founders")
                }
              >
                Founders & Leadership
              </MobileLink>
            </MobileGroup>

            {/* =================================================
                OUR COMPANIES MOBILE
            ================================================== */}

            <MobileLink
              href="#companies"
              onClick={(e) =>
                goToSection(e, "companies")
              }
            >
              Our Companies
            </MobileLink>

            {/* =================================================
                SERVICES MOBILE
            ================================================== */}

            <MobileLink
              href="#services"
              onClick={(e) =>
                goToSection(e, "services")
              }
            >
              Services
            </MobileLink>

            {/* =================================================
                PROJECTS MOBILE - NO DROPDOWN
            ================================================== */}

            <MobileLink
              href="#projects"
              onClick={(e) =>
                goToSection(e, "projects")
              }
            >
              Projects
            </MobileLink>

            {/* =================================================
                CONTACT MOBILE
            ================================================== */}

            <MobileLink
              href="#contact"
              onClick={(e) =>
                goToSection(e, "contact")
              }
            >
              Contact Us
            </MobileLink>
          </nav>
        </div>
      )}
    </header>
  );
}

/* =========================================================
   DROPDOWN LINK
========================================================= */

function DropdownLink({
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
        block

        rounded-xl

        px-4
        py-3

        text-sm
        font-semibold

        text-[#35413C]

        transition-all
        duration-200

        hover:bg-[#EAF3EE]
        hover:text-[#145A46]

        active:scale-[0.98]
      "
    >
      {children}
    </Link>
  );
}

/* =========================================================
   MOBILE GROUP
========================================================= */

function MobileGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p
        className="
          mb-3

          font-bold

          text-[#145A46]
        "
      >
        {title}
      </p>

      <div
        className="
          ml-3

          flex
          flex-col
          gap-3
        "
      >
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE LINK
========================================================= */

function MobileLink({
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
        text-sm
        font-semibold

        text-[#66736D]

        transition-colors

        hover:text-[#145A46]
      "
    >
      {children}
    </Link>
  );
}