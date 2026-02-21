import { Target, Eye, Heart, Lightbulb, Shield, Zap } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import Layout from "@/components/Layout";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We embrace new ideas and technologies to deliver cutting-edge solutions." },
  { icon: Heart, title: "Passion", desc: "Every project is fueled by our passion for creating exceptional work." },
  { icon: Shield, title: "Integrity", desc: "We build trust through transparency and honest communication." },
  { icon: Zap, title: "Excellence", desc: "We strive for the highest quality in everything we deliver." },
];

const team = [
  { name: "Akshat Kumar", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { name: "Priya Mehta", role: "Creative Director", img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face" },
  { name: "Rohan Singh", role: "Lead Developer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { name: "Neha Joshi", role: "Marketing Head", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">We're Akshat Infomedia</h1>
            <p className="text-lg text-muted-foreground">
              A full-service digital agency in Pune dedicated to helping businesses thrive in the digital age.
              We combine creativity, technology, and strategy to deliver results that matter.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimation direction="left">
              <div className="p-8 rounded-xl border border-border bg-card">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading digital solutions provider in India, empowering businesses of all sizes to achieve their full potential through innovative technology and creative excellence.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="p-8 rounded-xl border border-border bg-card">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional digital services that drive growth, build brands, and create lasting impact. We are committed to quality, innovation, and client satisfaction.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">Our Core Values</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Drives Us</h2>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <ScrollAnimation key={v.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <v.icon size={22} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{v.title}</h4>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Experts</h2>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <ScrollAnimation key={member.name} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-primary transition-colors">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
