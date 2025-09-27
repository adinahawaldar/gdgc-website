import { ArrowRight, Code, Users, Calendar, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}


      <section className="relative overflow-hidden py-20 md:py-32">
  {/* Background GIF */}
  {/* <div className="absolute inset-0"> */}
  <div className="absolute inset-0 flex justify-center items-center">
    <img
      src="bg.gif" // replace with your GIF path
      alt="Background Animation"
      className="w-full h-full object-cover"
    />
    {/* Optional overlay for better text visibility */}
    {/* <div className="absolute inset-0 bg-black/40"></div> */}
  </div>

  {/* Content */}
  <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center text-green-foreground">
    <div className="animate-fade-in max-w-3xl mx-auto text-green">
      {/* Logo or Icon */}
      <div className="mb-8 flex justify-center">
        <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
          <span className="text-4xl font-bold">Google</span>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Google Developer Groups on Campus
      </h1>

      {/* Subheading */}
      <p className="text-xl text-white/90 mb-6">
        Anjuman-I-Islam's Kalsekar Technical Campus
      </p>

      {/* Description */}
      <p className="text-lg text-white/80 mb-8">
        Google Developer Groups  is a Google Developers program for university students to learn mobile and web development skills, design thinking skills, and leadership skills.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hover">
          Become a Member
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
        >
          Join Us
        </Button>
      </div>
    </div>
  </div>
</section>




      {/* <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-8 flex justify-center">
              <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                <span className="text-4xl font-bold text-white">G</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering Students with
              <br />
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Google Technologies
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join GDGC AIKTC and become part of a vibrant community of developers, 
              innovators, and tech enthusiasts building the future with Google technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hover">
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join <span className="text-gradient">GDGC AIKTC</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover opportunities to learn, grow, and innovate with cutting-edge Google technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="border-0 shadow-card hover:shadow-hover transition-smooth animate-slide-up bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of students already learning and building amazing projects with Google technologies
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hover">
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