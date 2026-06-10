'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../../../public/images/groenebaaslogo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#001F3E]">
      <nav className="relative mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Groene Baas Logo"
            className="h-auto w-[200px]"
            priority
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-3xl text-white hover:bg-[#444] focus:outline-none focus:ring-2 focus:ring-white md:hidden"
          aria-label="Menu openen"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <ul
          className={`absolute left-0 top-full w-full flex-col bg-[#001F3E] px-4 py-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:p-0 ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          <li className="group w-full md:w-auto">
            <button
              type="button"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex w-full items-center justify-between px-5 py-3 font-medium text-white hover:bg-[#444] md:w-auto md:justify-start md:gap-2"
              aria-expanded={mobileDropdownOpen}
            >
              Bestellen
              <span className="text-sm transition-transform duration-200 group-hover:rotate-180">
                ▾
              </span>
            </button>

            {/* Desktop mega menu */}
            <div className="invisible absolute left-0 top-full hidden w-full translate-y-2 bg-[#555] opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:block">
              <div className="mx-auto grid max-w-screen-xl grid-cols-3 gap-8 px-4 py-8 text-white">
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
                    Ramen
                  </h3>

                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/product1"
                        className="block rounded-lg p-3 text-white hover:bg-[#666]"
                      >
                        <span className="block font-semibold">
                          PVC-Ramen
                        </span>
                        <span className="text-sm text-white/70">
                          Onderhoudsarm, isolerend en betaalbaar.
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/product2"
                        className="block rounded-lg p-3 text-white hover:bg-[#666]"
                      >
                        <span className="block font-semibold">
                          Aluminium Ramen
                        </span>
                        <span className="text-sm text-white/70">
                          Strak, modern en zeer duurzaam.
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/product3"
                        className="block rounded-lg p-3 text-white hover:bg-[#666]"
                      >
                        <span className="block font-semibold">
                          Houten Ramen
                        </span>
                        <span className="text-sm text-white/70">
                          Klassieke uitstraling met natuurlijke charme.
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
                    Deuren
                  </h3>

                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/deuren"
                        className="block rounded-lg p-3 text-white hover:bg-[#666]"
                      >
                        <span className="block font-semibold">
                          Buitendeuren
                        </span>
                        <span className="text-sm text-white/70">
                          Veilig, isolerend en volledig op maat.
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/schuifpuien"
                        className="block rounded-lg p-3 text-white hover:bg-[#666]"
                      >
                        <span className="block font-semibold">
                          Schuifpuien
                        </span>
                        <span className="text-sm text-white/70">
                          Meer licht en ruimte in huis.
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#001F3E] p-6">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Direct bestellen
                  </h3>

                  <p className="mb-4 text-sm text-white/70">
                    Stel eenvoudig je ramen of deuren samen en vraag direct een
                    prijs aan.
                  </p>

                  <Link
                    href="/bestellen"
                    className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#001F3E] hover:bg-gray-200"
                  >
                    Start bestelling
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile dropdown */}
            <ul
              className={`mt-1 rounded-lg bg-[#555] py-2 md:hidden ${
                mobileDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <li>
                <Link
                  href="/product1"
                  className="block px-4 py-3 text-sm font-medium text-white hover:bg-[#666]"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  PVC-Ramen
                </Link>
              </li>

              <li>
                <Link
                  href="/product2"
                  className="block px-4 py-3 text-sm font-medium text-white hover:bg-[#666]"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  Aluminium Ramen
                </Link>
              </li>

              <li>
                <Link
                  href="/product3"
                  className="block px-4 py-3 text-sm font-medium text-white hover:bg-[#666]"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  Houten Ramen
                </Link>
              </li>
            </ul>
          </li>

          <li className="w-full md:w-auto">
            <Link
              href="/subsidie"
              className="block px-5 py-3 font-medium text-white hover:bg-[#444]"
              onClick={() => setMenuOpen(false)}
            >
              Subsidie
            </Link>
          </li>

          <li className="w-full md:w-auto">
            <Link
              href="/professional"
              className="block px-5 py-3 font-medium text-white hover:bg-[#444]"
              onClick={() => setMenuOpen(false)}
            >
              Professional
            </Link>
          </li>

          <li className="w-full md:w-auto">
            <Link
              href="/contact"
              className="block px-5 py-3 font-medium text-white hover:bg-[#444]"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;