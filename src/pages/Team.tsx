import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Team = () => {
  const organizer = {
    name: "Dr. Rajesh Kumar",
    role: "Faculty Coordinator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Professor at AIKTC with 15+ years of experience in Computer Science and Google technologies.",
    social: {
      linkedin: "#",
      email: "rajesh.kumar@aiktc.ac.in"
    }
  };

  const coreTeam = [
    {
      name: "Priya Sharma",
      role: "Lead Organizer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Final year CS student passionate about Android development and Machine Learning.",
      social: {
        github: "#",
        linkedin: "#",
        email: "priya@gdgc.aiktc"
      }
    },
    {
      name: "Arjun Patel",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Google Cloud enthusiast with expertise in web development and DevOps.",
      social: {
        github: "#",
        linkedin: "#",
        email: "arjun@gdgc.aiktc"
      }
    },
    {
      name: "Sneha Reddy",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about building communities and organizing tech events.",
      social: {
        github: "#",
        linkedin: "#",
        email: "sneha@gdgc.aiktc"
      }
    },
    {
      name: "Rahul Singh",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "UI/UX designer with a love for creating beautiful and functional interfaces.",
      social: {
        github: "#",
        linkedin: "#",
        email: "rahul@gdgc.aiktc"
      }
    }
  ];

  const members = [
    {
      name: "Aisha Khan",
      role: "Android Developer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
      social: { github: "#", linkedin: "#" }
    },
    {
      name: "Vikram Joshi",
      role: "ML Enthusiast",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      social: { github: "#", linkedin: "#" }
    },
    {
      name: "Kavya Nair",
      role: "Web Developer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      social: { github: "#", linkedin: "#" }
    },
    {
      name: "Rohit Gupta",
      role: "Cloud Engineer",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
      social: { github: "#", linkedin: "#" }
    }
  ];

  const SocialLinks = ({ social, size = "sm" }: { social: any; size?: "sm" | "lg" }) => (
    <div className={`flex space-x-2 ${size === "lg" ? "justify-center" : ""}`}>
      {social.github && (
        <Button variant="ghost" size={size} asChild>
          <a href={social.github} aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        </Button>
      )}
      {social.linkedin && (
        <Button variant="ghost" size={size} asChild>
          <a href={social.linkedin} aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
      )}
      {social.email && (
        <Button variant="ghost" size={size} asChild>
          <a href={`mailto:${social.email}`} aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate individuals driving GDGC AIKTC forward and creating an amazing community experience.
          </p>
        </div>

        {/* Faculty Coordinator */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Faculty <span className="text-gradient">Coordinator</span>
          </h2>
          <div className="flex justify-center">
            <Card className="max-w-md shadow-card border-0 animate-bounce-in">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-primary"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{organizer.name}</h3>
                <p className="text-primary font-medium mb-4">{organizer.role}</p>
                <p className="text-muted-foreground mb-6">{organizer.bio}</p>
                <SocialLinks social={organizer.social} size="lg" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Core <span className="text-gradient">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <Card 
                key={member.name} 
                className="shadow-card border-0 animate-slide-up hover:shadow-hover transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-card"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <SocialLinks social={member.social} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our <span className="text-gradient">Members</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <Card 
                key={member.name} 
                className="shadow-card border-0 animate-bounce-in hover:shadow-hover transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover shadow-card"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                  <SocialLinks social={member.social} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-20 text-center">
          <Card className="shadow-card border-0 gradient-primary">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for passionate students who want to contribute to the community 
                and help organize amazing events and workshops.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hover">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;