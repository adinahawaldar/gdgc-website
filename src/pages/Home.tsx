"use client";
import { ArrowRight, Code, Users, Calendar, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: "Learn & Build",
      description: "Master Google technologies through hands-on workshops and projects"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded developers and tech enthusiasts"
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Regular workshops, hackathons, and tech talks with industry experts"
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Participate in competitions and showcase your projects"
    }
  ];

  const stats = [
    { label: "Members", value: 500 },
    { label: "Workshops", value: 50 },
    { label: "Projects", value: 25 },
    { label: "Hackathons", value: 15 },
  ];

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
              <Sparkles className="h-10 w-10 text-yellow-300" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Empowering Students with <br />
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Google Technologies
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Join GDGC AIKTC and become part of a vibrant community of developers, 
            innovators, and tech enthusiasts building the future.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Button size="lg" className="bg-white text-primary hover:scale-105 transition-transform">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              Explore Events
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative z-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl font-extrabold">
                {mounted && <CountUp end={stat.value} duration={3} />}+
              </div>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join <span className="text-gradient">GDGC AIKTC</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover opportunities to learn, grow, and innovate with cutting-edge Google technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Card className="border-0 shadow-card hover:shadow-2xl transition-all bg-white/80 backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <motion.div
                        className="p-3 rounded-lg bg-primary/10"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        <feature.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary relative z-10">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-bounce">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of students already learning and building amazing projects with Google technologies
            </p>
            <Button size="lg" className="bg-white text-primary hover:scale-110 transition-transform">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
