import fs from "fs";
import { Projects } from "./projects.json";

const domain = "";

const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${domain}</loc>
      <priority>1.0</priority>
    </url>
    ${projects
      .map(
        (p) => `
    <url>
      <loc>${domain}/portfolio/${p.slug}</loc>
      <priority>0.8</priority>
    </url>`,
      )
      .join("")}
  </urlset>
`;

fs.writeFileSync("./public/sitemap.xml", sitemap);
