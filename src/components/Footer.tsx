import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:gdgc@aiktc.ac.in" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-white">G</span>
              </div>
              <span className="font-bold text-xl text-gradient">GDGC AIKTC</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Google Developer Group on Campus at AIKTC. Empowering students with Google technologies 
              through workshops, events, and collaborative learning.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 123 456 7890</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 GDGC AIKTC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Built with ❤️ by GDGC Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;