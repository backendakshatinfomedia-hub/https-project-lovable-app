import { Megaphone, Globe, Palette, Video, Server, CheckCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Boost your online visibility and drive qualified traffic with data-driven marketing strategies.",
    features: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Pay-Per-Click (PPC) Advertising", "Content Marketing & Strategy", "Email Marketing Campaigns"],
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom, responsive websites and web applications built with the latest technologies.",
    features: ["Custom Website Design", "E-commerce Development", "Web Application Development", "CMS Integration", "Performance Optimization"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Creative visual solutions that communicate your brand story effectively.",
    features: ["Logo & Brand Identity", "Print Design (Brochures, Flyers)", "Digital Design (Banners, Social)", "Packaging Design", "UI/UX Design"],
  },
  {
    icon: Video,
    title: "Video Production",
    desc: "Professional video content that engages and inspires your audience.",
    features: ["Corporate Videos", "Motion Graphics & Animation", "Video Editing & Post-Production", "Explainer Videos", "Social Media Video Content"],
  },
  {
    icon: Server,
    title: "IT Solutions",
    desc: "End-to-end IT services to keep your business running smoothly and securely.",
    features: ["IT Consulting", "Cloud Solutions", "Software Development", "Technical Support", "Data Analytics"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs. We bring expertise, creativity, and dedication to every project.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 space-y-12">
          {services.map((service, i) => (
            <ScrollAnimation key={service.title} delay={0.1}>
              <div className={`flex flex-col lg:flex-row gap-8 items-center p-8 rounded-2xl border border-border bg-card ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-secondary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center border border-border">
                    <service.icon size={64} className="text-primary/20" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
