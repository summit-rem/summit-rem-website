export const RESOURCE_TABS = [
  { key: "featured", label: "Featured" },
  { key: "articles", label: "Articles" },
  { key: "podcast", label: "Podcast" },
  { key: "videos", label: "Videos" },
  { key: "news", label: "News" },
];

/**
 * Shape (aligned with what you shared + a couple practical additions)
 * {
 *  id,
 *  uploaderName,
 *  dateOfUpload,
 *  uploaderPhotoURL,
 *  title,
 *  tag,
 *  subtitle,
 *  description,
 *  media,
 *  type,          // "articles" | "podcast" | "videos" | "news"
 *  duration?,     // useful for podcast/videos
 * }
 */
const uploader = {
  name: "Summit Editorial",
  avatar:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=128&q=80",
};

const img = {
  city:
    "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1400&q=80",
  keys:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
  documents:
    "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1400&q=80",
  repairs:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
  podcast:
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=80",
  news:
    "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&w=1400&q=80",
  video:
    "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1400&q=80",
};

const RESOURCES = [
  // FEATURED PICKS (mix)
  {
    id: "f1",
    type: "articles",
    uploaderName: uploader.name,
    uploaderPhotoURL: uploader.avatar,
    dateOfUpload: "Jan 12, 2025",
    title: "What Great Property Management Looks Like in 2025",
    tag: "Featured Article",
    subtitle:
      "A practical benchmark for owners and investors — service standards, reporting, and resident experience.",
    description:
      "We break down the core pillars of high-performing management: clear communication, proactive maintenance, consistent reporting, and tenant experience.",
    media: img.city,
  },
  {
    id: "f2",
    type: "podcast",
    uploaderName: "Summit PM Podcast",
    uploaderPhotoURL:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=128&q=80",
    dateOfUpload: "Feb 03, 2025",
    title: "Owner Updates That Actually Reduce Vacancy",
    tag: "Featured Podcast",
    subtitle:
      "A 20-minute episode on what to upgrade, what to skip, and how to time improvements for renewals.",
    description:
      "We discuss upgrade ROI, tenant retention, and how proactive upgrades reduce downtime between leases.",
    duration: "20:14",
    media: img.podcast,
  },
  {
    id: "f3",
    type: "articles",
    uploaderName: "Summit Video Team",
    uploaderPhotoURL:
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1400&q=80",
    dateOfUpload: "Mar 08, 2025",
    title: "Commercial Walkthrough: What We Inspect Every Month",
    tag: "Featured Article",
    subtitle:
      "A quick walkthrough of the monthly inspection checklist for commercial properties.",
    description:
      "See how routine inspections catch issues early and protect asset performance over the long term.",
    duration: "07:32",
    media: img.city,
  },

  // ARTICLES
  {
    id: "a1",
    type: "articles",
    uploaderName: uploader.name,
    uploaderPhotoURL: uploader.avatar,
    dateOfUpload: "Apr 02, 2025",
    title: "Owner Reporting: The 5 Metrics You Should Always Track",
    tag: "Articles",
    subtitle:
      "Vacancy, delinquency, maintenance velocity, renewal rate, and net operating income — explained simply.",
    description:
      "A short guide to the most useful owner metrics, why they matter, and what 'good' looks like in practice.",
    media: img.documents,
  },
  {
    id: "a2",
    type: "articles",
    uploaderName: uploader.name,
    uploaderPhotoURL: uploader.avatar,
    dateOfUpload: "May 11, 2025",
    title: "Preventive Maintenance Planning (Without Overspending)",
    tag: "Articles",
    subtitle:
      "How to structure seasonal checks, vendor coordination, and owner approvals efficiently.",
    description:
      "We outline a maintenance plan that reduces emergency calls and helps keep costs predictable.",
    media: img.repairs,
  },

  // PODCAST
  {
    id: "p1",
    type: "podcast",
    uploaderName: "Summit PM Podcast",
    uploaderPhotoURL:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=128&q=80",
    dateOfUpload: "Jun 20, 2025",
    title: "Multi-Family Leasing: What Strong Screening Looks Like",
    tag: "Podcast",
    subtitle:
      "A conversation on screening, fair housing basics, and reducing turnover through better fit.",
    description:
      "We cover a practical screening workflow and ways to improve renewals while staying compliant.",
    duration: "28:41",
    media: img.podcast,
  },

  // VIDEOS
  {
    id: "v1",
    type: "videos",
    uploaderName: "Summit Video Team",
    uploaderPhotoURL:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=128&q=80",
    dateOfUpload: "Jul 01, 2025",
    title: "Resident Experience: Our Maintenance Request Workflow",
    tag: "Videos",
    subtitle:
      "How a request moves from submission → triage → vendor → completion.",
    description:
      "A quick visual overview of our process and what residents should expect at each step.",
    duration: "05:18",
    media: img.repairs,
  },

  // NEWS
  {
    id: "n1",
    type: "news",
    uploaderName: uploader.name,
    uploaderPhotoURL: uploader.avatar,
    dateOfUpload: "Aug 14, 2025",
    title: "Local Market Snapshot: Vacancy & Rent Trend Notes",
    tag: "News",
    subtitle:
      "A simple update on demand, rent movement, and what owners should monitor this quarter.",
    description:
      "This is a mock news post layout — later you can connect real updates from a feed or CMS.",
    media: img.news,
  },
];

export function slugify(str) {
  return String(str || "")
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getFeaturedResources() {
  return RESOURCES.filter((r) => r.id.startsWith("f")).slice(0, 3);
}

export function getResourcesByType(typeKey) {
  if (!typeKey || typeKey === "featured") {
    // show a mixed list for featured tab (excluding the top 3 already shown)
    return RESOURCES.filter((r) => !r.id.startsWith("f")).slice(0, 9);
  }
  return RESOURCES.filter((r) => r.type === typeKey).slice(0, 12);
}

export function findResourceById(typeKey, id) {
  return RESOURCES.find((r) => r.type === typeKey && String(r.id) === String(id));
}
