
import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  Icon: LucideIcon;
  cta: string;
  link?: string;
  backgroundImage: string;
  galleryImages: string[];
}

export interface ClientLogo {
  name: string;
  url: string; // Using generic placeholders or text for this demo
}

export interface AIQuoteRequest {
  width: string;
  height: string;
  type: string;
  urgency: string;
}
