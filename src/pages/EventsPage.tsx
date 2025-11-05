import { useState } from "react";
import { Search, X, Calendar, DollarSign, Trophy, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Event {
  id: string;
  name: string;
  code: string;
  category: "Technical" | "Cultural" | "Sports" | "Workshop";
  date: string;
  entryFee: string;
  poster: string;
  prizes: string;
  rules: string[];
  type: "Individual" | "Team" | "Individual / Team" | "Individual/ Duo / Team ";
}

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const categories = ["All", "Technical", "Cultural", "Sports", "Workshop"];

  const events: Event[] = [
    {
      id: "1",
      name: "Code Combat",
      code: "TEC001",
      category: "Technical",
      date: "March 15, 2025",
      entryFee: "₹200",
      poster: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
      prizes: "1st: ₹10,000 | 2nd: ₹5,000 | 3rd: ₹2,500",
      rules: [
        "Teams of 2-3 members",
        "6-hour coding competition",
        "Use any programming language",
        "No external help allowed",
      ],
      type: "Team",
    },
    {
      id: "2",
      name: "BGMI Championship",
      code: "SPT001",
      category: "Sports",
      date: "March 16, 2025",
      entryFee: "₹400",
      poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
      prizes: "1st: ₹25,000 | 2nd: ₹15,000 | 3rd: ₹8,000",
      rules: [
        "Squad of 4 players",
        "Classic mode - Erangel",
        "3 rounds - top 16 advance",
        "Kill points + placement points",
      ],
      type: "Team",
    },
    {
      id: "3",
      name: "MUSICON",
      code: "CUL001",
      category: "Cultural",
      date: "March 16, 2026",
      entryFee: "₹150",
      poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
      prizes: "1st: ₹20,000 | 2nd: ₹10,000 | 3rd: ₹5,000",
      rules: [
            "Solo, duet, and group entries are allowed.",
            "Categories include Vocal, Instrumental, and Fusion performances",
            "Solo: 1 participant, Duet: 2 participants, Group: up to 6 members",
            "Solo/Duet time: 2–3 minutes, Group time: 4–5 minutes.",
      ],
      type: "Individual/ Duo / Team ",
    },
    {
      id: "4",
      name: "AI Workshop",
      code: "WRK001",
      category: "Workshop",
      date: "March 18, 2025",
      entryFee: "₹150",
      poster: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      prizes: "Certificate & Swag",
      rules: [
        "Individual participation",
        "Laptop required",
        "3-hour intensive session",
        "Hands-on projects included",
      ],
      type: "Individual",
    },
    {
      id: "5",
      name: "Web Warriors",
      code: "TEC002",
      category: "Technical",
      date: "March 19, 2025",
      entryFee: "₹250",
      poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      prizes: "1st: ₹15,000 | 2nd: ₹8,000 | 3rd: ₹4,000",
      rules: [
        "Individual or teams of 2",
        "Build a responsive web app",
        "8-hour time limit",
        "Deploy on provided platform",
      ],
      type: "Team",
    },
    {
      id: "6",
      name: "Dance off",
      code: "CUL002",
      category: "Cultural",
      date: "March 16, 2026",
      entryFee: "₹200",
      poster: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800",
      prizes: "1st: ₹12,000 | 2nd: ₹6,000 | 3rd: ₹3,000",
      rules: [
        " Open to all college students with valid ID cards.",
        " Solo and group performances are allowed.",
        " Group teams can have 3 to 12 members.",
        " Solo time limit: 2–3 minutes; Group: 4–5 minutes.",
      ],
      type: "Individual / Team",
    },
    {
      id: "7",
      name: "Art Gallery",
      code: "CUL002",
      category: "Cultural",
      date: "March 16, 2026",
      entryFee: "₹100",
      poster: "https://tse1.mm.bing.net/th/id/OIP.2v8w2PBuI1n5OYMT9i8hGAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      prizes: "1st: ₹12,000 | 2nd: ₹6,000 | 3rd: ₹3,000",
      rules: [
       " Individual participation only.",
       "Theme: “Colours of Imagination”",
       " Bring your own materials and supplies.",
       " Each participant can submit only one artwork.",
      ],
      type: "Individual",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4">
              <span className="text-glow-cyan">SPARK</span>{" "}
              <span className="text-primary">2K25</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-exo mb-2">
              Where Passion Meets Power
            </p>
            <p className="text-sm text-muted-foreground font-exo">
              SV College, Tirupati
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for your favorite event…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 bg-card/50 backdrop-blur-sm border-border focus:border-primary/50 rounded-full text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Category Navbar */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className={`font-orbitron transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary/20 text-primary border-primary/50"
                    : "text-muted-foreground hover:text-primary hover:border-primary/30"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Event Cards Section */}
      <section className="relative pb-24 px-4">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  {/* Poster */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.poster}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-orbitron font-bold mb-3 text-foreground">
                      {event.name}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{event.entryFee}</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => setSelectedEvent(event)}
                      className="w-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 hover:border-primary/50 font-orbitron transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/20 blur-3xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground font-exo">
                No events found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Event Details Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-border p-0 overflow-hidden">
          {selectedEvent && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Right Side - Poster */}
              <div className="relative h-64 md:h-auto order-first md:order-last">
                <img
                  src={selectedEvent.poster}
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-l" />
              </div>

              {/* Left Side - Info */}
              <div className="p-8 relative">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-orbitron font-bold text-foreground mb-2">
                    {selectedEvent.name}
                  </DialogTitle>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-primary/20 text-primary border border-primary/30">
                      {selectedEvent.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-secondary/20 text-secondary border border-secondary/30">
                      {selectedEvent.type}
                    </span>
                  </div>
                </DialogHeader>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-muted-foreground font-exo mb-1">Event Code</p>
                    <p className="text-foreground font-orbitron font-bold">{selectedEvent.code}</p>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-exo mb-1">Date</p>
                    <p className="text-foreground font-exo">{selectedEvent.date}</p>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-exo mb-1">Entry Fee</p>
                    <p className="text-foreground font-exo">{selectedEvent.entryFee}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-4 h-4 text-primary" />
                      <p className="text-muted-foreground font-exo">Prizes</p>
                    </div>
                    <p className="text-foreground font-exo">{selectedEvent.prizes}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <p className="text-muted-foreground font-exo">Rules</p>
                    </div>
                    <ul className="space-y-1">
                      {selectedEvent.rules.map((rule, index) => (
                        <li key={index} className="text-foreground font-exo flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage;
