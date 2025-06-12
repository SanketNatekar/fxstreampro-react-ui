
const YouTubeSection = () => {
  const videos = [
    {
      id: 1,
      title: "Introduction to FxStreampro",
      description: "Learn about our institute and what makes us different",
      embedId: "dQw4w9WgXcQ", // Sample YouTube video ID
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop"
    },
    {
      id: 2,
      title: "Student Success Stories",
      description: "Hear from our successful graduates about their journey",
      embedId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      title: "Live Trading Demo",
      description: "Watch our experts trade live in real market conditions",
      embedId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=225&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Watch & Learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a glimpse of our teaching methodology and student success stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group cursor-pointer">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-8 h-8 text-trading-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    LIVE
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{video.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{video.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-trading-primary font-medium hover:underline">
                    Watch Now
                  </button>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    2.5K views
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://youtube.com/@fxstreampro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to Our Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
