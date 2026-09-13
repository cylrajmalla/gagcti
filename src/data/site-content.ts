import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type Industry = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Global Presence", href: "/global-presence" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const capabilityStrip = [
  "AI & LLM",
  "CYBERSECURITY",
  "SOFTWARE ENGINEERING",
  "DATA",
  "CLOUD",
  "GLOBAL TALENT",
];

export const services: Service[] = [
  {
    title: "AI Solution Building & Implementation",
    description:
      "Build practical AI systems, LLM applications, AI agents, automation platforms, and intelligent business solutions.",
    href: "/ai-solutions",
    icon: BrainCircuit,
  },
  {
    title: "Cybersecurity",
    description:
      "Protect applications, infrastructure, endpoints, data, and digital operations with modern cybersecurity strategies.",
    href: "/cybersecurity",
    icon: ShieldCheck,
  },
  {
    title: "Software Engineering",
    description:
      "Design and build scalable web, mobile, SaaS, enterprise, and custom software platforms.",
    href: "/software-engineering",
    icon: Code2,
  },
  {
    title: "Data & Analytics",
    description:
      "Turn complex data into actionable intelligence through data engineering, analytics, dashboards, and AI-powered insights.",
    href: "/data-analytics",
    icon: Database,
  },
  {
    title: "IT Staff Augmentation",
    description:
      "Provide highly skilled engineering and technology professionals to extend internal teams.",
    href: "/staff-augmentation",
    icon: Users,
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize legacy systems, optimize workflows, adopt cloud technologies, and integrate intelligent automation.",
    href: "/services",
    icon: Workflow,
  },
];

export const strengths = [
  "Global technology capability",
  "Engineering excellence",
  "AI-first thinking",
  "Security by design",
  "Scalable architecture",
  "Long-term partnerships",
];

export const aiCapabilities = [
  "Generative AI",
  "Large Language Models",
  "AI Agents",
  "Retrieval-Augmented Generation",
  "AI Automation",
  "Intelligent Search",
  "AI-Powered Applications",
  "Custom AI Integrations",
  "AI Strategy & Implementation",
];

export const securityCapabilities = [
  "Security assessment",
  "Application security",
  "Cloud security",
  "Infrastructure security",
  "Endpoint security",
  "Vulnerability management",
  "Security architecture",
  "Compliance support",
  "Security monitoring",
];

export const softwareLifecycle = [
  "Discovery",
  "Architecture",
  "Design",
  "Development",
  "Testing",
  "Deployment",
  "Optimization",
];

export const technologyCategories = [
  "Web applications",
  "Mobile applications",
  "SaaS platforms",
  "Enterprise software",
  "APIs",
  "Cloud-native systems",
  "DevOps",
  "QA & automation",
];

export const whyGoodAsGold = [
  {
    id: "01",
    title: "AI FIRST",
    description:
      "We approach modern business challenges with intelligent technology at the core.",
  },
  {
    id: "02",
    title: "ENGINEERING EXCELLENCE",
    description:
      "Strong engineering practices designed for scalability, reliability, and performance.",
  },
  {
    id: "03",
    title: "SECURITY MINDED",
    description:
      "Security is integrated throughout the technology lifecycle.",
  },
  {
    id: "04",
    title: "GLOBAL DELIVERY",
    description:
      "Built to collaborate with organizations across international markets.",
  },
  {
    id: "05",
    title: "BUSINESS FOCUSED",
    description:
      "Technology decisions are connected to measurable business outcomes.",
  },
  {
    id: "06",
    title: "LONG-TERM PARTNERS",
    description:
      "We aim to become an extension of our clients' technology teams.",
  },
];

export const industries: Industry[] = [
  { title: "FinTech", description: "Secure financial experiences and modernized operations.", icon: Sparkles },
  { title: "Healthcare", description: "Resilient systems for sensitive, highly regulated environments.", icon: ShieldCheck },
  { title: "Cybersecurity", description: "Security-first operations and digital trust platforms.", icon: Cpu },
  { title: "SaaS", description: "Scalable product engineering and cloud-native growth strategies.", icon: Cloud },
  { title: "E-commerce", description: "Performance, automation, and customer experience at scale.", icon: Workflow },
  { title: "Education", description: "Digital learning infrastructure and intelligent engagement tools.", icon: BrainCircuit },
  { title: "Logistics", description: "Connected systems for visibility, speed, and operational continuity.", icon: Globe2 },
  { title: "Manufacturing", description: "Modernization of data, automation, and production workflows.", icon: Database },
  { title: "Professional Services", description: "Operational efficiency and digital transformation for consulting firms.", icon: BriefcaseBusiness },
  { title: "Technology", description: "High-velocity product development and AI-driven innovation.", icon: Code2 },
];

export const globalMarkets = [
  "Americas",
  "Europe",
  "Australia",
  "Middle East",
  "Asia-Pacific",
];

export const projectCategories = [
  "AI-powered enterprise platforms",
  "Cybersecurity systems",
  "SaaS products",
  "Intelligent automation",
  "Data platforms",
  "Custom business applications",
];

export const stats = [
  { label: "Global Delivery", value: "Global Delivery" },
  { label: "AI-First", value: "AI-First" },
  { label: "Security-Focused", value: "Security-Focused" },
  { label: "Enterprise Ready", value: "Enterprise Ready" },
];

export const careers = [
  { title: "Senior AI Engineer", type: "Full-time", location: "Remote / Global" },
  { title: "Cybersecurity Analyst", type: "Full-time", location: "Hybrid / Global" },
  { title: "Full-Stack Developer", type: "Contract", location: "Remote / Global" },
  { title: "Data Platform Engineer", type: "Full-time", location: "Remote / Global" },
];
