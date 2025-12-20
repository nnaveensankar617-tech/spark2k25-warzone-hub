import { X } from "lucide-react";
import { Button } from "@/components/event-ui/button";
import { Badge } from "@/components/event-ui/badge";
import { categories, dateTags, departments } from "@/components/data/events";

interface FilterSectionProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterSection({
  activeFilter,
  onFilterChange,
}: FilterSectionProps) {
  const isActive = (filter: string) => activeFilter === filter;

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Categories
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className={`cursor-pointer px-3 py-1.5 transition-all ${isActive(category)
                ? "bg-primary/20 text-primary border-primary/50"
                : "bg-card text-muted-foreground border-border/50 hover:border-primary/30"
                }`}
              onClick={() => onFilterChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Date Tags */}
      <div>
        <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          Date
        </h3>
        <div className="flex flex-wrap gap-3">
          {dateTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className={`cursor-pointer px-3 py-1.5 transition-all ${isActive(tag)
                ? "bg-secondary/20 text-secondary border-secondary/50"
                : "bg-card text-muted-foreground border-border/50 hover:border-secondary/30"
                }`}
              onClick={() => onFilterChange(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Departments */}
      <div>
        <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Departments
        </h3>
        <div className="flex flex-wrap gap-3">
          {departments.map((dept) => (
            <Badge
              key={dept}
              variant="outline"
              className={`cursor-pointer px-3 py-1.5 transition-all ${isActive(dept)
                ? "bg-accent/20 text-accent border-accent/50"
                : "bg-card text-muted-foreground border-border/50 hover:border-accent/30"
                }`}
              onClick={() => onFilterChange(dept)}
            >
              {dept}
            </Badge>
          ))}
        </div>
      </div>

      {/* Reset Filter */}
      {activeFilter !== "All Events" && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onFilterChange("All Events")}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4 mr-2" />
          Reset to All Events
        </Button>
      )}
    </div>
  );
}
