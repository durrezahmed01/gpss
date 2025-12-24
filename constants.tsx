
import React from 'react';
import { Users, ShieldCheck, Microscope, Flag, Award, TreePine } from 'lucide-react';
import { NavItem, Feature } from './types';

export const SCHOOL_NAME = "Genius Public Secondary School";
export const SCHOOL_LOCATION = "Near Astal Road, Chhawni, Tonk, Rajasthan";
export const START_YEAR = "2006";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    title: "Expert Faculty",
    description: "Highly qualified and experienced teachers dedicated to academic excellence.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "CCTV Surveillance",
    description: "24/7 monitoring across the campus ensuring a safe and disciplined environment.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Computer Lab",
    description: "Modern computer facilities to keep our students digitally empowered.",
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    title: "Outdoor Activities",
    description: "Holistic development through regular sports, drills, and field trips.",
    icon: <Flag className="w-6 h-6" />,
  },
];

export const STATS = [
  { label: "Founded", value: "2006" },
  { label: "Graduates", value: "2500+" },
  { label: "Faculty", value: "45+" },
  { label: "Awards", value: "100+" },
];

export const HIGHLIGHTS = [
  {
    title: "Morning Assembly",
    description: "Daily discipline through prayer, pledge, and value-based learning.",
    image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&q=80&w=800",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "Patriotic Parade",
    description: "Celebrating national festivals with pride and patriotic spirit.",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800",
    icon: <Flag className="w-5 h-5" />
  },
  {
    title: "Award Ceremony",
    description: "Honouring young achievers for academic and ethical excellence.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
    icon: <Award className="w-5 h-5" />
  },
  {
    title: "School Garden",
    description: "Nurturing nature and learning environmental responsibility.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=800",
    icon: <TreePine className="w-5 h-5" />
  }
];