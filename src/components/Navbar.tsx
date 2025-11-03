import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import sparkLogo from "@/assets/spark-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "events-page") {
      navigate("/events");
      setIsOpen(false);
      return;
    }
    
    if (id === "gallery-page") {
      navigate("/gallery");
      setIsOpen(false);
      return;
    }

    if (id === "sponsors-page") {
      navigate("/sponsors");
      setIsOpen(false);
      return;
    }

    if (id === "schedule-page") {
      navigate("/schedule");
      setIsOpen(false);
      return;
    }
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Events", id: "events-page" },
    { name: "Gallery", id: "gallery-page" },
    { name: "Schedule", id: "schedule-page" },
    { name: "Contact", id: "contact" },
    { name: "Sponsors", id: "sponsors-page" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <img 
              src={sparkLogo} 
              alt="SPARK 2K25" 
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            />
            <span className="text-2xl font-orbitron font-bold text-glow-cyan">
              SPARK <span className="text-primary">2K25</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost_glow"
                onClick={() => scrollToSection(link.id)}
                className="font-orbitron"
              >
                {link.name}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost_glow"
                  onClick={() => scrollToSection(link.id)}
                  className="w-full justify-start font-orbitron"
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
