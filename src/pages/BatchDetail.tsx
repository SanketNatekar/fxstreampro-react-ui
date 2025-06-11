
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { mockBatches, getUserEnrolledBatches, Batch } from '@/data/mockBatches';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

const BatchDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [batch, setBatch] = useState<Batch | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const foundBatch = mockBatches.find(b => b.id === id);
    if (!foundBatch) {
      navigate('/dashboard');
      return;
    }

    setBatch(foundBatch);
    
    const enrolledIds = getUserEnrolledBatches(user.id);
    setIsEnrolled(enrolledIds.includes(foundBatch.id));
  }, [id, user, navigate]);

  const handleEnroll = async () => {
    if (!batch || !user) return;

    setIsLoading(true);
    
    // Simulate enrollment API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsEnrolled(true);
    setIsLoading(false);
    
    toast({
      title: "Enrollment Successful! 🎉",
      description: `You've successfully enrolled in ${batch.title}`,
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!batch) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold">Course not found</h2>
            <p className="text-muted-foreground">The course you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge className={getLevelColor(batch.level)}>
                  {batch.level}
                </Badge>
                {isEnrolled && (
                  <Badge className="bg-trading-success text-white">
                    Enrolled
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {batch.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {batch.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xl">👨‍🏫</span>
                  <span>{batch.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">⏱️</span>
                  <span>{batch.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">👥</span>
                  <span>{batch.studentsEnrolled} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  <span className="text-2xl font-bold text-trading-primary">${batch.price}</span>
                </div>
              </div>
              
              {!isEnrolled ? (
                <Button 
                  onClick={handleEnroll}
                  disabled={isLoading}
                  size="lg"
                  className="w-full md:w-auto gradient-primary text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg"
                >
                  {isLoading ? 'Enrolling...' : `Enroll Now - $${batch.price}`}
                </Button>
              ) : (
                <div className="flex gap-4">
                  <Button 
                    size="lg"
                    className="gradient-primary text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg"
                  >
                    Continue Learning
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-8 py-6 text-lg"
                  >
                    Download Materials
                  </Button>
                </div>
              )}
            </div>
            
            <div className="relative">
              <img 
                src={batch.image} 
                alt={batch.title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Course Features</CardTitle>
                <CardDescription>What you'll get with this course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {batch.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-trading-success text-xl">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="syllabus" className="space-y-6">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Course Syllabus</CardTitle>
                <CardDescription>Detailed breakdown of what you'll learn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {batch.syllabus.map((topic, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                      <div className="bg-trading-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{topic}</h4>
                        <p className="text-sm text-muted-foreground">
                          Week {index + 1} content
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="instructor" className="space-y-6">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>About Your Instructor</CardTitle>
                <CardDescription>Meet {batch.instructor}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-trading-primary to-trading-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {batch.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{batch.instructor}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {batch.instructor} is a seasoned trading professional with over 10 years of experience in the forex markets. 
                      He has trained hundreds of successful traders and specializes in practical, results-driven education. 
                      His expertise spans multiple trading strategies and risk management techniques.
                    </p>
                    <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                      <span>📈 10+ Years Experience</span>
                      <span>🏆 500+ Students Trained</span>
                      <span>⭐ 4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BatchDetail;
