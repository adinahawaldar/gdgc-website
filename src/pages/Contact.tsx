"use client";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Clock,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const hoverTilt = {
  rest: { rotate: 0, scale: 1, transition: { duration: 0.3 } },
  hover: { rotate: 1.5, scale: 1.02, transition: { duration: 0.3 } },
};

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // 🎇 Confetti when form is submitted
  useEffect(() => {
    if (formSubmitted) {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.7 } });
    }
  }, [formSubmitted]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "gdgc@aiktc.ac.in",
      description: "Get in touch for general inquiries",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 123 456 7890",
      description: "Reach us during office hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "AIKTC Campus, New Panvel",
      description: "Find us at the Computer Department",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      description: "Check out our projects and contribute",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      description: "Connect with us professionally",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      description: "Follow for updates and announcements",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  const faqs = [
    {
      question: "How can I join GDGC AIKTC?",
      answer:
        "Fill out our membership form or attend our events. We welcome all AIKTC students interested in Google technologies.",
    },
    {
      question: "Are the workshops free for students?",
      answer:
        "Yes! All our workshops and events are free for AIKTC students. We make tech education accessible to everyone.",
    },
    {
      question: "Do I need prior coding experience to participate?",
      answer:
        "Not at all! We have beginner-friendly events as well as advanced workshops.",
    },
    {
      question: "How often do you organize events?",
      answer:
        "We host 2-3 workshops per month, plus hackathons and tech talks throughout the year.",
    },
  ];

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* 🌊 Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-200 via-indigo-200 to-pink-200"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.h1
            className="text-5xl font-extrabold text-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.span
              animate={{ color: ["#2563eb", "#16a34a", "#db2777"] }}
              transition={{ repeat: Infinity, duration: 6 }}
            >
              Get in Touch
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            Have questions about our events, want to collaborate, or interested
            in joining? We'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                <AnimatePresence>
                  {!formSubmitted ? (
                    <motion.form
                      className="space-y-6"
                      onSubmit={handleFormSubmit}
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Label>First Name</Label>
                          <Input placeholder="Enter first name" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Label>Last Name</Label>
                          <Input placeholder="Enter last name" />
                        </motion.div>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Label>Email</Label>
                        <Input type="email" placeholder="Enter email" />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Label>Subject</Label>
                        <Input placeholder="What is this about?" />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Label>Message</Label>
                        <Textarea rows={5} placeholder="Tell us more..." />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Button type="submit" size="lg" className="w-full">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-2xl font-bold text-green-600 mb-4">
                        ✅ Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        We'll get back to you shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info + Socials */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={fadeUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div variants={hoverTilt}>
                  <Card className="shadow-md border-0">
                    <CardContent className="p-6 flex items-center gap-4">
                      <info.icon className="h-7 w-7 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {info.title}
                        </h3>
                        <p className="font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}

            {/* Office Hours */}
            <motion.div variants={fadeUp}>
              <Card className="shadow-md border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-6 w-6 text-secondary" />
                    <h3 className="text-lg font-semibold">Office Hours</h3>
                  </div>
                  {officeHours.map((h) => (
                    <motion.div
                      key={h.day}
                      whileHover={{ scale: 1.02 }}
                      className="flex justify-between text-sm mb-2"
                    >
                      <span>{h.day}</span>
                      <span className="font-medium">{h.time}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp}>
              <Card className="shadow-md border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  {socialLinks.map((s) => (
                    <motion.a
                      key={s.name}
                      href={s.href}
                      whileHover={{ x: 8, scale: 1.05 }}
                      className="flex items-center gap-3 mb-3"
                    >
                      <s.icon className="h-6 w-6 text-accent" />
                      <div>
                        <p className="font-medium">{s.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {s.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQs */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((f) => (
              <motion.div key={f.question} variants={fadeUp}>
                <Card className="p-6">
                  <details className="group">
                    <summary className="cursor-pointer flex justify-between">
                      {f.question}
                      <motion.span
                        whileHover={{ rotate: 90 }}
                        className="ml-2"
                      >
                        ▼
                      </motion.span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {f.answer}
                    </p>
                  </details>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg">
            <CardContent className="p-12 text-center">
              <Users className="h-16 w-16 mx-auto mb-6 animate-bounce" />
              <h2 className="text-3xl font-bold mb-4">
                Join Our Growing Community
              </h2>
              <p className="mb-8 max-w-xl mx-auto text-white/90">
                Connect with developers, attend events, and be part of AIKTC’s
                most active tech family!
              </p>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button size="lg" className="bg-white text-primary">
                  Join Now
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
