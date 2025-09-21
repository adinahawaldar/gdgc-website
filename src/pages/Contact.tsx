import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "gdgc@aiktc.ac.in",
      description: "Get in touch for general inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 123 456 7890",
      description: "Reach us during office hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "AIKTC Campus, New Panvel",
      description: "Find us at the Computer Department"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      description: "Check out our projects and contribute"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      description: "Connect with us professionally"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      description: "Follow for updates and announcements"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const faqs = [
    {
      question: "How can I join GDGC AIKTC?",
      answer: "You can join by filling out our membership form or attending one of our events. We welcome all AIKTC students interested in Google technologies."
    },
    {
      question: "Are the workshops free for students?",
      answer: "Yes! All our workshops and events are completely free for AIKTC students. We believe in making technology education accessible to everyone."
    },
    {
      question: "Do I need prior coding experience to participate?",
      answer: "Not at all! We have events for all skill levels, from beginners to advanced developers. Our workshops are designed to help you learn step by step."
    },
    {
      question: "How often do you organize events?",
      answer: "We organize events regularly - typically 2-3 workshops per month, plus special events like hackathons and tech talks throughout the academic year."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our events, want to collaborate, or interested in joining GDGC AIKTC? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title} 
                className="shadow-card border-0 hover:shadow-hover transition-smooth"
              >
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.details}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Office Hours */}
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10 mr-4">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">Office Hours</h3>
                </div>
                <div className="space-y-2 ml-14">
                  {officeHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="text-foreground font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-4">Follow Us</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="p-2 rounded-md bg-accent/10 mr-3 group-hover:bg-accent/20 transition-smooth">
                        <social.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card 
                key={faq.question} 
                className="shadow-card border-0 animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location Map Placeholder */}
        <Card className="shadow-card border-0 animate-fade-in overflow-hidden">
          <div className="relative">
            <div 
              className="w-full h-64 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=400&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 text-center text-white">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">AIKTC Campus</h3>
                <p className="text-white/90">
                  Al-Ameen Institute of Information Technology<br />
                  New Panvel, Navi Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Community CTA */}
        <div className="mt-20">
          <Card className="shadow-card border-0 gradient-primary">
            <CardContent className="p-12 text-center">
              <Users className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Growing Community
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Connect with fellow developers, attend amazing events, and be part of the 
                most active tech community at AIKTC. Your journey starts here!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hover">
                  Join GDGC AIKTC
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;