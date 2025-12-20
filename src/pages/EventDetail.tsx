import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Trophy,
  FileText,
  Share2,
} from "lucide-react";
import { events } from "@/components/data/events";
import { Button } from "@/components/event-ui/button";
import { Badge } from "@/components/event-ui/badge";
import { Card, CardContent } from "@/components/event-ui/card";

import { EventCard } from "@/components/EventCard";
import { toast } from "sonner";

const categoryColors: Record<string, string> = {
  Hackathon: "bg-secondary/20 text-secondary border-secondary/50",
  Workshop: "bg-primary/20 text-primary border-primary/50",
  Competition: "bg-accent/20 text-accent border-accent/50",
  Talk: "bg-success/20 text-success border-success/50",
  Exhibition: "bg-warning/20 text-warning border-warning/50",
};

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Event not found
          </h1>
          <Link to="/">
            <Button variant="outline" className="border-border/50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedEvents = events
    .filter((e) => e.id !== event.id && e.categories === event.categories)
    .slice(0, 3);

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const handleRegister = () => {
    toast.success("Registration form will open soon!");
  };

  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Event Poster */}
            <div className="w-full max-w-[610px] mx-auto aspect-square rounded-xl overflow-hidden bg-muted">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>


            {/* Back Button */}
            <Link to="/" className="inline-block">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground pl-0"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Button>
            </Link>

            {/* Title Section */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {event.categories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className={`${categoryColors[category] ||
                      "bg-primary/20 text-primary border-primary/50"
                      } border`}
                  >
                    {category}
                  </Badge>
                ))}
                <Badge
                  variant="outline"
                  className="bg-muted/50 text-muted-foreground border-border/50"
                >
                  {event.department}
                </Badge>
                {event.registrationOpen ? (
                  <Badge className="bg-success/20 text-success border border-success/50">
                    Registration Open
                  </Badge>
                ) : (
                  <Badge className="bg-destructive/20 text-destructive border border-destructive/50">
                    Registration Closed
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {event.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                Organized by {event.department || "Event SAC"}
              </p>
            </div>

            {/* Description */}
            <Card className="border-border/50 bg-card sticky top-24">
              <CardContent className="p-8 space-y-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  About This Event
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>

            {/* Rules */}
            {event.rules && event.rules.length > 0 && (
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Rules & Guidelines
                  </h2>
                  <ul className="space-y-2">
                    {event.rules.map((rule, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Prizes */}
            {event.prizes && event.prizes.length > 0 && (
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-warning" />
                    Entry Fee
                  </h2>
                  <div className="grid gap-3">
                    {event.prizes.map((prize, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-warning/5 border border-warning/20"
                      >
                        <span className="text-warning font-bold">
                          #{index + 1}
                        </span>
                        <span className="text-foreground">{prize}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Info Card */}
            <Card className="border-border/50 bg-card sticky top-24">
              <CardContent className="p-8 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-xl bg-primary/10">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-base text-muted-foreground">Date</p>
                      <p className="text-xl text-foreground font-semibold">
                        {formattedDate === "Invalid Date"
                          ? event.dateTag
                          : formattedDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-xl bg-secondary/10">
                      <Clock className="h-7 w-7 text-secondary" />
                    </div>
                    <div>
                      <p className="text-base text-muted-foreground">Time</p>
                      <p className="text-xl text-foreground font-semibold">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-xl bg-accent/10">
                      <MapPin className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-base text-muted-foreground">Venue</p>
                      <p className="text-xl text-foreground font-semibold">{event.venue}</p>
                    </div>
                  </div>

                  {event.teamSize && (
                    <div className="flex items-start gap-5">
                      <div className="p-4 rounded-xl bg-success/10">
                        <Users className="h-7 w-7 text-success" />
                      </div>
                      <div>
                        <p className="text-base text-muted-foreground">Team Size</p>
                        <p className="text-xl text-foreground font-semibold">
                          {event.teamSize}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4 pt-6 border-t border-border/50">
                  <Button
                    className="w-full h-12 text-lg bg-accent hover:bg-accent/80 text-accent-foreground glow-purple"
                    disabled={!event.registrationOpen}
                    onClick={handleRegister}
                  >
                    {event.registrationOpen ? "Register Now" : "Registration Closed"}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-12 text-lg border-border/50 text-muted-foreground hover:text-foreground"
                    onClick={handleShare}
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Share Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Related Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 TechFest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
