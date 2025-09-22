import { ArrowRight, Users, Code, Calendar, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Background Floating Shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-purple-500/20 animate-spin-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-yellow-400/20 animate-spin-slow-reverse"></div>
      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        {/* Logo / Symbol */}
        <div className="mb-8 flex justify-center">
          <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30 transform hover:scale-110 transition-transform duration-500">
            <span className="text-5xl font-bold text-white">G</span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Welcome to <br />
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            GDGC AIKTC
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in delay-100">
          Empowering students and developers with hands-on experience in Google technologies, workshops, hackathons, and community collaborations.
          Start building projects, learning new skills, and connecting with a vibrant tech community today.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-200">
          <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg transform hover:scale-105 transition-all flex items-center justify-center" size="lg">
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-gray-300 text-foreground hover:bg-gray-100/20 backdrop-blur-sm transform hover:scale-105 transition-all" size="lg">
            Explore Events
          </Button>
        </div>

        {/* Features / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto animate-slide-up">
          {[
            { icon: Code, title: "Learn & Build", description: "Hands-on projects and workshops" },
            { icon: Users, title: "Community", description: "Connect with tech enthusiasts" },
            { icon: Calendar, title: "Events", description: "Attend hackathons & talks" },
            { icon: Trophy, title: "Achievements", description: "Showcase your skills" },
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA / Decorative */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
        <p className="text-sm text-muted-foreground animate-bounce">
          Scroll down to explore more →
        </p>
      </div>
    </div>
  );
};

export default Index;
