import { useState, useMemo, useEffect } from "react";
import { Search, X, Calendar, DollarSign, Trophy, Users } from "lucide-react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";


import { SearchBar } from "@/components/SearchBar";
import { FilterSection } from "@/components/FilterSection";
import { EventCard } from "@/components/EventCard";
import { SortSelect } from "@/components/SortSelect";
import { MobileFilterDrawer } from "@/components/MobileFilterDrawer";
import { events, categories, dateTags, departments } from "@/components/data/events";


export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Events");
  /* Update initial state to match sort values */
  const [sortBy, setSortBy] = useState("date-desc");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      // Decode URI component just in case, though searchParams usually handles it
      setActiveFilter(decodeURIComponent(category));
    } else {
      // Optional: Reset to All Events if no param, or leave as is to allow state persistence within session if desired.
      // For this request, reflecting the link click is priority.
      setActiveFilter("All Events");
    }
  }, [searchParams]);

  const filteredEvents = useMemo(() => {
    let filtered = [...events];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.venue.toLowerCase().includes(query)
      );
    }

    // Single filter logic - check which group the filter belongs to
    if (activeFilter !== "All Events") {
      if (categories.includes(activeFilter as any)) {
        filtered = filtered.filter((event) => event.categories.includes(activeFilter as any));
      } else if (dateTags.includes(activeFilter as any)) {
        filtered = filtered.filter((event) => event.dateTag === activeFilter);
      } else if (departments.includes(activeFilter as any)) {
        filtered = filtered.filter((event) => event.department === activeFilter);
      }
    }

    // Sort
    switch (sortBy) {
      case "date-desc":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "date-asc":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return filtered;
  }, [searchQuery, activeFilter, sortBy]);



  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-foreground relative overflow-clip selection:bg-primary/30">
      {/* Cyber Snowfall Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              filter: `blur(${Math.random()}px) drop-shadow(0 0 5px rgba(255,255,255,0.8))`,
              animation: `snowfall ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 15}s`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
        {/* Neon Ash/Glow Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute rounded-full opacity-60 mix-blend-screen"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${-10 - Math.random() * 20}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 2 === 0 ? "hsl(var(--neon-cyan))" : "hsl(var(--fire-orange))",
              boxShadow: `0 0 10px ${i % 2 === 0 ? "hsl(var(--neon-cyan))" : "hsl(var(--fire-orange))"}`,
              animation: `spark-rise ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      </div>

      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
             opacity: 0.7;
          }
          100% {
            transform: translateY(110vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>

      {/* Header */}
      <Navbar />


      {/* Hero Section */}
      <section className="relative pt-5 pb-16 px-4">

      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>


      <div className="min-h-screen bg-transparent relative z-10">
        <main className="container mx-auto px-4 py-8">
          {/* Search and Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div className="flex gap-2">
              <MobileFilterDrawer
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
                open={mobileFilterOpen}
                onOpenChange={setMobileFilterOpen}
              />
              <SortSelect value={sortBy} onChange={setSortBy} />
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-5 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <h2 className="text-lg font-bold text-white mb-4 font-orbitron flex items-center gap-2">
                  <span className="w-1 h-5 bg-primary shadow-[0_0_8px_rgba(var(--primary))]"></span>
                  Filters
                </h2>
                <FilterSection
                  activeFilter={activeFilter}
                  onFilterChange={handleFilterChange}
                />
              </div>
            </aside>

            {/* Events Grid */}
            <div className="flex-1">
              {/* Active filter indicator */}
              {activeFilter !== "All Events" && (
                <div className="mb-4 text-sm text-zinc-400 flex items-center gap-2">
                  Showing: <span className="text-primary font-bold px-3 py-1 bg-primary/10 rounded-full border border-primary/20">{activeFilter}</span>
                </div>
              )}

              {/* Results count */}
              <div className="mb-6 text-sm text-zinc-500 font-mono">
                // FOUND {filteredEvents.length} EVENT{filteredEvents.length !== 1 ? "S" : ""}
              </div>

              {filteredEvents.length > 0 ? (
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                >
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-20 border border-dashed border-white/10 rounded-xl bg-white/5">
                  <p className="text-zinc-400 text-lg font-orbitron">No events found in this sector</p>
                  <p className="text-zinc-600 text-sm mt-2">
                    Adjust search parameters to locate targets
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};


