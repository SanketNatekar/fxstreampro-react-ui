
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { mockBatches, Batch } from '@/data/mockBatches';
import { toast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [batches, setBatches] = useState<Batch[]>(mockBatches);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingBatch, setEditingBatch] = useState<Batch | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
    level: 'Beginner' as 'Beginner' | 'Intermediate' | 'Advanced',
    instructor: '',
    image: ''
  });

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }
  }, [user, navigate]);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: '',
      duration: '',
      level: 'Beginner',
      instructor: '',
      image: ''
    });
    setEditingBatch(null);
  };

  const handleCreate = () => {
    setIsCreateModalOpen(true);
    resetForm();
  };

  const handleEdit = (batch: Batch) => {
    setEditingBatch(batch);
    setFormData({
      title: batch.title,
      description: batch.description,
      price: batch.price.toString(),
      duration: batch.duration,
      level: batch.level,
      instructor: batch.instructor,
      image: batch.image
    });
    setIsCreateModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.price || !formData.duration || !formData.instructor) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const batchData = {
      ...formData,
      price: parseFloat(formData.price),
      id: editingBatch?.id || Math.random().toString(36),
      studentsEnrolled: editingBatch?.studentsEnrolled || 0,
      image: formData.image || 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
      features: editingBatch?.features || [
        'Live trading sessions',
        'Market analysis tools',
        'Risk management strategies',
        'Community access',
        'Certificate of completion'
      ],
      syllabus: editingBatch?.syllabus || [
        'Introduction to Trading',
        'Market Analysis',
        'Risk Management',
        'Trading Strategies'
      ]
    };

    if (editingBatch) {
      setBatches(prev => prev.map(batch => 
        batch.id === editingBatch.id ? batchData as Batch : batch
      ));
      toast({
        title: "Success",
        description: "Course updated successfully!",
      });
    } else {
      setBatches(prev => [...prev, batchData as Batch]);
      toast({
        title: "Success",
        description: "Course created successfully!",
      });
    }

    setIsCreateModalOpen(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    setBatches(prev => prev.filter(batch => batch.id !== id));
    toast({
      title: "Success",
      description: "Course deleted successfully!",
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
              <CardTitle className="text-2xl">Admin Dashboard 👨‍💼</CardTitle>
              <CardDescription className="text-white/90">
                Manage courses and monitor student enrollments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{batches.length}</div>
                  <div className="text-white/80">Total Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{batches.reduce((sum, batch) => sum + batch.studentsEnrolled, 0)}</div>
                  <div className="text-white/80">Total Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">${batches.reduce((sum, batch) => sum + (batch.price * batch.studentsEnrolled), 0).toLocaleString()}</div>
                  <div className="text-white/80">Total Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{Math.round(batches.reduce((sum, batch) => sum + batch.studentsEnrolled, 0) / batches.length)}</div>
                  <div className="text-white/80">Avg. Enrollment</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="courses">Manage Courses</TabsTrigger>
            <TabsTrigger value="enrollments">View Enrollments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Course Management</h2>
              <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                <DialogTrigger asChild>
                  <Button onClick={handleCreate} className="gradient-primary text-white hover:opacity-90">
                    Create New Course
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingBatch ? 'Edit Course' : 'Create New Course'}</DialogTitle>
                    <DialogDescription>
                      {editingBatch ? 'Update course information' : 'Fill in the details to create a new course'}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Course Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Enter course title"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instructor">Instructor *</Label>
                        <Input
                          id="instructor"
                          value={formData.instructor}
                          onChange={(e) => setFormData(prev => ({ ...prev, instructor: e.target.value }))}
                          placeholder="Instructor name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Course description"
                        rows={3}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price">Price ($) *</Label>
                        <Input
                          id="price"
                          type="number"
                          value={formData.price}
                          onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                          placeholder="299"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration *</Label>
                        <Input
                          id="duration"
                          value={formData.duration}
                          onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                          placeholder="8 weeks"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="level">Level *</Label>
                        <Select 
                          value={formData.level} 
                          onValueChange={(value: 'Beginner' | 'Intermediate' | 'Advanced') => 
                            setFormData(prev => ({ ...prev, level: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="image">Image URL</Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button type="submit" className="gradient-primary text-white hover:opacity-90">
                        {editingBatch ? 'Update Course' : 'Create Course'}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setIsCreateModalOpen(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            
            <Card className="animate-fade-in">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {batches.map((batch) => (
                      <TableRow key={batch.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img 
                              src={batch.image} 
                              alt={batch.title}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <div className="font-semibold">{batch.title}</div>
                              <div className="text-sm text-muted-foreground">{batch.duration}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{batch.instructor}</TableCell>
                        <TableCell>
                          <Badge className={getLevelColor(batch.level)}>
                            {batch.level}
                          </Badge>
                        </TableCell>
                        <TableCell>${batch.price}</TableCell>
                        <TableCell>{batch.studentsEnrolled}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(batch)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(batch.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="enrollments" className="space-y-6">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Student Enrollments</h2>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Course</TableHead>
                        <TableHead>Students Enrolled</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead>Completion Rate</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {batches.map((batch) => (
                        <TableRow key={batch.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <img 
                                src={batch.image} 
                                alt={batch.title}
                                className="w-10 h-10 rounded-lg object-cover"
                              />
                              <span className="font-semibold">{batch.title}</span>
                            </div>
                          </TableCell>
                          <TableCell>{batch.studentsEnrolled}</TableCell>
                          <TableCell>${(batch.price * batch.studentsEnrolled).toLocaleString()}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-trading-success h-2 rounded-full" 
                                  style={{ width: '85%' }}
                                ></div>
                              </div>
                              <span className="text-sm">85%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-trading-success text-white">
                              Active
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
