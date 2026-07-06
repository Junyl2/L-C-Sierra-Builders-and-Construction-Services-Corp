import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const textFiles = [
  "index.html",
  "README.md",
  "package.json",
  "src/data/services.ts",
  "src/components/Navbar.tsx",
  "src/components/Topbar.tsx",
  "src/components/Footer.tsx",
  "src/components/ServiceContactSection.tsx",
  "src/components/home/HeroSection.tsx",
  "src/components/home/AboutPreview.tsx",
  "src/components/home/ServicesOverview.tsx",
  "src/components/home/ServiceAreaPreview.tsx",
  "src/components/home/ProcessSection.tsx",
  "src/components/home/ContactCTA.tsx",
  "src/components/home/ReviewSection.tsx",
  "src/components/home/ProjectPreview.tsx",
  "src/pages/Index.tsx",
  "src/pages/About.tsx",
  "src/pages/Projects.tsx",
  "src/pages/Services.tsx",
  "src/pages/ServiceDetail.tsx",
  "src/pages/ServiceArea.tsx",
  "src/pages/Contact.tsx",
];

const combinedContent = textFiles
  .map((file) => readFileSync(join(root, file), "utf8"))
  .join("\n");

describe("L C Sierra content migration", () => {
  it("uses the new factual construction company identity", () => {
    expect(combinedContent).toContain("L C Sierra Builders and Construction Services Corporation");
    expect(combinedContent).toContain("Cebu City");
    expect(combinedContent).toContain("since 2020");
    expect(combinedContent).toContain("admin@lcsierraconstruction.com");
    expect(combinedContent).toContain("0917 636 0922");
    expect(combinedContent).toContain("https://web.facebook.com/build.sheracon/?_rdc=1&_rdr#");
    expect(combinedContent).toContain(
      "Room 307-A WDC Building, Osmena St., cor., P. Burgos St., Cebu City, Philippines, 6000"
    );
    expect(combinedContent).toContain("5.0");
    expect(combinedContent).toContain("4 reviews");
    expect(combinedContent).toContain("https://www.google.com/maps/place/L+C+Sierra+Builders+and+Construction+Services+Corp/");
    expect(combinedContent).toContain("L%20C%20Sierra%20Builders%20and%20Construction%20Services%20Corp");
  });

  it("removes the prior HVAC and Boise business context from authored content", () => {
    expect(combinedContent).not.toMatch(/Komfort iQ|HVAC|Boise|Idaho|Heating and Air|air conditioning/i);
  });

  it("routes visible imagery through the placeholder asset", () => {
    expect(combinedContent).not.toMatch(/\/images\/(about|banners|contact|gallery|service-area|services)\//);
    expect(combinedContent).toContain("/placeholder.svg");
  });

  it("uses the provided contact-about assets for about and contact sections", () => {
    const aboutPage = readFileSync(join(root, "src/pages/About.tsx"), "utf8");
    const contactPage = readFileSync(join(root, "src/pages/Contact.tsx"), "utf8");
    const aboutPreview = readFileSync(join(root, "src/components/home/AboutPreview.tsx"), "utf8");
    const contactCta = readFileSync(join(root, "src/components/home/ContactCTA.tsx"), "utf8");

    expect(aboutPage).toContain("@/assets/contact-about/about-4.jpg");
    expect(aboutPage).toContain("@/assets/contact-about/about-1.jpg");
    expect(aboutPage).toContain("@/assets/contact-about/contact-section.jpg");
    expect(contactPage).toContain("@/assets/contact-about/contact-section.jpg");
    expect(aboutPreview).toContain("@/assets/contact-about/about-1.jpg");
    expect(contactCta).toContain("@/assets/contact-about/contact-section.jpg");

    expect(aboutPage).not.toContain('backgroundImage="/placeholder.svg"');
    expect(contactPage).not.toContain('backgroundImage="/placeholder.svg"');
    expect(aboutPreview).not.toContain('src="/placeholder.svg"');
    expect(contactCta).not.toContain('src="/placeholder.svg"');
  });

  it("uses the company logo for brand logo placements", () => {
    expect(combinedContent).toContain("company-logo.png");
    expect(readFileSync(join(root, "src/components/Navbar.tsx"), "utf8")).not.toMatch(
      /alt="L C Sierra"[\s\S]{0,120}\/placeholder\.svg|\/placeholder\.svg[\s\S]{0,120}alt="L C Sierra"/
    );
    expect(readFileSync(join(root, "src/components/Footer.tsx"), "utf8")).not.toMatch(
      /alt="L C Sierra"[\s\S]{0,120}\/placeholder\.svg|\/placeholder\.svg[\s\S]{0,120}alt="L C Sierra"/
    );
  });

  it("adds project navigation, homepage preview, and gallery lightbox controls", () => {
    const app = readFileSync(join(root, "src/App.tsx"), "utf8");
    const navbar = readFileSync(join(root, "src/components/Navbar.tsx"), "utf8");
    const index = readFileSync(join(root, "src/pages/Index.tsx"), "utf8");
    const projects = readFileSync(join(root, "src/pages/Projects.tsx"), "utf8");

    expect(app).toContain('path="/projects"');
    expect(navbar.indexOf('path: "/about"')).toBeLessThan(
      navbar.indexOf('path: "/projects"')
    );
    expect(navbar.indexOf('path: "/projects"')).toBeLessThan(
      navbar.indexOf('path: "/service-area"')
    );
    expect(index.indexOf("<AboutPreview />")).toBeLessThan(
      index.indexOf("<ProjectPreview />")
    );
    expect(projects).toContain("<PageBanner");
    expect(projects).toContain("Project Gallery");
    expect(projects).toContain("aria-label=\"Previous project image\"");
    expect(projects).toContain("aria-label=\"Next project image\"");
    expect(projects).toContain("aria-label=\"Close project lightbox\"");
    expect(projects).toContain("currentIndex + 1");
    expect(projects).toContain('document.documentElement.style.overflow = "hidden"');
    expect(projects).toContain("previousBodyOverflow");
    expect(projects).toContain("bg-black/35");
    expect(projects).toContain("backdrop-blur-sm");
    expect(projects).toContain("Construction Gallery");
  });

  it("keeps project gallery labels factual and provenance-safe", () => {
    const projectData = readFileSync(join(root, "src/data/projects.ts"), "utf8");
    const projects = readFileSync(join(root, "src/pages/Projects.tsx"), "utf8");
    const projectPreview = readFileSync(join(root, "src/components/home/ProjectPreview.tsx"), "utf8");

    expect(projectData).toContain("Gallery Image");
    expect(projectData).toContain("Construction reference image");
    expect(projectData).not.toContain("Commercial construction work");
    expect(projects).toContain("Construction gallery images for visual reference");
    expect(projects).toContain("construction-related gallery images for visual reference");
    expect(projectPreview).toContain("construction-related images");
  });

  it("opens homepage project preview images in a lightbox modal", () => {
    const projectPreview = readFileSync(join(root, "src/components/home/ProjectPreview.tsx"), "utf8");

    expect(projectPreview).toContain("useState");
    expect(projectPreview).toContain("activeProject");
    expect(projectPreview).toContain("setCurrentIndex(index)");
    expect(projectPreview).toContain("aria-label=\"Homepage project image lightbox\"");
    expect(projectPreview).toContain("aria-label=\"Previous homepage project image\"");
    expect(projectPreview).toContain("aria-label=\"Next homepage project image\"");
    expect(projectPreview).toContain("aria-label=\"Close homepage project lightbox\"");
    expect(projectPreview).toContain('document.documentElement.style.overflow = "hidden"');
    expect(projectPreview).toContain("previousBodyOverflow");
    expect(projectPreview).toContain("backdrop-blur-sm");
    expect(projectPreview).toContain("previewImages.length");
  });

  it("uses project gallery images for page banners that were missing backgrounds", () => {
    const servicesPage = readFileSync(join(root, "src/pages/Services.tsx"), "utf8");
    const serviceAreaPage = readFileSync(join(root, "src/pages/ServiceArea.tsx"), "utf8");
    const serviceData = readFileSync(join(root, "src/data/services.ts"), "utf8");

    expect(servicesPage).toContain("@/assets/projects/project-2.jpg");
    expect(servicesPage).not.toContain('backgroundImage="/placeholder.svg"');
    expect(serviceAreaPage).toContain("@/assets/projects/project-9.jpg");
    expect(serviceAreaPage).not.toContain('backgroundImage="/placeholder.svg"');
    expect(serviceData).toContain("@/assets/projects/project-2.jpg");
    expect(serviceData).toContain("@/assets/projects/project-6.jpg");
    expect(serviceData).toContain("@/assets/projects/project-10.jpg");
    expect(serviceData).not.toContain('bannerImage: "/placeholder.svg"');
  });

  it("uses the new auto-changing full-screen hero background under an overlay navbar", () => {
    const hero = readFileSync(join(root, "src/components/home/HeroSection.tsx"), "utf8");
    const navbar = readFileSync(join(root, "src/components/Navbar.tsx"), "utf8");

    expect(hero).toContain("@/assets/hero/hero-1.jpg");
    expect(hero).toContain("@/assets/hero/hero-2.jpg");
    expect(hero).toContain("@/assets/hero/hero-3.jpg");
    expect(hero).toContain("h-[100svh]");
    expect(hero).toContain("max-h-[100svh]");
    expect(hero).toContain("absolute inset-0");
    expect(hero).toContain("duration-[1800ms]");
    expect(hero).toContain("setCurrentImageIndex");
    expect(hero).toContain("Request a Quote");
    expect(hero).toContain("View Services");
    expect(hero).not.toContain("/placeholder.svg");
    expect(hero).not.toContain("bento-card");
    expect(navbar).toContain('isHome');
    expect(navbar).toContain('"bg-transparent text-white"');
    expect(navbar).toContain('"brightness-0 invert"');
  });

  it("uses the logo red as the global primary brand color", () => {
    const css = readFileSync(join(root, "src/index.css"), "utf8");

    expect(css).toContain("--primary: 2 78% 53%");
    expect(css).toContain("--ring: 2 78% 53%");
    expect(css).toContain("hsl(2 78% 53%)");
    expect(css).not.toContain("--primary: 4 77% 51%");
    expect(css).not.toContain("--primary: 22 82% 48%");
  });

  it("keeps the hero imagery visible with balanced overlays and compact mobile copy", () => {
    const hero = readFileSync(join(root, "src/components/home/HeroSection.tsx"), "utf8");

    expect(hero).toContain("bg-black/50");
    expect(hero).toContain("from-black/74");
    expect(hero).toContain("via-black/38");
    expect(hero).toContain("hidden max-w-2xl");
    expect(hero).toContain("md:block");
    expect(hero).not.toContain("bg-black/60");
    expect(hero).not.toContain("from-black/80 via-black/48");
  });

  it("uses project gallery images for homepage and service area section imagery", () => {
    const serviceAreaPreview = readFileSync(join(root, "src/components/home/ServiceAreaPreview.tsx"), "utf8");
    const serviceAreaPage = readFileSync(join(root, "src/pages/ServiceArea.tsx"), "utf8");

    expect(serviceAreaPreview).toContain("@/assets/projects/project-2.jpg");
    expect(serviceAreaPreview).not.toContain('src="/placeholder.svg"');
    expect(serviceAreaPage).toContain("@/assets/projects/project-10.jpg");
    expect(serviceAreaPage).toContain("@/assets/projects/project-2.jpg");
    expect(serviceAreaPage).toContain("@/assets/projects/project-6.jpg");
    expect(serviceAreaPage).toContain("@/assets/projects/project-5.jpg");
    expect(serviceAreaPage).not.toContain('image: "/placeholder.svg"');
    expect(serviceAreaPage).not.toContain('src="/placeholder.svg"');
  });

  it("uses a Google brand icon in the homepage review section", () => {
    const reviews = readFileSync(join(root, "src/components/home/ReviewSection.tsx"), "utf8");

    expect(reviews).toContain("const GoogleIcon");
    expect(reviews).toContain('aria-label="Google"');
    expect(reviews).toContain("fill=\"#4285F4\"");
    expect(reviews).toContain("fill=\"#34A853\"");
    expect(reviews).not.toContain("Building2");
  });

  it("adds restrained Cebu local identity cues without changing the content scope", () => {
    const hero = readFileSync(join(root, "src/components/home/HeroSection.tsx"), "utf8");
    const footer = readFileSync(join(root, "src/components/Footer.tsx"), "utf8");
    const css = readFileSync(join(root, "src/index.css"), "utf8");

    expect(hero).toContain("Klarong koordinasyon");
    expect(hero).toContain("Cebu-based team");
    expect(footer).toContain("Lokal nga serbisyo");
    expect(footer).toContain("Cebu-based construction team");
    expect(footer).toContain("cebu-grid-texture");
    expect(css).toContain(".cebu-grid-texture::before");
    expect(css).toContain("linear-gradient(135deg");
  });
});
