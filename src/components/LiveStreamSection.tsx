import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Play } from "lucide-react";

// Mock data - In real implementation, this would come from YouTube API
const mockLiveStreams = [
  {
    id: "live-now",
    title: "Sunday Morning Service - Live Now!",
    description: "Join us for worship, prayer, and an inspiring message from Pastor John.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    isLive: true,
    viewers: 145,
    scheduledTime: "Now",
  },
  {
    id: "upcoming-1",
    title: "Evening Prayer Service",
    description: "A peaceful time of prayer and reflection to end the week.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    isLive: false,
    viewers: 0,
    scheduledTime: "Sunday 6:00 PM",
  },
  {
    id: "upcoming-2",
    title: "Youth Bible Study",
    description: "Interactive Bible study designed for young adults and teenagers.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    isLive: false,
    viewers: 0,
    scheduledTime: "Wednesday 7:00 PM",
  },
];

const LiveStreamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [streams, setStreams] = useState(mockLiveStreams);

  // In real implementation, this would fetch from YouTube API
  useEffect(() => {
    // Simulated API call
    const fetchLiveStreams = async () => {
      // This would use the YouTube API key from environment variables
      // const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=YOUR_CHANNEL_ID&type=video&eventType=live&key=${process.env.YOUTUBE_API_KEY}`);
      // const data = await response.json();
      // setStreams(data.items);
    };

    fetchLiveStreams();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  };

  return (
    <section id="live-stream" className="py-20 bg-church-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-church-navy mb-6">
              Live Worship & Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us online for live worship services, prayer meetings, and Bible studies. 
              Experience the presence of God from wherever you are.
            </p>
          </motion.div>

          {/* Service Schedule */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="church-card">
              <CardHeader>
                <CardTitle className="text-2xl text-church-navy text-center">
                  Weekly Service Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-divine rounded-lg">
                    <Calendar className="w-8 h-8 text-church-navy mx-auto mb-2" />
                    <h3 className="font-semibold text-church-navy">Sunday Morning</h3>
                    <p className="text-muted-foreground">9:00 AM & 11:30 AM</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-divine rounded-lg">
                    <Clock className="w-8 h-8 text-church-navy mx-auto mb-2" />
                    <h3 className="font-semibold text-church-navy">Sunday Evening</h3>
                    <p className="text-muted-foreground">6:00 PM</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-divine rounded-lg">
                    <Users className="w-8 h-8 text-church-navy mx-auto mb-2" />
                    <h3 className="font-semibold text-church-navy">Wednesday Bible Study</h3>
                    <p className="text-muted-foreground">7:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Live Streams Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Live Stream */}
              <div className="lg:col-span-2">
                <Card className="church-card overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-church-gold mx-auto mb-4" />
                        <p className="text-muted-foreground">Live Stream Player</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          YouTube player will be embedded here
                        </p>
                      </div>
                    </div>
                    {streams[0]?.isLive && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        LIVE
                      </div>
                    )}
                    {streams[0]?.isLive && (
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {streams[0].viewers} watching
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-church-navy mb-2">
                      {streams[0]?.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {streams[0]?.description}
                    </p>
                    <Button className="church-button w-full">
                      <Play className="w-5 h-5 mr-2" />
                      {streams[0]?.isLive ? "Join Live Stream" : "Watch Later"}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Streams */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-church-navy">Upcoming Services</h3>
                {streams.slice(1).map((stream) => (
                  <Card key={stream.id} className="church-card">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Clock className="w-5 h-5 text-church-gold" />
                        <span className="text-sm font-medium text-church-navy">
                          {stream.scheduledTime}
                        </span>
                      </div>
                      <h4 className="font-semibold text-church-navy mb-2">
                        {stream.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {stream.description}
                      </p>
                      <Button variant="outline" size="sm" className="church-button-outline w-full">
                        Set Reminder
                      </Button>
                    </CardContent>
                  </Card>
                ))}

                {/* Quick Access */}
                <Card className="church-card bg-gradient-hero text-white">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold mb-2">Need Prayer?</h4>
                    <p className="text-sm opacity-90 mb-4">
                      Submit your prayer request and our team will pray for you.
                    </p>
                    <Button variant="outline" className="church-button-outline border-white text-white hover:bg-white hover:text-church-navy">
                      Prayer Request
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveStreamSection;