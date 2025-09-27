"use client";
import {
  Target,
  Eye,
  Users,
  Lightbulb,
  HeartHandshake,
  Rocket,
  Sparkles,
  Code2,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
  const values = [
    { icon: Lightbulb, title: "Innovation", description: "Fostering creative thinking and innovative solutions using cutting-edge technologies" },
    { icon: Users, title: "Community", description: "Building a supportive network of developers and tech enthusiasts" },
    { icon: Target, title: "Excellence", description: "Striving for excellence in learning, building, and sharing knowledge" },
    { icon: HeartHandshake, title: "Collaboration", description: "Working together to learn, grow, and create meaningful impact" },
  ];

  const stats = [
    { number: 50, label: "Workshops" },
    { number: 500, label: "Members" },
    { number: 20, label: "Projects" },
    { number: 15, label: "Hackathons" },
  ];

  const timeline = [
    { year: "2021", event: "Founded GDGC AIKTC" },
    { year: "2022", event: "Hosted first Google Cloud Workshop" },
    { year: "2023", event: "Launched Community Hackathon" },
    { year: "2024", event: "Reached 500+ members milestone" },
  ];

  const team = [
    { name: "Aman", role: "Lead", img: "/team1.jpg" },
    { name: "Sara", role: "Co-Lead", img: "/team2.jpg" },
    { name: "Rahul", role: "Tech Head", img: "/team3.jpg" },
    { name: "Meera", role: "Design Head", img: "/team4.jpg" },
  ];

  return (
    <div className="relative min-h-screen py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
      {/* Floating Background */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold text-foreground mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              GDGC AIKTC
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a vibrant community of students at AIKTC passionate about
            Google technologies, innovation, and collaborative learning.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="shadow-lg bg-white/80 backdrop-blur hover:-translate-y-2 transition">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  To empower students with Google technologies by providing
                  hands-on learning experiences, fostering innovation, and
                  building a strong developer community.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="shadow-lg bg-white/80 backdrop-blur hover:-translate-y-2 transition">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-secondary mr-3" />
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  To be the leading student developer community that inspires
                  the next generation of innovators and contributes to the
                  global tech ecosystem.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-6 bg-white/80 shadow-md rounded-xl backdrop-blur"
            >
              <h3 className="text-4xl font-bold text-primary">
                <CountUp end={stat.number} duration={3} />+
              </h3>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center bg-white/80 backdrop-blur shadow-md hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center">
                      <value.icon className="h-10 w-10 text-accent animate-bounce" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative border-l-4 border-blue-500 ml-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="mb-10 ml-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-2"></div>
                <h3 className="font-bold text-lg">{item.year}</h3>
                <p className="text-muted-foreground">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur shadow-lg rounded-xl overflow-hidden hover:-translate-y-2 transition"
                whileHover={{ scale: 1.05 }}
              >
                <img src={member.img} alt={member.name} className="w-full h-56 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-6">
            🚀 Be Part of <span className="text-yellow-300">GDGC AIKTC</span>
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join us today and grow your skills, network, and opportunities with
            Google technologies.
          </p>
          <a
            href="#join"
            className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
          >
            Join Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
