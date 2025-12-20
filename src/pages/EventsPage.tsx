import { useState, useMemo } from "react";
import { Search, X, Calendar, DollarSign, Trophy, Users } from "lucide-react";
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
    <div className="min-h-screen bg-background text-foreground relative overflow-clip">
      {/* Floating Golden Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${-10 - Math.random() * 20}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: "hsl(var(--fire-orange))",
              boxShadow: "0 0 15px hsl(var(--fire-orange) / 0.8)",
              animation: `spark-rise ${4 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <Navbar />


      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Title */}
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-sans font-bold mb-4">
              <span className="text-glow-cyan">SPARK</span>{" "}
              <span className="text-primary">2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-exo mb-2">
              Where Passion Meets Power
            </p>
            <p className="text-sm text-muted-foreground font-exo">
              SV College, Tirupati
            </p>
          </div>



          {/* Category Navbar */}

        </div>
      </section>


      <div className="min-h-screen bg-background">



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
              <div className="sticky top-24 bg-card/50 rounded-xl border border-border/50 p-5">
                <h2 className="text-lg font-bold text-foreground mb-4">Filters</h2>
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
                <div className="mb-4 text-sm text-muted-foreground">
                  Showing: <span className="text-primary font-medium">{activeFilter}</span>
                </div>
              )}

              {/* Results count */}
              <div className="mb-6 text-sm text-muted-foreground">
                {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""} found
              </div>

              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">No events found</p>
                  <p className="text-muted-foreground/70 text-sm mt-2">
                    Try adjusting your search or filters
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


