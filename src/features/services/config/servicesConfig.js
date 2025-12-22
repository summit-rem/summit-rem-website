import {
  Building2,
  Home,
  Briefcase,
  LineChart,
  ArrowRight
} from "lucide-react";

export const servicesConfig = [
  {
    id: "commercial",
    title: "Commercial Property Management",
    short: "Professional management for office, retail, and mixed-use assets.",
    description:
      "We provide full-service commercial property management focused on operational efficiency, tenant satisfaction, and long-term asset performance.",
    image: "/src/assets/image/header_image.jpg",
    to: "/services/commercial",
    icon: Building2,
    LinkText: "Know more",
  },
  {
    id: "multifamily",
    title: "Multi-Family Residential Management",
    short: "Maximizing value across residential portfolios.",
    description:
      "From leasing and maintenance to resident relations and financial reporting, we manage multi-family communities with precision and care.",
    image: "/src/assets/image/header_image.jpg",
    to: "/services/multifamily",
    icon: Home,
    LinkText: "Know more",
  },
  {
    id: "brokerage",
    title: "Commercial Brokerage",
    short: "Strategic leasing and investment advisory.",
    description:
      "Our brokerage team delivers data-driven insights to support leasing, acquisitions, and dispositions for commercial investors.",
    image: "/src/assets/image/header_image.jpg",
    to: "/services/brokerage",
    icon: Briefcase,
    LinkText: "Know more",
  },
  {
    id: "advisory",
    title: "Real Estate Advisory Services",
    short: "Market intelligence that drives decisions.",
    description:
      "We offer valuation, market studies, and strategic advisory services to help clients make informed real estate decisions.",
    image: "/src/assets/image/header_image.jpg",
    to: "/services/advisory",
    icon: LineChart,
    LinkText: "Know more",
  },
];
