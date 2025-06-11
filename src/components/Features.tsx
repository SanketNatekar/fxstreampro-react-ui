
const Features = () => {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from seasoned traders with years of market experience and proven track records.",
      icon: "👨‍🏫",
      delay: "0s"
    },
    {
      title: "Live Trading Sessions",
      description: "Join real-time trading sessions and watch experts make decisions in live markets.",
      icon: "📈",
      delay: "0.2s"
    },
    {
      title: "Comprehensive Curriculum",
      description: "From basics to advanced strategies, our courses cover everything you need to succeed.",
      icon: "📚",
      delay: "0.4s"
    },
    {
      title: "Risk Management",
      description: "Master the art of protecting your capital with proven risk management techniques.",
      icon: "🛡️",
      delay: "0.6s"
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock student support system.",
      icon: "💬",
      delay: "0.8s"
    },
    {
      title: "Community Access",
      description: "Connect with fellow traders, share insights, and grow together in our exclusive community.",
      icon: "👥",
      delay: "1s"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose FxStreampro?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make us the premier choice for forex education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: feature.delay }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
