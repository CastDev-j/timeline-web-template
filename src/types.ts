export type EventSide = "left" | "right";

export interface TimelineEvent {
  side: EventSide;
  year: string;
  title: string;
  description: string;
  emphasis?: string[];
}

export interface Reference {
  authors: string;
  year: string;
  title: string;
  source?: string;
  detail?: string;
  url?: string;
}

export interface TimelineData {
  events: TimelineEvent[];
  references: Reference[];
}
