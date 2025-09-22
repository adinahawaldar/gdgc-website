"use client";
import { Target, Eye, Users, Lightbulb, Rocket, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Fostering creative thinking and innovative solutions using cutting-edge technologies",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive network of developers and tech enthusiasts",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Striving for excellence in learning, building, and sharing knowledge",
    },
    {
      icon: HeartHandshake,
      title: "Collaboration",
      description: "Working together to learn, grow, and create meaningful impact",
    },
  ];

  return (
    <div className="relative min-h-screen py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background floating blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-foreground mb-6 leading-tight">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur hover:shadow-2xl transition-transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower students with Google technologies by providing
                  hands-on learning experiences, fostering innovation, and
                  building a strong developer community at AIKTC. We aim to bridge
                  the gap between academic learning and industry requirements.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur hover:shadow-2xl transition-transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10 mr-4">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading student developer community that inspires and
                  nurtures the next generation of innovators, creating impactful
                  solutions using Google technologies and contributing to the
                  global tech ecosystem.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our <span className="text-gradient">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Card className="shadow-lg border-0 text-center bg-white/80 backdrop-blur hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-full bg-accent/10">
                        <value.icon className="h-10 w-10 text-accent animate-pulse" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                What We <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">Do</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-3">🚀 Workshops & Training</h3>
                  <p className="text-white/80 mb-6">
                    Hands-on sessions on Google Cloud, Android, ML with TensorFlow,
                    and more.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🤝 Community Events</h3>
                  <p className="text-white/80">
                    Tech talks, hackathons, code reviews, and networking sessions to
                    foster collaboration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">💡 Projects & Innovation</h3>
                  <p className="text-white/80 mb-6">
                    Real-world projects, open-source contributions, and innovation
                    challenges.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🌍 Industry Connect</h3>
                  <p className="text-white/80">
                    Connect with professionals, Google Developer Experts, and get
                    career guidance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
