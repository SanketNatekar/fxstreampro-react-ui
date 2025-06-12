
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import BatchCard from '@/components/BatchCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockBatches, getUserEnrolledBatches } from '@/data/mockBatches';

const UserDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [enrolledBatches, setEnrolledBatches] = useState([]);
  const [availableBatches, setAvailableBatches] = useState([]);
  const [activeTab, setActiveTab] = useState('enrolled');

  useEffect(() => {
    if (!user || user.role !== 'user') {
      navigate('/login');
      return;
    }

    // Get enrolled batches
    const enrolledIds = getUserEnrolledBatches(user.id);
    const enrolled = mockBatches.filter(batch => enrolledIds.includes(batch.id));
    const available = mockBatches.filter(batch => !enrolledIds.includes(batch.id));
    
    setEnrolledBatches(enrolled);
    setAvailableBatches(available);
  }, [user, navigate]);

  const handleBrowseCourses = () => {
    setActiveTab('available');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <Card className="gradient-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Welcome back, {user.name}! 👋</CardTitle>
              <CardDescription className="text-white/90">
                Continue your trading journey with FxStreampro
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{enrolledBatches.length}</div>
                  <div className="text-white/80">Enrolled Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{availableBatches.length}</div>
                  <div className="text-white/80">Available Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-white/80">Completion Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="enrolled">My Courses</TabsTrigger>
            <TabsTrigger value="available">Browse Courses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="enrolled" className="space-y-6">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">My Enrolled Courses</h2>
              {enrolledBatches.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledBatches.map((batch) => (
                    <div key={batch.id} className="relative">
                      <BatchCard batch={batch} showEnrollButton={false} />
                      <div className="absolute top-4 left-4">
                        <span className="bg-trading-success text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Enrolled
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="text-xl font-semibold mb-2">No courses enrolled yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Start your trading journey by enrolling in a course
                    </p>
                    <Button 
                      onClick={handleBrowseCourses}
                      className="gradient-primary text-white hover:opacity-90"
                    >
                      Browse Courses
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="available" className="space-y-6">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableBatches.map((batch) => (
                  <BatchCard key={batch.id} batch={batch} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;
