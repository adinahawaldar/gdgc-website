"use client";
import {
  Trophy,
  Award,
  Star,
  Users,
  Calendar,
  ExternalLink,
  Sparkles,
  Quote,
  Globe2,
  Rocket,
  HeartHandshake,
  Medal,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import CountUp from "react-countup";

// 🌟 Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity },
  },
};

const Achievements = () => {
  // Confetti on mount 🎉
  useEffect(() => {
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.4 } });
  }, []);

  // Achievements
  const achievements = [
    {
      id: 1,
      title: "Google Solution Challenge 2024",
      category: "Global Competition",
      position: "Top 100 Finalists",
      date: "March 2024",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop",
      description:
        "Our team developed 'EcoTrack', an AI-powered app for carbon footprint tracking using Google Cloud and TensorFlow.",
      participants: ["Priya Sharma", "Arjun Patel", "Aisha Khan"],
      technologies: ["Flutter", "Firebase", "Google Cloud", "TensorFlow"],
      impact: "10,000+ downloads, featured in Google Developers Blog",
      link: "#",
    },
    {
      id: 2,
      title: "Smart India Hackathon 2024",
      category: "National Hackathon",
      position: "🏆 1st Place - Software Edition",
      date: "February 2024",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=350&fit=crop",
      description:
        "Built 'HealthConnect', a telemedicine platform connecting rural patients with urban doctors using Google Meet APIs.",
      participants: ["Vikram Joshi", "Sneha Reddy", "Rohit Gupta"],
      technologies: ["React", "Node.js", "Google Meet API", "Firebase"],
      impact: "₹1,00,000 prize money, adopted by 3 rural health centers",
      link: "#",
    },
  ];

  // Stats
  const stats = [
    { icon: Trophy, label: "Competitions Won", value: 15 },
    { icon: Award, label: "Certifications Earned", value: 150 },
    { icon: Users, label: "Students Impacted", value: 1000 },
    { icon: Star, label: "GitHub Stars", value: 500 },
  ];

  // Timeline milestones
  const milestones = [
    { year: "2022", text: "Founded GDGC AIKTC" },
    { year: "2023", text: "Organized 10+ events & hackathons" },
    { year: "2024", text: "Top 100 Global Finalists in Google Challenge" },
    { year: "2025", text: "Expanding global collaborations 🌍" },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Solution Challenge Finalist",
      quote:
        "GDGC AIKTC gave me the platform to showcase my skills and work on impactful projects. It truly changed my career path.",
    },
    {
      name: "Rahul Singh",
      role: "Hackathon Winner",
      quote:
        "The mentorship and community support here is unmatched. We not only won, but learned how to collaborate at scale.",
    },
    {
      name: "Sneha Reddy",
      role: "Core Team Member",
      quote:
        "Being part of this community is like having a family in tech – always supportive, always pushing you to grow.",
    },
  ];

  const getPositionColor = (position: string) => {
    if (position.includes("1st") || position.includes("Winner"))
      return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg";
    if (position.includes("2nd") || position.includes("Runner"))
      return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
    if (position.includes("3rd") || position.includes("Third"))
      return "bg-gradient-to-r from-amber-600 to-red-600 text-white";
    return "bg-primary text-primary-foreground";
  };

  return (
    <div className="relative min-h-screen py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-30 blur-2xl"
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-green-300 rounded-full opacity-30 blur-2xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            GDGC AIKTC Achievements 🎉
          </motion.h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovation, collaboration, and global recognition – our journey is a
            story of passion and impact in technology 🚀
          </p>
        </motion.div>

        {/* Stats with CountUp */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="transform hover:scale-105 transition duration-500"
            >
              <Card className="shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <motion.div {...float} className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <div className="text-4xl font-extrabold text-foreground mb-2">
                    <CountUp end={stat.value} duration={3} />+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all rounded-2xl overflow-hidden">
                <div className="relative">
                  <motion.img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ rotate: 1.5 }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getPositionColor(a.position)}>
                      {a.position}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className="bg-white/90 text-foreground"
                    >
                      {a.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {a.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-1" /> {a.date}
                  </div>
                  <p className="text-muted-foreground mb-4">{a.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {a.technologies.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="bg-muted/40 rounded-lg p-3 mb-4">
                    <p className="text-sm text-muted-foreground">{a.impact}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Journey Timeline
          </h2>
          <div className="relative border-l-4 border-primary pl-8 space-y-10">
            {milestones.map((m, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <h3 className="text-xl font-bold">{m.year}</h3>
                <p className="text-muted-foreground">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-24 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-3xl font-bold mb-10">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeInUp}>
                <Card className="p-8 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="italic text-muted-foreground mb-4">
                    “{t.quote}”
                  </p>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-xl bg-gradient-to-r from-blue-600 to-green-500 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Be Part of Our Success Story
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Join GDGC AIKTC and contribute to amazing projects, participate
                in competitions, and make your mark in the tech world 🌍
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transform transition"
              >
                <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
                Join Our Community
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
