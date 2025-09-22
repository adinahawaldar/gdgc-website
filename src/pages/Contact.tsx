import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleOnHover = {
  rest: { scale: 1, transition: { duration: 0.2 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "gdgc@aiktc.ac.in",
      description: "Get in touch for general inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 123 456 7890",
      description: "Reach us during office hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "AIKTC Campus, New Panvel",
      description: "Find us at the Computer Department"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      description: "Check out our projects and contribute"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      description: "Connect with us professionally"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      description: "Follow for updates and announcements"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const faqs = [
    {
      question: "How can I join GDGC AIKTC?",
      answer: "You can join by filling out our membership form or attending one of our events. We welcome all AIKTC students interested in Google technologies."
    },
    {
      question: "Are the workshops free for students?",
      answer: "Yes! All our workshops and events are completely free for AIKTC students. We believe in making technology education accessible to everyone."
    },
    {
      question: "Do I need prior coding experience to participate?",
      answer: "Not at all! We have events for all skill levels, from beginners to advanced developers. Our workshops are designed to help you learn step by step."
    },
    {
      question: "How often do you organize events?",
      answer: "We organize events regularly - typically 2-3 workshops per month, plus special events like hackathons and tech talks throughout the academic year."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our events, want to collaborate, or interested in joining GDGC AIKTC? 
            We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="shadow-card border-0 overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                {!formSubmitted ? (
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                      </motion.div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" className="mt-1" />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this about?" className="mt-1" />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} className="mt-1" />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button className="w-full" size="lg" type="submit">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-primary mb-4">✅ Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">We'll get back to you shortly.</p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={info.title} variants={fadeUp} whileHover="hover" initial="rest" animate="rest">
                <Card className="shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-primary/10 mr-4">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.details}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Office Hours */}
            <motion.div variants={fadeUp}>
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-secondary/10 mr-4">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Office Hours</h3>
                  </div>
                  <div className="space-y-2 ml-14">
                    {officeHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="text-foreground font-medium">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp}>
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-4">Follow Us</h3>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                      >
                        <div className="p-2 rounded-md bg-accent/10 mr-3 group-hover:bg-accent/20">
                          <social.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.description}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div className="mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} variants={fadeUp}>
                <Card className="shadow-card border-0 overflow-hidden">
                  <CardContent className="p-6">
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-foreground mb-3 flex justify-between items-center">
                        {faq.question}
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <p className="text-muted-foreground text-sm mt-2">{faq.answer}</p>
                    </details>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map Embed */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="shadow-card border-0 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4704327031683!2d73.11515607461738!3d19.03224078216879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e8a6a2683d7d%3A0x55dd1ad1e2abbe5c!2sAIKTC!5e0!3m2!1sen!2sin!4v1695023451234!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="mt-20" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="shadow-card border-0 gradient-primary">
            <CardContent className="p-12 text-center">
              <Users className="h-16 w-16 text-white mx-auto mb-6 animate-bounce" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Growing Community
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Connect with fellow developers, attend amazing events, and be part of the 
                most active tech community at AIKTC. Your journey starts here!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hover">
                    Join GDGC AIKTC
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;