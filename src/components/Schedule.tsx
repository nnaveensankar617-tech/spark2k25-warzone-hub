import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Schedule = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const eventDate = new Date("2025-03-15T09:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scheduleData = [
    {
      day: "Day 1",
      date: "March 15, 2025",
      events: [
        { time: "09:00 AM", title: "Opening Ceremony", location: "Main Auditorium" },
        { time: "11:00 AM", title: "BGMI Tournament - Round 1", location: "Gaming Arena" },
        { time: "02:00 PM", title: "Code Combat Begins", location: "Lab Block" },
        { time: "04:00 PM", title: "Dance Auditions", location: "Cultural Stage" },
        { time: "07:00 PM", title: "Welcome Night", location: "Main Ground" },
      ],
    },
    {
      day: "Day 2",
      date: "March 16, 2025",
      events: [
        { time: "09:00 AM", title: "Hackathon Kickoff", location: "Innovation Hub" },
        { time: "11:00 AM", title: "Valorant Championship", location: "Gaming Arena" },
        { time: "02:00 PM", title: "Tech Talk Sessions", location: "Seminar Hall" },
        { time: "05:00 PM", title: "Fashion Show", location: "Main Auditorium" },
        { time: "08:00 PM", title: "Battle of Bands", location: "Open Stage" },
      ],
    },
    {
      day: "Day 3",
      date: "March 17, 2025",
      events: [
        { time: "09:00 AM", title: "Finals - All Events", location: "Various Venues" },
        { time: "02:00 PM", title: "Cultural Grand Finale", location: "Main Stage" },
        { time: "05:00 PM", title: "Prize Distribution", location: "Main Auditorium" },
        { time: "07:00 PM", title: "Closing Ceremony", location: "Main Ground" },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-card border border-primary/20 mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-orbitron font-semibold text-primary uppercase tracking-widest">
              Event Timeline
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold mb-4">
            BATTLE <span className="text-primary">SCHEDULE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-exo">
            Three days of intense competition, innovation, and celebration
          </p>
        </div>

        {/* Countdown Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-10 text-center">
              EVENT COUNTDOWN
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: timeLeft.days, label: "DAYS" },
                { value: timeLeft.hours, label: "HOURS" },
                { value: timeLeft.minutes, label: "MINUTES" },
                { value: timeLeft.seconds, label: "SECONDS" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-background border-2 border-primary/30 rounded-lg p-6 mb-3">
                    <div className="text-5xl md:text-6xl font-orbitron font-bold text-primary">
                      {String(item.value).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-orbitron tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Days */}
        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {scheduleData.map((day, dayIndex) => (
              <AccordionItem
                key={dayIndex}
                value={`day-${dayIndex}`}
                className="border border-border rounded-lg overflow-hidden bg-card"
              >
                <AccordionTrigger className="hover:no-underline px-6 py-4">
                  <div className="flex items-center gap-6 w-full">
                    <div className="w-20 h-20 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-orbitron font-bold text-white">
                        {day.day.split(" ")[1]}
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-orbitron font-bold mb-1">
                        {day.day}
                      </h3>
                      <p className="text-muted-foreground text-base font-exo">{day.date}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  {/* Events Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                              <Clock className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-primary font-orbitron font-semibold mb-2">
                              {event.time}
                            </div>
                            <h4 className="text-lg font-orbitron font-bold mb-2">
                              {event.title}
                            </h4>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <MapPin className="w-4 h-4" />
                              <span className="font-exo">{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
            <Users className="w-5 h-5 text-secondary" />
            <span className="text-sm font-exo text-muted-foreground">
              Schedule subject to change • Stay updated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
