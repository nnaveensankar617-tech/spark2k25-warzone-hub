import { Link } from "react-router-dom";
import { Event } from "@/components/data/events";
import { Card } from "@/components/event-ui/card";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link to={`/event/${event.id}`}>
      <Card className="group overflow-hidden border-border/50 bg-card cursor-pointer h-full aspect-square relative rounded-lg">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </Card>
    </Link>
  );
}
