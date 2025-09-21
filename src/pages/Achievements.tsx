import { Trophy, Award, Star, Users, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Google Solution Challenge 2024",
      category: "Global Competition",
      position: "Top 100 Finalists",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      description: "Our team developed 'EcoTrack', an AI-powered app for carbon footprint tracking using Google Cloud Platform and TensorFlow.",
      participants: ["Priya Sharma", "Arjun Patel", "Aisha Khan"],
      technologies: ["Flutter", "Firebase", "Google Cloud", "TensorFlow"],
      impact: "10,000+ downloads, featured in Google Developers Blog"
    },
    {
      id: 2,
      title: "Smart India Hackathon 2024",
      category: "National Hackathon",
      position: "1st Place - Software Edition",
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
      description: "Developed 'HealthConnect', a telemedicine platform connecting rural patients with urban doctors using Google Meet APIs.",
      participants: ["Vikram Joshi", "Sneha Reddy", "Rohit Gupta"],
      technologies: ["React", "Node.js", "Google Meet API", "Firebase"],
      impact: "₹1,00,000 prize money, adopted by 3 rural health centers"
    },
    {
      id: 3,
      title: "Mumbai Student Developer Festival",
      category: "Regional Conference",
      position: "Best Community Contribution",
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
      description: "Recognized for outstanding contribution to the student developer community and organizing successful events.",
      participants: ["GDGC AIKTC Team"],
      technologies: ["Community Building", "Event Organization"],
      impact: "500+ students inspired, 15+ successful events organized"
    },
    {
      id: 4,
      title: "Build with AI Hackathon",
      category: "AI/ML Competition",
      position: "2nd Place",
      date: "December 2023",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      description: "Created 'StudyBuddy', an AI-powered study assistant using Google's PaLM API for personalized learning.",
      participants: ["Kavya Nair", "Rahul Singh"],
      technologies: ["Python", "Google PaLM API", "Streamlit", "Firebase"],
      impact: "Featured in TechCrunch, 5000+ active users"
    },
    {
      id: 5,
      title: "Google Cloud Skills Challenge",
      category: "Skills Competition",
      position: "100% Completion Rate",
      date: "November 2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      description: "All 25 GDGC members completed the Google Cloud Skills Challenge, earning multiple badges and certifications.",
      participants: ["All GDGC Members"],
      technologies: ["Google Cloud Platform", "Kubernetes", "BigQuery"],
      impact: "25 certified Google Cloud practitioners"
    },
    {
      id: 6,
      title: "Open Source Contribution Drive",
      category: "Community Initiative",
      position: "Outstanding Participation",
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
      description: "GDGC members contributed to various open-source projects, with over 100 merged pull requests.",
      participants: ["Multiple Members"],
      technologies: ["Various Open Source Projects"],
      impact: "100+ PRs merged, 10+ new repositories created"
    }
  ];

  const stats = [
    { icon: Trophy, label: "Competitions Won", value: "15+" },
    { icon: Award, label: "Certifications Earned", value: "150+" },
    { icon: Users, label: "Students Impacted", value: "1000+" },
    { icon: Star, label: "GitHub Stars", value: "500+" }
  ];

  const getPositionColor = (position: string) => {
    if (position.includes("1st") || position.includes("Winner")) return "bg-accent text-accent-foreground";
    if (position.includes("2nd") || position.includes("Runner")) return "bg-secondary text-secondary-foreground";
    if (position.includes("3rd") || position.includes("Third")) return "bg-destructive/10 text-destructive";
    return "bg-primary text-primary-foreground";
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Achievements</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating the success stories, competition wins, and impactful projects 
            created by our talented GDGC AIKTC community members.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="shadow-card border-0 animate-bounce-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.id} 
              className="shadow-card border-0 hover:shadow-hover transition-smooth animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getPositionColor(achievement.position)}>
                    {achievement.position}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-foreground">
                    {achievement.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
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

                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="mt-20">
          <Card className="shadow-card border-0 gradient-card">
            <CardContent className="p-12 text-center">
              <Trophy className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Recognition & Awards
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
                Our achievements have been recognized by Google, industry leaders, and the global developer community. 
                We continue to push boundaries and inspire others through our innovative projects and community initiatives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/50 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">Google Developer Recognition</h3>
                  <p className="text-sm text-muted-foreground">Featured in Google Developers Blog and social media channels</p>
                </div>
                <div className="bg-white/50 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">Media Coverage</h3>
                  <p className="text-sm text-muted-foreground">Featured in TechCrunch, The Hindu, and local newspapers</p>
                </div>
                <div className="bg-white/50 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">Industry Partnerships</h3>
                  <p className="text-sm text-muted-foreground">Collaborations with startups and tech companies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <Card className="shadow-card border-0 gradient-primary">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Be Part of Our Success Story
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join GDGC AIKTC and contribute to amazing projects, participate in competitions, 
                and make your mark in the tech world.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hover">
                Join Our Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Achievements;