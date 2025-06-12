
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About FxStreampro
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering traders worldwide with professional education and expert guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize financial education and make professional trading knowledge accessible to everyone. 
                We believe that with the right guidance and tools, anyone can master the art of trading and achieve financial independence.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading trading education platform, creating a community of successful traders 
                who not only achieve their financial goals but also contribute to the growth of others in the trading ecosystem.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="text-trading-primary mr-2">✓</span>
                  Expert instructors with proven track records
                </li>
                <li className="flex items-center">
                  <span className="text-trading-primary mr-2">✓</span>
                  Live trading sessions and real-time market analysis
                </li>
                <li className="flex items-center">
                  <span className="text-trading-primary mr-2">✓</span>
                  Comprehensive curriculum from basics to advanced strategies
                </li>
                <li className="flex items-center">
                  <span className="text-trading-primary mr-2">✓</span>
                  24/7 support and vibrant community access
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                alt="Trading Education"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Live Trading Sessions</h4>
                <p className="text-white/90">Learn from experts in real-time market conditions</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-trading-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Successful Students</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-trading-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Summary */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Meet Our Expert Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Head of Trading Education",
                experience: "15+ years in Forex markets",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              },
              {
                name: "Priya Sharma",
                role: "Technical Analysis Expert",
                experience: "12+ years in derivatives trading",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
              },
              {
                name: "Amit Patel",
                role: "Options Trading Specialist",
                experience: "10+ years in institutional trading",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative inline-block mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-trading-primary/20 to-transparent"></div>
                </div>
                <h4 className="text-lg font-semibold text-foreground">{member.name}</h4>
                <p className="text-trading-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
