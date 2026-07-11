export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "present";
  location: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: "education" | "work" | "milestone";
}
