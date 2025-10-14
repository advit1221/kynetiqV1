import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, MessageCircle, Share2, MapPin } from "lucide-react";

const Feed = () => {
  const posts = [
    {
      id: 1,
      author: "Aarav Sharma",
      avatar: "AS",
      time: "2 hours ago",
      content: "Morning run through Dwarka sector 12 park. 8km of pure flow. 🌅",
      stats: { likes: 47, comments: 12 },
      location: "Dwarka Sector 12",
    },
    {
      id: 2,
      author: "Meera Patel",
      avatar: "MP",
      time: "5 hours ago",
      content: "First trail run with the Kynetiq crew. Energy was unmatched! 💜",
      stats: { likes: 89, comments: 23 },
      location: "Aravalli Hills",
    },
    {
      id: 3,
      author: "Rohan Verma",
      avatar: "RV",
      time: "1 day ago",
      content: "PR day! Completed my fastest 10K. This community pushes me to be better every day.",
      stats: { likes: 124, comments: 31 },
      location: "Central Park, CP",
    },
  ];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-12 gradient-text"
          >
            The Feed.
          </motion.h1>
          
          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-3xl p-8 glow-hover transition-smooth"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C084FC] to-[#E879F9] flex items-center justify-center text-white font-semibold border-2 border-white/20">
                    {post.avatar}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold">{post.author}</h3>
                      <span className="text-white/50 text-sm">{post.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/60 text-sm">
                      <MapPin className="w-3 h-3" />
                      {post.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/90 text-lg mb-6 font-light leading-relaxed">
                  {post.content}
                </p>
                
                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <button className="flex items-center gap-2 text-white/70 hover:text-[#FF8C5C] transition-colors group">
                    <Heart className="w-5 h-5 group-hover:fill-[#FF8C5C]" />
                    <span>{post.stats.likes}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.stats.comments}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors ml-auto">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feed;
