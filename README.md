# seo-react

1. Structure the Landing Page Metadata
Search engines prioritize clear, structured metadata over promotional text. Set up explicit tags in the <head> of your project page:

HTML
<!-- Primary Metadata -->
<title>Elite Coders Summer of Code 2026 | Open Source Technical Contributions</title>
<meta name="description" content="Official repository and contributor hub for Elite Coders Summer of Code 2026. Explore system architecture, backend tools, and open-source projects.">
<meta name="robots" content="index, follow">

<!-- Open Graph for Social and Indexing Preview -->
<meta property="og:title" content="Elite Coders Summer of Code 2026">
<meta property="og:description" content="Technical contributions and architecture projects for ECSoC 2026.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com/ecsoc-2026">
2. Add JSON-LD Structured Data
Adding JSON-LD (JavaScript Object Notation for Linked Data) helps search crawlers process the page as a structured event/project rather than unindexed plain text:

JSON
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Elite Coders Summer of Code 2026",
  "startDate": "2026-06-01",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "description": "Open-source development program focused on backend architecture, system design, and software engineering.",
  "organizer": {
    "@type": "Organization",
    "name": "Elite Coders",
    "url": "https://github.com/elite-coders-xyz"
  }
}
</script>
3. Core On-Page Technical Rules for Search Crawlers
Single Heading Hierarchy: Use exactly one <h1> tag at the top of the page for the main project title (<h1>Elite Coders Summer of Code 2026</h1>). Use <h2> and <h3> tags sequentially for sub-sections.

Explicit Canonical Link: Always specify <link rel="canonical" href="[https://yourdomain.com/ecsoc-2026](https://yourdomain.com/ecsoc-2026)"> to tell Googlebot where the master copy of the content lives, avoiding duplicate content penalties across mirrors or repos.

Internal Linking Strategy: Link directly to the repository using plain anchor text rather than generic text or handles. Use descriptive anchor text like [ECSoC 2026 Submission Repository](https://github.com/elite-coders-xyz/Open-Source-Hackathon-Submissions).

Sitemap and Search Console Submission: Ensure the page is included in your sitemap.xml file and submitted directly via Google Search Console using the URL Inspection Tool to bypass crawling delays.
