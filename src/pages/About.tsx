import { Target, Eye, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creative thinking and innovative solutions using cutting-edge technologies"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive network of developers and tech enthusiasts"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for excellence in learning, building, and sharing knowledge"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">GDGC AIKTC</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a vibrant community of students at AIKTC passionate about Google technologies, 
            innovation, and collaborative learning.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-card border-0 animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower students with Google technologies by providing hands-on learning experiences, 
                fostering innovation, and building a strong developer community at AIKTC. We aim to bridge 
                the gap between academic learning and industry requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-secondary/10 mr-4">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the leading student developer community that inspires and nurtures the next generation 
                of innovators, creating impactful solutions using Google technologies and contributing to 
                the global tech ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our <span className="text-gradient">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="shadow-card border-0 text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-accent/10">
                      <value.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <Card className="shadow-card border-0 gradient-card animate-fade-in">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              What We <span className="text-gradient">Do</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Workshops & Training</h3>
                <p className="text-muted-foreground mb-6">
                  Regular hands-on workshops covering Google Cloud Platform, Android development, 
                  Machine Learning with TensorFlow, and other Google technologies.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">Community Events</h3>
                <p className="text-muted-foreground">
                  Tech talks, hackathons, code reviews, and networking sessions to foster 
                  collaboration and knowledge sharing among students.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Projects & Innovation</h3>
                <p className="text-muted-foreground mb-6">
                  Collaborative projects using Google technologies, open-source contributions, 
                  and innovation challenges to solve real-world problems.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">Industry Connect</h3>
                <p className="text-muted-foreground">
                  Connecting students with industry professionals, Google Developer Experts, 
                  and organizing career guidance sessions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;