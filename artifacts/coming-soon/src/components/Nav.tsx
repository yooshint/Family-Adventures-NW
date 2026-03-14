import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Trees } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Sponsors", href: "/sponsors" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? ""
          : "backdrop-blur-md bg-background/90 shadow-sm border-b border-border/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Family Adventures Northwest — Home"
          className="flex items-center gap-3 no-underline"
        >
          <div
            className={`p-2.5 rounded-xl border transition-all duration-300 ${
              isTransparent
                ? "bg-white/15 border-white/25 text-white backdrop-blur-sm"
                : "bg-primary/10 border-primary/10 text-primary"
            }`}
          >
            <Trees className="w-5 h-5" />
          </div>
          <span
            className={`font-display font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
              isTransparent ? "text-white drop-shadow-md" : "text-foreground"
            }`}
          >
            <span className="hidden sm:inline">Family Adventures Northwest</span>
            <span className="sm:hidden">Family Adventures NW</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-0.5 md:gap-1" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => {
            const isActive = location === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`px-3 md:px-4 py-2 rounded-lg text-sm font-semibold font-sans transition-all duration-200 ${
                  isTransparent
                    ? isActive
                      ? "text-white bg-white/25 backdrop-blur-sm"
                      : "text-white/90 hover:text-white hover:bg-white/15 drop-shadow"
                    : isActive
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
