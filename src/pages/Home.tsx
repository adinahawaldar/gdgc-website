import { ArrowRight, Code, Users, Calendar, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: "Learn & Build",
      description: "Master Google technologies through hands-on workshops and real-world projects."
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded developers, collaborate, and grow together."
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Attend workshops, hackathons, and tech talks hosted by industry experts."
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Showcase your skills by participating in competitions and earning recognitions."
    }
  ];

  // Floating shapes rotation
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setOffset(prev => (prev + 0.5) % 360), 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
        {/* Floating animated shapes */}
        <div 
          className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-500/20 animate-spin-slow" 
          style={{ transform: `rotate(${offset}deg)` }}
        />
        <div 
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-yellow-400/20 animate-spin-slow-reverse" 
          style={{ transform: `rotate(${offset}deg)` }}
        />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down">
            {/* Logo Circle */}
            <div className="mb-8 flex justify-center">
              <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30 transform hover:scale-110 transition-transform duration-500">
                <span className="text-5xl md:text-6xl font-bold text-white">G</span>
              </div>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Empowering Students with <br />
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Google Technologies
              </span>
            </h1>

            {/* Hero Subtext */}
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Join GDGC AIKTC and become part of a vibrant community of developers, innovators, and tech enthusiasts.
              Learn, collaborate, and build amazing projects using the latest Google technologies.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-500 hover:to-purple-500 shadow-xl transform hover:scale-105 transition-all flex items-center justify-center" size="lg">
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all" size="lg">
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-card relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Why Join <span className="text-gradient bg-clip-text text-transparent from-purple-500 to-indigo-500">GDGC AIKTC</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              Discover opportunities to learn, grow, and innovate with cutting-edge Google technologies.
              Connect with mentors, participate in events, and level up your skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} 
                className="border-0 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 animate-slide-up bg-gradient-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center transform hover:scale-110 transition-all">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute -top-28 -left-28 w-56 h-56 rounded-full bg-purple-500/20 animate-spin-slow" />
        <div className="absolute -bottom-28 -right-28 w-72 h-72 rounded-full bg-yellow-400/20 animate-spin-slow-reverse" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-bounce">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Join hundreds of students already learning and building amazing projects with Google technologies.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-xl transform hover:scale-105 transition-all flex items-center justify-center" size="lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
