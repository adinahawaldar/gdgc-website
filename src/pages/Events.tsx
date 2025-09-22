import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Android Development Workshop",
      date: "2024-03-15",
      time: "2:00 PM - 5:00 PM",
      location: "AIKTC Auditorium",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      description: "Learn Android app development using Kotlin and Jetpack Compose. Build your first app!",
      attendees: 85,
      maxAttendees: 100,
      tags: ["Android", "Kotlin", "Mobile Development"],
      status: "upcoming",
    },
    {
      id: 2,
      title: "Google Cloud Platform Bootcamp",
      date: "2024-03-22",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab 1",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      description: "Hands-on workshop covering GCP services, deployment, and cloud architecture best practices.",
      attendees: 67,
      maxAttendees: 75,
      tags: ["GCP", "Cloud", "DevOps"],
      status: "upcoming",
    },
    {
      id: 3,
      title: "Machine Learning with TensorFlow",
      date: "2024-03-28",
      time: "1:00 PM - 6:00 PM",
      location: "AI/ML Lab",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      description: "Introduction to machine learning concepts and practical implementation using TensorFlow.",
      attendees: 42,
      maxAttendees: 60,
      tags: ["ML", "TensorFlow", "AI"],
      status: "upcoming",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Web Development with Firebase",
      date: "2024-02-18",
      time: "2:00 PM - 5:00 PM",
      location: "AIKTC Auditorium",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      description: "Built full-stack web applications using Firebase services and modern web technologies.",
      attendees: 120,
      maxAttendees: 120,
      tags: ["Firebase", "Web Development", "JavaScript"],
      status: "completed",
      resources: "#",
    },
    {
      id: 5,
      title: "Flutter Cross-Platform Development",
      date: "2024-02-10",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab 2",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      description: "Created beautiful cross-platform mobile apps using Flutter framework.",
      attendees: 95,
      maxAttendees: 100,
      tags: ["Flutter", "Dart", "Mobile"],
      status: "completed",
      resources: "#",
    },
    {
      id: 6,
      title: "Google I/O Extended 2024",
      date: "2024-01-25",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      description: "Full day event covering latest Google technologies and announcements from Google I/O.",
      attendees: 200,
      maxAttendees: 200,
      tags: ["Google I/O", "Tech Conference", "Community"],
      status: "completed",
      resources: "#",
    },
  ];

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const Countdown = ({ date }: { date: string }) => {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const eventDate = new Date(date);
        const diff = eventDate.getTime() - now.getTime();
        if (diff <= 0) {
          setTimeLeft("Event Started");
          clearInterval(interval);
        } else {
          const d = Math.floor(diff / (1000 * 60 * 60 * 24));
          const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const m = Math.floor((diff / (1000 * 60)) % 60);
          const s = Math.floor((diff / 1000) % 60);
          setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [date]);

    return <div className="text-sm font-semibold text-gradient">{timeLeft}</div>;
  };

  const EventCard = ({ event }: { event: any }) => (
    <Card className="shadow-lg border-0 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out group">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge
            variant={event.status === "upcoming" ? "default" : "secondary"}
            className={
              event.status === "upcoming"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "bg-gray-300 text-gray-700"
            }
          >
            {event.status === "upcoming" ? "Upcoming" : "Completed"}
          </Badge>
        </div>
        {event.status === "upcoming" && (
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-xs">
            <Countdown date={event.date} />
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
        <p className="text-muted-foreground mb-4">{event.description}</p>

        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            {event.time}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            {event.location}
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            {event.attendees}
            {event.maxAttendees && `/${event.maxAttendees}`} attendees
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag: string) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:text-white transition-all"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {event.status === "upcoming" ? (
            <Button className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-500 hover:to-purple-500 transition-all">
              Register Now
            </Button>
          ) : (
            event.resources && (
              <Button
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-500 transition-all"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Resources
              </Button>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Events &{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
              Workshops
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our exciting events, workshops, and hackathons to learn new technologies, network with
            peers, and build amazing projects.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Upcoming{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
              Events
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Past{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
              Events
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={event.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <Card className="shadow-lg border-0 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4 animate-bounce">
                Don't Miss Our Next Event!
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Stay updated with our latest events, workshops, and announcements. Follow us on social
                media or join our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-500 hover:bg-white/90 transition-all">
                  Join Community
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 transition-all"
                >
                  Follow Updates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;
