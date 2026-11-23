import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://novaveraai.github.io/#organization", "name": "Nova Vera AI & Robotics Lab", "url": "https://novaveraai.github.io/", "description": "An independent technology laboratory focused on artificial intelligence, robotics, automation and software engineering." },
      { "@type": "WebSite", "@id": "https://novaveraai.github.io/ordomind.novaveraai/#website", "name": "OrdoMind", "url": "https://novaveraai.github.io/ordomind.novaveraai/", "publisher": { "@id": "https://novaveraai.github.io/#organization" }, "inLanguage": "en" },
      { "@type": "SoftwareApplication", "@id": "https://novaveraai.github.io/ordomind.novaveraai/#software", "name": "OrdoMind", "applicationCategory": "BusinessApplication", "description": "An independent intelligence and scheduling engine for task organization, priority management, deadline tracking, dependency management and automated planning.", "url": "https://novaveraai.github.io/ordomind.novaveraai/", "creator": { "@id": "https://novaveraai.github.io/#organization" } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <CinematicReveal />
        <SystemsNominal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
