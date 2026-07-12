import type { Localized } from "@/lib/i18n/types";

export interface Experience {
  company: string;
  role: Localized<string>;
  startDate: string;
  endDate: string | "present";
  location: Localized<string>;
  description: Localized<string>;
  highlights: Localized<string[]>;
  stack: string[];
}

export interface TimelineEvent {
  date: string;
  title: Localized<string>;
  description: Localized<string>;
  type: "education" | "work" | "milestone";
}
