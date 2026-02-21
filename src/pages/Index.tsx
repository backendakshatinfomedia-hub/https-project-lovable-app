import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Megaphone, Globe, Palette, Video, Server, ArrowRight, Users, Award, Briefcase, ThumbsUp } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";

const services = [
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, Social Media, PPC & Content Marketing to amplify your brand reach." },
  { icon: Globe, title: "Web Development", desc: "Custom websites, e-commerce & web apps built for performance." },
  { icon: Palette, title: "Graphic Design", desc: "Logos, branding & print/digital design that captivates." },
  { icon: Video, title: "Video Production", desc: "Editing, animation & motion graphics that tell your story." },
  { icon: Server, title: "IT Solutions", desc: "Comprehensive IT & infomedia services for modern businesses." },
];

const stats = [
  { icon: Briefcase, value: 200, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 150, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "Client Satisfaction" },
];

const testimonials = [
  { name: "Rahul Sharma", role: "CEO, TechStart", text: "Akshat Infomedia transformed our online presence. Their team delivered beyond expectations with creative designs and strategic marketing." },
  { name: "Priya Patel", role: "Founder, StyleHub", text: "Exceptional web development and branding services. They understood our vision perfectly and brought it to life beautifully." },
  { name: "Amit Desai", role: "Director, GreenLeaf", text: "The video production quality was outstanding. Professional, timely, and incredibly creative. Highly recommended!" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4"
            >
              Welcome to Akshat Infomedia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              We Build <span className="text-gradient">Digital Experiences</span> That Drive Growth
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              From stunning websites to powerful marketing campaigns, we help brands stand out in the digital world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollAnimation key={service.title} delay={i * 0.1}>
                <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <stat.icon size={32} className="mx-auto mb-3 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm opacity-80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          </ScrollAnimation>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg italic text-muted-foreground mb-6">
                "{testimonials[activeTestimonial].text}"
              </p>
              <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
            </motion.div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === activeTestimonial ? "bg-primary" : "bg-border"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Let's create something amazing together. Get in touch and let's discuss your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:bg-background/90 transition-colors"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
