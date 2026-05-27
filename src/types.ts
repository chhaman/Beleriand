export interface Character {
  id: string;
  name: string;
  race: string;
  realm: string;
  title: string;
  subtitle: string;
  image: string;
  weapon?: string;
  spouse?: string;
  status?: string;
  father?: string;
  mother?: string;
  children?: string[];
  stats?: { label: string; value: string; icon?: string }[];
  bioBlocks?: { title: string; text: string; icon?: string }[];
  memorableDeeds?: { title: string; text: string; icon: string; error?: boolean }[];
  quote?: string;
  detailedChronicle?: {
    numeral: string;
    era: string;
    title: string;
    text1: string;
    text2: string;
    image: string;
    quote: string;
  };
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  nodeText?: string;
  isClimax?: boolean;
}

export interface Battle {
  id: string;
  title: string;
  year: string;
  image: string;
  shadowForces: string[];
  freeForces: string[];
  outcome: string;
  x: string; // Left offset percentage for map marker
  y: string; // Top offset percentage for map marker
  icon: string; // material symbols icon name
  color: string; // text/bg color class prefix
}
