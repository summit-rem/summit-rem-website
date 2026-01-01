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
  city: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1400&q=80",
  keys: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
  documents:
    "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1400&q=80",
  repairs:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
  podcast:
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=80",
  news: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&w=1400&q=80",
  video:
    "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1400&q=80",
};

const RESOURCES = [
  {
    id: "f1",
    type: "articles",
    uploaderName: uploader.name,
    uploaderPhotoURL: "/summit-icon.png",
    slug: "operational-discipline-property-management",
    metaTitle:
      "Why Operational Discipline Matters for Property Owners | Summit",
    metaDescription:
      "As regulations, costs, and complexity increase, operational discipline has become critical for property owners seeking stability and long-term performance.",
    dateOfUpload: "Jan 12, 2025",
    title:
      "Why Operational Discipline Matters More Than Ever for Property Owners",
    tag: "Featured Article",
    subtitle:
      "As regulations, costs, and complexity increase, operational discipline has become critical for property owners seeking stability and long-term performance.",
    description: `<p>Property ownership has changed materially over the past decade. Regulatory requirements have expanded, operating costs have increased, and tenant expectations have become more complex across nearly every asset class. In this environment, property performance is shaped less by isolated decisions and more by how consistently a property is operated day to day.</p>
<p>For many owners, the challenge is no longer identifying opportunities, but maintaining control as complexity increases. Operational discipline, defined by structured processes, clear accountability, and repeatable execution, has become one of the most important factors separating stable ownership from reactive management.</p>
<h2>The Shift from Experience to Execution</h2>
<p>Experience in property ownership is often measured in years. While tenure remains valuable, it is no longer sufficient on its own. Market cycles, regulatory changes, and operational demands now test whether a property is supported by durable systems or dependent on individual decision-making.</p>
<p>Properties managed through informal processes often function adequately during stable periods. However, when pressure increases, through regulatory audits, tenant disputes, staffing changes, or capital constraints, those same properties tend to experience delays, inconsistencies, and increased owner involvement.</p>
<p>Operational discipline replaces reliance on memory or individual judgment with documented procedures. When expectations are defined and workflows are repeatable, performance becomes more consistent regardless of external conditions.</p>
<h2>Why Informal Management Creates Risk</h2>
<p>Many operational issues do not originate from major failures, but from small inconsistencies that accumulate over time. Missed lease obligations, delayed maintenance, undocumented vendor work, or unclear financial reporting can each appear manageable in isolation. Together, they create friction, uncertainty, and exposure.</p>
<p>Informal management practices often lack clear ownership of tasks. When responsibilities are not documented, follow-through depends on individual availability rather than process. This increases the likelihood of oversight gaps, particularly as portfolios grow or staffing changes occur.</p>
<p>Operational discipline introduces structure where ambiguity previously existed. Tasks are assigned, tracked, and verified. Decisions are documented. Reporting follows a predictable cadence. These elements reduce the likelihood that issues escalate unnoticed.</p>
<h2>Predictability as a Strategic Advantage</h2>
<p>For property owners, predictability is often undervalued. While market volatility cannot be eliminated, operational volatility can be reduced significantly through disciplined management practices.</p>
<p>Predictable operations allow owners to:</p>
<ul>
  <li>Evaluate performance with greater confidence</li>
  <li>Plan capital expenditures more effectively</li>
  <li>Reduce emergency maintenance and reactive costs</li>
  <li>Limit time spent managing managers</li>
</ul>
<p>When reporting is consistent and operations follow defined standards, owners can focus on strategic decisions rather than daily problem-solving.</p>
<p>This predictability also supports better relationships with tenants, lenders, and service providers. Clear expectations and consistent execution reduce disputes and improve long-term outcomes.</p>
<h2>Regulatory Pressure Continues to Increase</h2>
<p>Across many jurisdictions, regulatory oversight has expanded in scope and enforcement. Compliance requirements related to safety, housing standards, financial reporting, and tenant rights now demand ongoing attention rather than periodic review.</p>
<p>Operational discipline plays a critical role in managing regulatory exposure. Documented procedures, consistent recordkeeping, and routine compliance checks reduce the risk of noncompliance and improve audit readiness.</p>
<p>Properties managed reactively often scramble to assemble documentation after issues arise. Disciplined operations maintain documentation as part of daily workflow, reducing disruption when compliance questions emerge.</p>
<h2>The Cost of Reactive Maintenance</h2>
<p>Maintenance is one of the clearest examples of how operational discipline impacts financial performance. Reactive maintenance tends to be more expensive, more disruptive, and less effective over time.</p>
<p>When maintenance is managed through structured intake, prioritization, and preventive planning, issues are identified earlier and addressed more efficiently. This approach extends asset life, reduces emergency repairs, and supports more accurate budgeting.</p>
<p>Operational discipline shifts maintenance from crisis response to asset preservation. Over time, this reduces both direct costs and indirect operational disruption.</p>
<h2>Financial Clarity Supports Better Decisions</h2>
<p>Financial reporting is most valuable when it is timely, consistent, and aligned with operational activity. Inconsistent reporting formats, delayed statements, or unexplained variances create uncertainty and limit decision-making.</p>
<p>Disciplined accounting systems provide owners with reliable visibility into performance. When income, expenses, and reserves are tracked consistently, trends become easier to identify and address proactively.</p>
<p>This clarity supports informed decisions related to capital planning, refinancing, acquisitions, or dispositions, decisions that are difficult to evaluate without dependable financial information.</p>
<h2>Discipline Does Not Mean Rigidity</h2>
<p>Operational discipline is often misunderstood as inflexibility. In practice, the opposite is true. Well-designed systems allow for adaptation because the fundamentals are stable.</p>
<p>When workflows are documented and responsibilities are clear, changes can be implemented deliberately rather than reactively. This allows properties to adjust to market conditions or regulatory changes without losing control.</p>
<p>Flexibility without structure tends to produce inconsistency. Structure enables flexibility without chaos.</p>
<h2>A Long-Term Ownership Perspective</h2>
<p>As property ownership becomes more operationally demanding, the value of disciplined management continues to increase. Owners who rely on informal practices may find short-term convenience, but often at the cost of long-term stability.</p>
<p>Operational discipline supports continuity across market cycles, staffing changes, and regulatory shifts. It reduces reliance on individual intervention and allows properties to function predictably even as complexity grows.</p>
<p>For owners focused on long-term performance, disciplined execution is no longer optional. It is a foundational requirement for sustainable ownership.</p>
<p><strong>Less Stress. Better Managed.</strong></p>`,
    media:
      "https://images.pexels.com/photos/8085938/pexels-photo-8085938.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    id: "f3",
    type: "articles",
    uploaderName: uploader.name,
    uploaderPhotoURL: "/summit-icon.png",
    slug: "rising-costs-property-owners",
    metaTitle:
      "Rising Property Costs: How Owners Can Protect Performance | Summit",
    metaDescription:
      "Operating costs continue to rise across real estate markets. Learn how property owners can protect margins through disciplined planning and management.",
    dateOfUpload: "Mar 08, 2025",
    title:
      "Rising Costs, Tighter Margins: How Property Owners Can Protect Performance in a Changing Market",
    tag: "Featured Article",
    subtitle:
      "Operating costs continue to rise across real estate markets. Learn how property owners can protect margins through disciplined planning and management.",
    description: `<p>Over the past several years, property owners have faced a steady increase in operating costs. Insurance premiums, utilities, maintenance expenses, regulatory compliance, and labor costs have all trended upward, often outpacing rent growth. While market cycles have always influenced performance, today’s environment places greater emphasis on efficiency and cost control.</p>
<p>For many owners, the challenge is no longer maximizing revenue at any cost, but protecting margins through disciplined execution. In this context, how a property is managed can have as much impact on performance as where it is located.</p>
<h2>The New Reality of Operating Costs</h2>
<p>Rising costs are not confined to a single category. Insurance markets have tightened, leading to higher premiums and stricter coverage terms. Utility expenses continue to fluctuate with broader economic pressures. Maintenance costs have increased as labor shortages and material pricing affect service availability.</p>
<p>At the same time, regulatory compliance has become more detailed and resource-intensive. Documentation, inspections, and reporting requirements add administrative overhead that cannot be ignored without increasing risk.</p>
<p>These pressures affect all asset types, commercial, multifamily, owners’ associations, and specialized assets such as mobile home parks. The cumulative effect is a narrower margin for error in daily operations.</p>
<h2>Why Cost Increases Are Harder to Offset</h2>
<p>Historically, rising expenses could often be offset through rent increases or market appreciation. In today’s environment, those levers are less predictable. Rent growth may be constrained by market conditions, regulatory limits, or tenant sensitivity. Vacancy carries greater financial risk when operating costs are already elevated.</p>
<p>As a result, many owners find that traditional responses, incremental rent adjustments or delayed maintenance, are insufficient or counterproductive. Long-term performance now depends on managing costs systematically rather than reacting to individual line items.</p>
<h2>The Role of Operational Efficiency</h2>
<p>Operational efficiency has become a primary driver of financial stability. Properties that rely on informal processes often experience higher costs due to duplication of effort, delayed responses, and inconsistent vendor oversight.</p>
<p>Disciplined management introduces efficiency through structure. Maintenance requests are tracked and prioritized. Vendor scopes are clearly defined. Preventive maintenance reduces emergency repairs. Financial reporting identifies trends before they become problems.</p>
<p>These efficiencies may appear incremental, but over time they compound. Small improvements in coordination and oversight can meaningfully reduce cost escalation.</p>
<h2>Preventive Maintenance as Cost Control</h2>
<p>One of the most effective tools available to owners is preventive maintenance. Deferred maintenance often creates short-term savings at the expense of long-term cost exposure. Emergency repairs, system failures, and tenant disruption typically cost more than routine servicing.</p>
<p>A structured preventive maintenance program identifies issues early, schedules work deliberately, and extends the useful life of building systems. While it requires planning and discipline, it reduces volatility in maintenance expenses and supports more accurate budgeting.</p>
<p>Preventive maintenance is not simply a technical practice, it is a financial strategy.</p>
<h2>Vendor Oversight and Cost Discipline</h2>
<p>Vendor relationships represent a significant portion of operating expenses. Without clear scopes of work and performance expectations, costs can escalate through inefficiency, duplication, or inconsistent quality.</p>
<p>Structured vendor oversight improves cost control by ensuring that work is necessary, properly scoped, and verified upon completion. When vendors understand expectations and accountability, outcomes tend to be more predictable.</p>
<p>This approach also reduces the risk of reactive decision-making, where urgency leads to premium pricing and limited oversight.</p>
<h2>Financial Visibility Matters More Than Ever</h2>
<p>In an environment of rising costs, timely and accurate financial reporting is essential. Owners need to understand not only current performance, but emerging trends that may affect future cash flow.</p>
<p>Consistent reporting formats, regular reconciliation, and alignment between financial data and operational activity support better decision-making. Without this visibility, cost increases often go unnoticed until they materially affect performance.</p>
<p>Financial clarity allows owners to distinguish between temporary fluctuations and structural changes that require strategic response.</p>
<h2>Adapting Without Overreacting</h2>
<p>Not all cost increases require immediate or dramatic action. Overreaction, such as aggressive cost cutting or deferred maintenance, can undermine long-term performance. The challenge is distinguishing between areas that require adjustment and those that benefit from stability.</p>
<p>Disciplined management supports measured responses. When systems are in place, owners can evaluate options with greater confidence and avoid decisions driven by short-term pressure.</p>
<p>Adaptation, when guided by reliable information and structured execution, tends to be more effective than reaction.</p>
<h2>A Long-Term Perspective on Margin Protection</h2>
<p>Protecting margins in a changing market requires a long-term perspective. While external pressures cannot be eliminated, their impact can be managed through operational discipline, preventive planning, and financial clarity.</p>
<p>Owners who focus solely on revenue growth may overlook opportunities to stabilize performance through efficiency and oversight. Those who invest in structured management are better positioned to navigate cost pressures without sacrificing asset condition or tenant relationships.</p>
<p>In today’s market, margin protection is less about aggressive action and more about consistent execution.</p>
<p><strong>Less Stress. Better Managed.</strong></p>`,
    media:
      "https://images.pexels.com/photos/19157992/pexels-photo-19157992.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    id: "f9",
    type: "articles",
    uploaderName: uploader.name,
    uploaderPhotoURL: "/summit-icon.png",
    slug: "hands-off-property-ownership-systems",
    metaTitle: "Hands-Off Property Ownership Requires Systems | Summit",
    metaDescription:
      "Hands-off property ownership only works when systems, documentation, and disciplined management are in place to reduce risk and uncertainty.",
    dateOfUpload: "Mar 08, 2025",
    title: "Hands-Off Ownership Is a System, Not a Promise",
    tag: "Featured Article",
    subtitle:
      "Hands-off property ownership only works when systems, documentation, and disciplined management are in place to reduce risk and uncertainty.",
    description: `<p>Many property owners describe their goal in simple terms: they want ownership to be “hands-off.” The phrase suggests freedom from daily decisions, fewer interruptions, and confidence that the property is being managed properly without constant oversight. In principle, it is a reasonable objective. In practice, it is often misunderstood.</p>
<p>Hands-off ownership is not the absence of involvement. It is the result of structured systems that allow involvement to be unnecessary.</p>
<h2>The Misconception of Passive Ownership</h2>
<p>Property ownership is sometimes framed as passive by nature. Once a property is acquired and leased, the assumption is that operations will largely run themselves. This expectation often holds during stable periods, when few issues demand attention and market conditions are favorable.</p>
<p>However, real estate is an operating business. Maintenance requirements, regulatory obligations, tenant needs, financial oversight, and vendor coordination continue regardless of market conditions. When systems are informal or undocumented, ownership becomes passive only until something goes wrong.</p>
<p>True hands-off ownership does not remove responsibility, it replaces constant intervention with reliable structure.</p>
<h2>Why Issues Pull Owners Back In</h2>
<p>Owners are most often pulled into daily operations not because issues exist, but because information is unclear. Delayed reporting, undocumented decisions, inconsistent follow-through, or unexpected costs all create uncertainty. In response, owners step in to regain visibility and control.</p>
<p>This cycle is common in environments where management relies on individual knowledge rather than documented process. When responsibilities are not clearly defined or tracked, outcomes depend on who is available rather than how work is supposed to be done.</p>
<p>Systems break this cycle by making performance visible and predictable.</p>
<h2>Regulation Has Raised the Stakes</h2>
<p>Regulatory oversight has increased across nearly every property type. Safety requirements, housing standards, financial documentation, notice periods, and governance rules now require consistent attention rather than periodic review.</p>
<p>For owners seeking hands-off ownership, regulation presents a challenge. Compliance cannot be achieved through occasional involvement or informal tracking. It requires documentation, routine execution, and verification.</p>
<p>Without systems in place, regulatory obligations often surface only when something has already gone wrong. At that point, ownership involvement increases sharply and often under pressure.</p>
<p>Disciplined management reduces this risk by embedding compliance into daily operations.</p>
<h2>Documentation Is the Foundation of Distance</h2>
<p>One of the most important enablers of hands-off ownership is documentation. Documented procedures, records, and reporting provide continuity even as people change.</p>
<p>When leases are administered consistently, maintenance is tracked properly, and decisions are recorded, ownership does not need to rely on verbal updates or personal memory. Information becomes accessible rather than anecdotal.</p>
<p>Documentation supports accountability without constant oversight. It allows owners to review outcomes rather than manage tasks.</p>
<h2>Maintenance Without Surprise</h2>
<p>Unexpected maintenance costs are one of the most common reasons owners become re-engaged in daily operations. Emergency repairs, repeated service calls, or deferred issues create financial and operational disruption.</p>
<p>A structured maintenance system reduces these surprises. Preventive maintenance schedules, clear work order tracking, and vendor accountability help ensure that issues are identified early and addressed deliberately.</p>
<p>When maintenance is predictable, ownership involvement decreases. When it is reactive, involvement increases.</p>
<p>Hands-off ownership depends on reducing volatility, not eliminating activity.</p>
<h2>Financial Clarity Enables Confidence</h2>
<p>Owners who lack confidence in financial reporting often compensate by increasing involvement. Questions about accuracy, timing, or unexplained variances naturally lead to closer scrutiny.</p>
<p>Reliable financial systems provide clarity without effort. Consistent reporting formats, predictable delivery, and alignment with operational activity allow owners to understand performance without repeated clarification.</p>
<p>When financial information is dependable, owners can step back knowing that issues will be visible before they become urgent.</p>
<h2>Systems Allow for Absence Without Risk</h2>
<p>One of the true tests of hands-off ownership is what happens when ownership is unavailable. Travel, competing priorities, or extended absences should not compromise performance.</p>
<p>Systems allow properties to function consistently regardless of owner presence. Decisions follow established guidelines. Reporting continues on schedule. Issues are addressed within defined authority.</p>
<p>This is not abdication of control, it is structured delegation.</p>
<h2>Hands-Off Does Not Mean Disengaged</h2>
<p>Hands-off ownership works best when owners remain informed, not involved. Structured reporting, predictable communication, and clear escalation paths allow owners to stay aware without being immersed.</p>
<p>Disengagement often leads to surprise. Structured distance leads to confidence.</p>
<p>The difference lies in whether systems exist to support that distance.</p>
<h2>A Practical Definition of Hands-Off Ownership</h2>
<p>In practice, hands-off ownership means:</p>
<ul>
  <li>Clear expectations</li>
  <li>Documented processes</li>
  <li>Predictable reporting</li>
  <li>Proactive oversight</li>
  <li>Disciplined execution</li>
</ul>
<p>When these elements are in place, ownership becomes less demanding, not because issues disappear, but because they are managed consistently.</p>
<h2>The Long View</h2>
<p>As property ownership becomes more complex, hands-off ownership increasingly depends on how properties are managed rather than how often owners intervene. Systems, not promises, create distance.</p>
<p>Owners who invest in structured management gain predictability. Those who rely on informal practices often regain involvement at the least convenient moments.</p>
<p>Hands-off ownership is not a shortcut. It is the outcome of disciplined operations.</p>
<p><strong>Less Stress. Better Managed.</strong></p>`,
    media:
      "https://images.pexels.com/photos/2597999/pexels-photo-2597999.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  // {
  //   id: "f2",
  //   type: "podcast",
  //   uploaderName: uploader.name,
  //   uploaderPhotoURL:
  //     "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=128&q=80",
  //   dateOfUpload: "Feb 03, 2025",
  //   title: "Owner Updates That Actually Reduce Vacancy",
  //   tag: "Featured Podcast",
  //   subtitle:
  //     "A 20-minute episode on what to upgrade, what to skip, and how to time improvements for renewals.",
  //   description:
  //     "We discuss upgrade ROI, tenant retention, and how proactive upgrades reduce downtime between leases.",
  //   duration: "20:14",
  //   media: img.podcast,
  // },

  // ARTICLES
  // {
  //   id: "a1",
  //   type: "articles",
  //   uploaderName: uploader.name,
  //   uploaderPhotoURL: uploader.avatar,
  //   dateOfUpload: "Apr 02, 2025",
  //   title: "Owner Reporting: The 5 Metrics You Should Always Track",
  //   tag: "Articles",
  //   subtitle:
  //     "Vacancy, delinquency, maintenance velocity, renewal rate, and net operating income — explained simply.",
  //   description:
  //     "A short guide to the most useful owner metrics, why they matter, and what 'good' looks like in practice.",
  //   media: img.documents,
  // },
  // {
  //   id: "a2",
  //   type: "articles",
  //   uploaderName: uploader.name,
  //   uploaderPhotoURL: uploader.avatar,
  //   dateOfUpload: "May 11, 2025",
  //   title: "Preventive Maintenance Planning (Without Overspending)",
  //   tag: "Articles",
  //   subtitle:
  //     "How to structure seasonal checks, vendor coordination, and owner approvals efficiently.",
  //   description:
  //     "We outline a maintenance plan that reduces emergency calls and helps keep costs predictable.",
  //   media: img.repairs,
  // },

  // // PODCAST
  // {
  //   id: "p1",
  //   type: "podcast",
  //   uploaderName: uploader.name,
  //   uploaderPhotoURL:
  //     "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=128&q=80",
  //   dateOfUpload: "Jun 20, 2025",
  //   title: "Multi-Family Leasing: What Strong Screening Looks Like",
  //   tag: "Podcast",
  //   subtitle:
  //     "A conversation on screening, fair housing basics, and reducing turnover through better fit.",
  //   description:
  //     "We cover a practical screening workflow and ways to improve renewals while staying compliant.",
  //   duration: "28:41",
  //   media: img.podcast,
  // },

  // // VIDEOS
  // {
  //   id: "v1",
  //   type: "videos",
  //   uploaderName: uploader.name,
  //   uploaderPhotoURL:
  //     "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=128&q=80",
  //   dateOfUpload: "Jul 01, 2025",
  //   title: "Resident Experience: Our Maintenance Request Workflow",
  //   tag: "Videos",
  //   subtitle:
  //     "How a request moves from submission → triage → vendor → completion.",
  //   description:
  //     "A quick visual overview of our process and what residents should expect at each step.",
  //   duration: "05:18",
  //   media: img.repairs,
  // },

  // // NEWS
  // {
  //   id: "n1",
  //   type: "news",
  //   uploaderName: uploader.name,
  //   uploaderPhotoURL: uploader.avatar,
  //   dateOfUpload: "Aug 14, 2025",
  //   title: "Local Market Snapshot: Vacancy & Rent Trend Notes",
  //   tag: "News",
  //   subtitle:
  //     "A simple update on demand, rent movement, and what owners should monitor this quarter.",
  //   description:
  //     "This is a mock news post layout — later you can connect real updates from a feed or CMS.",
  //   media: img.news,
  // },
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
  return RESOURCES.find(
    (r) => r.type === typeKey && String(r.id) === String(id)
  );
}
