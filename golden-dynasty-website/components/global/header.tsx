"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navigation = [
  {
    name: "Home",
    href: "/",
    dropdown: null,
  },
  {
    name: "Company",
    href: "#",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/recruitment" },
    ],
  },
  {
    name: "Solutions",
    href: "#",
    dropdown: [
      { name: "Products", href: "/products" },
      { name: "Services", href: "/services" },
      { name: "Projects", href: "/projects" },
      { name: "Rentals", href: "/rentals" },
    ],
  },
  {
    name: "Social Impact",
    href: "/social-development",
    dropdown: [
      {
        name: "Community Contributions",
        href: "/social-development#community",
      },
      {
        name: "Donations & Development",
        href: "/social-development#donations",
      },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleMobileDropdownToggle = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 w-full z-500 transition-all duration-700 ease-in-out ${
        isScrolled
          ? "bg-white/98 backdrop-blur-2xl shadow-2xl shadow-golden/10 border-b border-golden/30"
          : "bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-transparent backdrop-blur-md"
      }`}
    >
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-golden to-transparent" />
      )}

      <nav
        className="mx-auto flex max-w-container items-center justify-between px-6 lg:px-8 py-1.5"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <div className="relative">
              <Image
                src="/images/golden-dynasty-logo.png"
                alt="Golden Dynasty SA"
                width={280}
                height={60}
                className="w-auto transition-all duration-500 group-hover:scale-110 h-16 drop-shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-golden/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 scale-110" />
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className={`relative inline-flex items-center justify-center rounded-2xl p-3 transition-all duration-300 hover:bg-golden/20 hover:scale-110 ${
              isScrolled
                ? "text-slate-800 hover:text-golden"
                : "text-white hover:text-golden"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-0">
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              />
            </div>
          </Button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-1 lg:flex-1 lg:justify-end lg:mr-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className={`flex items-center gap-2 py-3 font-semibold rounded-2xl transition-all duration-400 group text-base tracking-wide whitespace-nowrap px-4 ${
                    isScrolled
                      ? "text-slate-800 hover:text-golden hover:bg-golden/10 hover:shadow-lg"
                      : "text-white hover:text-golden hover:bg-white/10 hover:shadow-2xl text-shadow-lg"
                  }`}
                  style={
                    !isScrolled
                      ? {
                          textShadow:
                            "2px 2px 8px rgba(0,0,0,0.2), 0 0 12px rgba(0,0,0,0.2)",
                        }
                      : {}
                  }
                >
                  {item.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-all duration-300 ${
                      activeDropdown === item.name
                        ? "rotate-180 text-golden"
                        : ""
                    }`}
                  />
                  <span className="absolute bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-golden to-golden-light rounded-full transition-all duration-400 group-hover:w-3/4 group-hover:left-1/8" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 py-3 font-semibold rounded-2xl transition-all duration-400 group text-base tracking-wide whitespace-nowrap px-4 ${
                    isScrolled
                      ? "text-slate-800 hover:text-golden hover:bg-golden/10 hover:shadow-lg"
                      : "text-white hover:text-golden hover:bg-white/10 hover:shadow-2xl"
                  }`}
                  style={
                    !isScrolled
                      ? {
                          textShadow:
                            "2px 2px 8px rgba(0,0,0,0.2), 0 0 12px rgba(0,0,0,0.2)",
                        }
                      : {}
                  }
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-golden to-golden-light rounded-full transition-all duration-400 group-hover:w-3/4 group-hover:left-1/8" />
                </Link>
              )}

              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white/98 backdrop-blur-2xl rounded-3xl border-2 border-golden/30 shadow-2xl shadow-golden/20 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300 ease-out">
                  <div className="py-3">
                    {item.dropdown.map((dropdownItem, index) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-8 py-4 text-base font-medium text-slate-700 hover:text-golden hover:bg-golden/10 transition-all duration-300 hover:translate-x-2 border-l-4 border-transparent hover:border-golden"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button
            asChild
            className="bg-gradient-to-r from-golden to-golden-light hover:from-golden-dark hover:to-golden font-bold px-8 py-3 rounded-2xl transition-all duration-400 hover:scale-110 hover:rotate-1 shadow-xl hover:shadow-2xl hover:shadow-golden/40 border-2 border-golden/50 hover:border-golden text-background"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop with blur effect */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-all duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        />

        {/* Menu panel */}
        <div
          className={`absolute inset-x-0 top-0 h-full bg-gradient-to-br from-white via-[#FFFCF0] to-[#FFF8E1] transform transition-all duration-500 ease-out ${
            mobileMenuOpen
              ? "translate-y-0 scale-100"
              : "-translate-y-full scale-95"
          }`}
        >
          {/* Header with enhanced styling */}
          <div className="flex items-center justify-between p-6 border-b border-golden/20 bg-white/80 backdrop-blur-sm shadow-lg">
            <Image
              src="/images/golden-dynasty-logo.png"
              alt="Golden Dynasty SA"
              width={200}
              height={40}
              className="h-12 w-auto drop-shadow-lg"
            />
            <Button
              variant="ghost"
              className="relative rounded-full p-3 text-slate-800 hover:text-golden hover:bg-golden/10 hover:scale-110 transition-all duration-300 group"
              onClick={closeMobileMenu}
            >
              <X className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
              <div className="absolute inset-0 rounded-full bg-golden/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-left" />
            </Button>
          </div>

          {/* Navigation with staggered animations */}
          <div className="flex-1 h-screen p-6 space-y-4 overflow-y-auto bg-background">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-500 ease-out ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleMobileDropdownToggle(item.name)}
                      className="w-full group relative overflow-hidden flex items-center justify-between p-5 text-left font-bold text-xl text-slate-900 hover:text-golden transition-all duration-300 bg-white/60 hover:bg-white/80 rounded-2xl shadow-sm hover:shadow-lg border border-golden/10 hover:border-golden/30"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown
                        className={`h-6 w-6 text-golden transition-all duration-300 ${
                          activeMobileDropdown === item.name
                            ? "rotate-180 scale-110"
                            : ""
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-golden/5 to-golden-light/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeMobileDropdown === item.name
                          ? "max-h-96 opacity-100 mt-3"
                          : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <div className="ml-4 space-y-2 bg-white/40 rounded-xl p-4 border border-golden/10">
                        {item.dropdown.map((dropdownItem, subIndex) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`block p-4 text-lg text-slate-700 hover:text-golden transition-all duration-300 hover:bg-white/60 rounded-xl hover:translate-x-2 border-l-4 border-transparent hover:border-golden transform ${
                              activeMobileDropdown === item.name
                                ? "translate-x-0 opacity-100"
                                : "translate-x-4 opacity-0"
                            }`}
                            style={{ transitionDelay: `${subIndex * 50}ms` }}
                            onClick={closeMobileMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block group relative overflow-hidden p-5 font-bold text-xl text-slate-900 hover:text-golden transition-all duration-300 bg-white/60 hover:bg-white/80 rounded-2xl shadow-sm hover:shadow-lg border border-golden/10 hover:border-golden/30 hover:scale-[1.02]"
                    onClick={closeMobileMenu}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-golden/5 to-golden-light/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </Link>
                )}
              </div>
            ))}

            {/* Enhanced Contact button */}
            <div
              className={`pt-8 transform transition-all duration-500 ease-out ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${navigation.length * 100}ms` }}
            >
              <Button
                asChild
                className="w-full group relative overflow-hidden bg-gradient-to-r from-golden to-golden-light hover:from-golden-dark hover:to-golden text-slate-900 font-bold py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-golden/40 border-2 border-golden/50 hover:border-golden transition-all duration-400 hover:scale-105"
              >
                <Link href="/contact" onClick={closeMobileMenu}>
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
