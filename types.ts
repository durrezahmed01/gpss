
export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
