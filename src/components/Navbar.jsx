import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Listen to scroll container instead of window
      const scrollContainer = document.getElementById('scroll-container');
      if (scrollContainer) {
        setIsScrolled(scrollContainer.scrollTop > 10);
      }
    };

    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Handle smooth scrolling within the scroll container
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const scrollContainer = document.getElementById('scroll-container');
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (scrollContainer && targetElement) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      const scrollTop = scrollContainer.scrollTop;
      const targetPosition = targetRect.top - containerRect.top + scrollTop;
      
      scrollContainer.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled 
          ? "py-2 md:py-3 bg-transparent/80  " 
          : "py-3 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          className="text-lg md:text-xl font-bold text-primary flex items-center"
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Bhavy's </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm lg:text-base"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 relative"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-lg">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};