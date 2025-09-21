import { useState } from "react";
import { BookOpen, Github, Video, Download, ExternalLink, Code, Database, Smartphone, ChevronLeft, ChevronRight, X, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Resources = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Events" },
    { id: "workshops", name: "Workshops" },
    { id: "hackathons", name: "Hackathons" },
    { id: "community", name: "Community" },
    { id: "achievements", name: "Achievements" }
  ];

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      title: "Android Development Workshop",
      category: "workshops",
      date: "March 2024",
      attendees: 85,
      description: "Students learning Android app development with Kotlin and Jetpack Compose"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      title: "Smart India Hackathon Victory",
      category: "achievements",
      date: "February 2024",
      attendees: 6,
      description: "Our team celebrating the first place win at Smart India Hackathon 2024"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      title: "Google I/O Extended 2024",
      category: "community",
      date: "January 2024",
      attendees: 200,
      description: "Full auditorium during our Google I/O Extended event with live streaming"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      title: "Solution Challenge Presentation",
      category: "achievements",
      date: "March 2024",
      attendees: 4,
      description: "Team presenting EcoTrack app at Google Solution Challenge 2024"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop",
      title: "Firebase Workshop",
      category: "workshops",
      date: "February 2024",
      attendees: 120,
      description: "Hands-on session building web applications with Firebase services"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      title: "Build with AI Hackathon",
      category: "hackathons",
      date: "December 2023",
      attendees: 50,
      description: "48-hour hackathon focused on building AI-powered applications"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      title: "Flutter Development Session",
      category: "workshops",
      date: "February 2024",
      attendees: 95,
      description: "Cross-platform mobile app development workshop using Flutter"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      title: "Team Building Activity",
      category: "community",
      date: "January 2024",
      attendees: 30,
      description: "GDGC core team and members bonding during our annual retreat"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      title: "Google Cloud Skills Challenge",
      category: "workshops",
      date: "November 2023",
      attendees: 25,
      description: "Members completing Google Cloud certifications and earning badges"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
      title: "Open Source Contribution Day",
      category: "community",
      date: "October 2023",
      attendees: 40,
      description: "Collaborative coding session for contributing to open source projects"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      title: "Industry Expert Session",
      category: "community",
      date: "March 2024",
      attendees: 150,
      description: "Google Developer Expert sharing insights on modern web development"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop",
      title: "Code Review Workshop",
      category: "workshops",
      date: "February 2024",
      attendees: 60,
      description: "Learning best practices for code review and collaborative development"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item: any) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const resourceCategories = [
    {
      id: "learning",
      name: "Learning Materials",
      icon: BookOpen,
      description: "Curated study materials and documentation"
    },
    {
      id: "projects",
      name: "Project Repositories",
      icon: Github,
      description: "Open source projects and code samples"
    },
    {
      id: "videos",
      name: "Video Recordings",
      icon: Video,
      description: "Workshop recordings and tech talks"
    },
    {
      id: "tools",
      name: "Tools & Downloads",
      icon: Download,
      description: "Useful development tools and resources"
    }
  ];

  const learningResources = [
    {
      title: "Android Development Fundamentals",
      description: "Complete guide to Android app development using Kotlin and Jetpack Compose",
      type: "Guide",
      technology: "Android",
      link: "#",
      difficulty: "Beginner"
    },
    {
      title: "Google Cloud Platform Handbook",
      description: "Comprehensive guide covering GCP services, architecture, and best practices",
      type: "Handbook",
      technology: "GCP",
      link: "#",
      difficulty: "Intermediate"
    },
    {
      title: "Machine Learning with TensorFlow",
      description: "Step-by-step tutorial for building ML models with TensorFlow and Keras",
      type: "Tutorial",
      technology: "ML/AI",
      link: "#",
      difficulty: "Advanced"
    },
    {
      title: "Firebase Full-Stack Development",
      description: "Learn to build complete web applications using Firebase services",
      type: "Course",
      technology: "Firebase",
      link: "#",
      difficulty: "Intermediate"
    }
  ];

  const projectRepos = [
    {
      title: "EcoTrack - Carbon Footprint Tracker",
      description: "AI-powered mobile app for tracking and reducing carbon footprint",
      stars: 127,
      forks: 45,
      technology: "Flutter",
      link: "#",
      contributors: 4
    },
    {
      title: "HealthConnect - Telemedicine Platform",
      description: "Web platform connecting rural patients with urban healthcare providers",
      stars: 89,
      forks: 23,
      technology: "React",
      link: "#",
      contributors: 3
    },
    {
      title: "StudyBuddy - AI Study Assistant",
      description: "Personalized AI-powered study assistant using Google PaLM API",
      stars: 156,
      forks: 67,
      technology: "Python",
      link: "#",
      contributors: 2
    },
    {
      title: "GDGC Event Management System",
      description: "Complete event management system built for student communities",
      stars: 78,
      forks: 34,
      technology: "Node.js",
      link: "#",
      contributors: 6
    }
  ];

  const videoResources = [
    {
      title: "Android Development Workshop - Session 1",
      description: "Introduction to Kotlin and Android Studio setup",
      duration: "2h 30m",
      views: "1.2K",
      date: "March 2024",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop"
    },
    {
      title: "Google Cloud Platform Bootcamp",
      description: "Complete GCP overview with hands-on demonstrations",
      duration: "6h 15m",
      views: "856",
      date: "March 2024",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop"
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Introduction to ML concepts and TensorFlow basics",
      duration: "4h 45m",
      views: "2.1K",
      date: "February 2024",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop"
    },
    {
      title: "Firebase Web Development",
      description: "Building full-stack applications with Firebase",
      duration: "3h 20m",
      views: "1.8K",
      date: "February 2024",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop"
    }
  ];

  const tools = [
    {
      title: "Android Development Setup Guide",
      description: "Complete setup guide for Android Studio and development environment",
      type: "Setup Guide",
      size: "2.5 MB",
      downloads: "342"
    },
    {
      title: "GCP Services Cheat Sheet",
      description: "Quick reference for Google Cloud Platform services and CLI commands",
      type: "Cheat Sheet",
      size: "1.8 MB",
      downloads: "567"
    },
    {
      title: "Flutter Widget Library",
      description: "Collection of custom Flutter widgets used in GDGC projects",
      type: "Code Library",
      size: "4.2 MB",
      downloads: "234"
    },
    {
      title: "ML Model Templates",
      description: "Pre-built TensorFlow model templates for common use cases",
      type: "Templates",
      size: "12.5 MB",
      downloads: "189"
    }
  ];

  const getTechnologyIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'android':
      case 'flutter':
        return Smartphone;
      case 'gcp':
      case 'firebase':
        return Database;
      default:
        return Code;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-secondary text-secondary-foreground';
      case 'intermediate':
        return 'bg-accent text-accent-foreground';
      case 'advanced':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resources & <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive collection of study materials, project repositories, 
            video recordings, development tools, and memorable moments from our events.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resourceCategories.map((category, index) => (
            <Card 
              key={category.id} 
              className="shadow-card border-0 hover:shadow-hover transition-smooth animate-bounce-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Materials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Study <span className="text-gradient">Materials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningResources.map((resource, index) => (
              <Card 
                key={resource.title} 
                className="shadow-card border-0 hover:shadow-hover transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      {(() => {
                        const TechIcon = getTechnologyIcon(resource.technology);
                        return <TechIcon className="h-5 w-5 text-primary mr-2" />;
                      })()}
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    <Badge className={getDifficultyColor(resource.difficulty)}>
                      {resource.difficulty}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {resource.technology}
                    </Badge>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Repositories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Project <span className="text-gradient">Repositories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectRepos.map((project, index) => (
              <Card 
                key={project.title} 
                className="shadow-card border-0 hover:shadow-hover transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Github className="h-5 w-5 text-primary mr-2" />
                    <Badge variant="outline" className="text-xs">
                      {project.technology}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex space-x-4">
                      <span>⭐ {project.stars}</span>
                      <span>🍴 {project.forks}</span>
                      <span>👥 {project.contributors} contributors</span>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full">
                    <Github className="h-4 w-4 mr-2" />
                    View Repository
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Workshop <span className="text-gradient">Recordings</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoResources.map((video, index) => (
              <Card 
                key={video.title} 
                className="shadow-card border-0 hover:shadow-hover transition-smooth animate-bounce-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-smooth">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Badge className="bg-black/60 text-white border-0 text-xs">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Downloads */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Tools & <span className="text-gradient">Downloads</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <Card 
                key={tool.title} 
                className="shadow-card border-0 hover:shadow-hover transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Download className="h-5 w-5 text-primary mr-2" />
                    <Badge variant="outline" className="text-xs">
                      {tool.type}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <span>{tool.size} • {tool.downloads} downloads</span>
                    </div>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Event <span className="text-gradient">Gallery</span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-smooth"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="shadow-card border-0 overflow-hidden cursor-pointer hover:shadow-hover transition-smooth animate-slide-up group"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openModal(item)}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <div className="flex items-center justify-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.date}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {item.attendees}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge 
                      variant="secondary" 
                      className="bg-black/60 text-white border-0"
                    >
                      {categories.find(c => c.id === item.category)?.name}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div className="relative max-w-4xl w-full max-h-full">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                  onClick={closeModal}
                >
                  <X className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                <div 
                  className="bg-white rounded-lg overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {selectedImage.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {selectedImage.attendees} attendees
                      </div>
                      <Badge variant="outline">
                        {categories.find(c => c.id === selectedImage.category)?.name}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <Card className="shadow-card border-0 gradient-primary">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Contribute to Our Resources
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Have a project, tutorial, or resource to share? Help us expand our knowledge base 
              and contribute to the GDGC AIKTC community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hover">
                Submit Resource
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Suggest Content
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;