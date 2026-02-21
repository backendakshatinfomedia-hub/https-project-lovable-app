import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Akshat Infomedia" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering businesses with cutting-edge digital solutions. Your growth is our mission.
            </p>
            <div className="flex gap-3 mt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((name) => (
                <li key={name}>
                  <Link
                    to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Digital Marketing</li>
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>Video Production</li>
              <li>IT Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-secondary" />
                Trapezium, 1st, opp. Nyati Ebony, Nyati County, Undri, Pune, Maharashtra 411060
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={16} className="shrink-0 text-secondary" />
                <a href="tel:07385556422" className="hover:text-primary transition-colors">073855 56422</a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={16} className="shrink-0 text-secondary" />
                <a href="mailto:info@akshatinfomedia.com" className="hover:text-primary transition-colors">info@akshatinfomedia.com</a>
              </li>
              <li className="flex gap-2 items-center">
                <Clock size={16} className="shrink-0 text-secondary" />
                Open · Closes 6:30 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} Akshat Infomedia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
