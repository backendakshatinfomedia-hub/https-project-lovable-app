import { useState } from "react";
import { X } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import Layout from "@/components/Layout";

const categories = ["All", "Web", "Design", "Marketing", "Video"];

const projects = [
  { title: "E-Commerce Platform", category: "Web", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" },
  { title: "Brand Identity Suite", category: "Design", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" },
  { title: "Social Media Campaign", category: "Marketing", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop" },
  { title: "Corporate Promo Video", category: "Video", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop" },
  { title: "Restaurant Website", category: "Web", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" },
  { title: "Product Packaging", category: "Design", img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop" },
  { title: "SEO Growth Strategy", category: "Marketing", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
  { title: "Explainer Animation", category: "Video", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-lg text-muted-foreground">
              Explore our latest projects across web development, design, marketing, and video production.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project, i) => (
              <ScrollAnimation key={project.title + filter} delay={i * 0.05}>
                <div
                  className="group relative rounded-xl overflow-hidden cursor-pointer border border-border"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-background font-semibold">{project.title}</p>
                      <span className="text-xs text-background/70 bg-secondary/80 px-2 py-0.5 rounded-full">{project.category}</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-background" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox]?.img}
              alt={filtered[lightbox]?.title}
              className="w-full rounded-xl"
            />
            <div className="text-center mt-4">
              <p className="text-background text-xl font-semibold">{filtered[lightbox]?.title}</p>
              <p className="text-background/70">{filtered[lightbox]?.category}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Portfolio;
