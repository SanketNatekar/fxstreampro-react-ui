
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Trading Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of successful traders who started their journey with FxStreampro. 
            Your financial independence is just one click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-white text-trading-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl"
              >
                Start Your Journey
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-trading-primary transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full"
              >
                I'm Already a Student
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center">
              <span className="text-2xl mr-2">✓</span>
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✓</span>
              <span>Lifetime Community Access</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✓</span>
              <span>24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
