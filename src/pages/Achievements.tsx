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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";

// 🌟 Motion variants for reusability
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Achievements = () => {
  // Fire confetti once on page load 🎉
  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.3 },
    });
  }, []);

  // Example Achievements
  const achievements = [
    {
      id: 1,
      title: "Google Solution Challenge 2024",
      category: "Global Competition",
      position: "Top 100 Finalists",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      description:
        "Our team developed 'EcoTrack', an AI-powered app for carbon footprint tracking using Google Cloud Platform and TensorFlow.",
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
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
      description:
        "Developed 'HealthConnect', a telemedicine platform connecting rural patients with urban doctors using Google Meet APIs.",
      participants: ["Vikram Joshi", "Sneha Reddy", "Rohit Gupta"],
      technologies: ["React", "Node.js", "Google Meet API", "Firebase"],
      impact: "₹1,00,000 prize money, adopted by 3 rural health centers",
      link: "#",
    },
  ];

  // Stats Highlights
  const stats = [
    { icon: Trophy, label: "Competitions Won", value: "15+" },
    { icon: Award, label: "Certifications Earned", value: "150+" },
    { icon: Users, label: "Students Impacted", value: "1000+" },
    { icon: Star, label: "GitHub Stars", value: "500+" },
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
      return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-glow";
    if (position.includes("2nd") || position.includes("Runner"))
      return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
    if (position.includes("3rd") || position.includes("Third"))
      return "bg-gradient-to-r from-amber-600 to-red-600 text-white";
    return "bg-primary text-primary-foreground";
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Celebrating{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              GDGC AIKTC Achievements
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From hackathon victories to global recognition, our journey reflects innovation, collaboration, and passion for technology.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 animate-pulse">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-2xl">
                <div className="relative">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getPositionColor(achievement.position)}>{achievement.position}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-foreground">
                      {achievement.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{achievement.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{achievement.description}</p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Participants:</h4>
                      <div className="flex flex-wrap gap-1">
                        {achievement.participants.map((participant) => (
                          <Badge key={participant} variant="secondary" className="text-xs">
                            {participant}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {achievement.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-3 mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-1">Impact:</h4>
                    <p className="text-sm text-muted-foreground">{achievement.impact}</p>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div className="mt-20 text-center" initial="hidden" whileInView="visible" variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
          <h2 className="text-3xl font-bold mb-8">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeInUp}>
                <Card className="p-6 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur rounded-xl">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4">“{t.quote}”</p>
                  <h4 className="font-semibold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Reach */}
        <motion.div className="mt-20 text-center" initial={fadeInUp.hidden} whileInView={fadeInUp.visible} transition={{ duration: 1 }}>
          <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-xl">
            <CardContent className="p-12">
              <Globe2 className="h-14 w-14 mx-auto mb-4 animate-spin-slow" />
              <h2 className="text-3xl font-bold mb-4">Our Global Reach</h2>
              <p className="text-lg mb-6">GDGC AIKTC members and projects have inspired developers not only in India, but worldwide.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-2xl font-bold">25+</h3>
                  <p className="text-sm">Events Organized</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">1000+</h3>
                  <p className="text-sm">Students Impacted</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">10+</h3>
                  <p className="text-sm">Startups Collaborated</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">5+</h3>
                  <p className="text-sm">Countries Reached</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div className="mt-12" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
          <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-500 to-green-500 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Be Part of Our Success Story</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join GDGC AIKTC and contribute to amazing projects, participate in competitions, and make your mark in the tech world.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg transition-transform hover:scale-105">
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
