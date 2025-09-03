import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Calendar,
  Users,
  Trophy,
  Target,
  Sparkles,
  Rocket,
  Star,
  ChevronRight,
  Download,
  Eye,
  Clock,
  Building,
  Code,
  Palette,
  TrendingUp,
  Heart,
  Globe
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = React.useState('overview');

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Hero Section */}
      <header className="animated-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Profile Image & Info */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto lg:mx-0 mb-6 flex items-center justify-center border-4 border-white/20 shadow-2xl">
                <User size={96} className="text-white icon-bounce" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-yellow-300" />
                  <span className="text-yellow-300 uppercase tracking-wider text-sm">+8801601802857</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70">
                  <MapPin className="h-4 w-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70">
                  <Mail className="h-4 w-4" />
                  <span>misbahsakin1@gmail.com</span>
                </div>
              </div>
            </div>
            
            {/* Main Info */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Md Misbahul Islam
              </h1>
              <h2 className="mb-6 text-xl md:text-2xl text-white/90">
                Product & Project Manager | Quality Assurance Professional
              </h2>
              <p className="mb-8 text-lg text-white/80 leading-relaxed max-w-2xl">
                Associate Product Manager with experience in fintech and consumer-facing applications, bridging product, QA, and engineering.
                Skilled in Agile product delivery, data analysis, and stakeholder collaboration. Proven ability to reduce delivery times by 30%,
                improve accuracy by 15%, and deliver measurable product impact.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl text-white mb-1">1+</div>
                  <div className="text-white/70 text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl text-white mb-1">15+</div>
                  <div className="text-white/70 text-sm">Projects Completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl text-white mb-1">15+</div>
                  <div className="text-white/70 text-sm">Team Members Led</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl text-white mb-1">40%</div>
                  <div className="text-white/70 text-sm">User Growth</div>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                <Button size="lg" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white shadow-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
                <Button size="lg" variant="outline" className="bg-white/90 text-gray-900 hover:bg-white shadow-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Navigation</h3>
                  <nav className="space-y-2">
                    {[
                      { id: 'overview', label: 'Overview', icon: Eye, color: 'blue' },
                      { id: 'experience', label: 'Experience', icon: Briefcase, color: 'purple' },
                      { id: 'skills', label: 'Skills', icon: Zap, color: 'green' },
                      { id: 'education', label: 'Education', icon: GraduationCap, color: 'indigo' },
                      { id: 'training', label: 'Training', icon: BookOpen, color: 'yellow' },
                      { id: 'achievements', label: 'Achievements', icon: Trophy, color: 'red' },
                      { id: 'activities', label: 'Extracurricular Activities', icon: Users, color: 'teal' },
                
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                          activeSection === item.id
                            ? `bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 text-white shadow-lg`
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                        {activeSection === item.id && <ChevronRight className="h-4 w-4 ml-auto" />}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
              
              {/* Quick Contact Card */}
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-pink-500 mx-auto mb-3" />
                  <h4 className="text-purple-800 mb-2">Let's Work Together</h4>
                  <p className="text-purple-600 text-sm mb-4">Ready for your next project?</p>
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {activeSection === 'overview' && (
              <div className="space-y-8">
                {/* Overview Dashboard */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-blue-500 p-3 rounded-lg">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <TrendingUp className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-blue-800 mb-2">Product Success</h3>
                      <p className="text-blue-600 text-sm mb-3">Successfully launched 10+ Features.</p>
                      <div className="bg-blue-200 rounded-full h-2 mb-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                      <span className="text-blue-700 text-xs">60% DAM and MAM Increased.</span>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-green-500 p-3 rounded-lg">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <Zap className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-green-800 mb-2">Quality Excellence</h3>
                      <p className="text-green-600 text-sm mb-3">Reduced defect rates by 70% and Smooth User Experience</p>
                      <div className="bg-green-200 rounded-full h-2 mb-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                      <span className="text-green-700 text-xs">Hundreds of bugs resolved, Reduced third party dependencies.</span>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-purple-500 p-3 rounded-lg">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <Heart className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-purple-800 mb-2">Team Leadership</h3>
                      <p className="text-purple-600 text-sm mb-3">Successfully managed 7+ cross-functional team members.</p>
                      <div className="bg-purple-200 rounded-full h-2 mb-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <span className="text-purple-700 text-xs">Mobile App Developer, Software Engineer and UI/UX Engineer.</span>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-yellow-500 p-3 rounded-lg">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <Rocket className="h-6 w-6 text-yellow-600" />
                      </div>
                      <h3 className="text-yellow-800 mb-2">Process Optimization</h3>
                      <p className="text-yellow-600 text-sm mb-3">Optimized Sprint Deliveries, Sprint wise planning and execution.</p>
                      <div className="bg-yellow-200 rounded-full h-2 mb-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <span className="text-yellow-700 text-xs">75% Time Reduction</span>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Skills Preview */}
                <Card className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-indigo-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-800">
                      <Sparkles className="h-6 w-6 text-indigo-600" />
                      Core Competencies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg border border-indigo-100">
                        <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <h4 className="text-blue-800 mb-1">Product Management</h4>
                        <p className="text-blue-600 text-sm">Strategy & Execution</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-purple-100">
                        <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                        <h4 className="text-purple-800 mb-1">Project Management</h4>
                        <p className="text-purple-600 text-sm">Leadership & Delivery</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-green-100">
                        <Award className="h-8 w-8 text-green-500 mx-auto mb-2" />
                        <h4 className="text-green-800 mb-1">Quality Assurance</h4>
                        <p className="text-green-600 text-sm">Testing & Fixing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeSection === 'experience' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professional Experience</h2>
                    <p className="text-gray-600">My career journey and key accomplishments</p>
                  </div>
                </div>
                
                {/* Timeline Layout */}
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
                  
                  <div className="space-y-8">
                    {[
                      {
                        title: "Associate Product Manager",
                        company: "Sheba Platform Limited",
                        period: "March 2025 - Present",
                        color: "blue",
                        icon: Target,
                        description: "Led cross-functional teams to deliver product features, increasing user engagement by 40%",
                        achievements: [
                          "Managed project timelines, reducing delivery times by 30% using Agile methodologies",
                          "Spearheaded the adoption of cutting-edge engineering software, improving project accuracy by 15%",
                          "Collaborated with cross-functional teams, fintech products and enhancing project success rates by 10%."
                        ],
                        skills: ["Product Strategy", "Agile", "User Research", "Roadmapping", "Product Planning"]
                      },
                      {
                        title: "Software Quality Assurance Engineer",
                        company: "Sheba Platform Limited",
                        period: "2021 - 2022",
                        color: "green",
                        icon: Award,
                        description: "Designed and executed comprehensive test plans for mobile applications",
                        achievements: [
                          "Conducted testing on consumer-facing applications ensuring functionality and performance",
                          "Work closely with product managers and developers to ensure timely delivery and optimal performance",
                          "Use data insights and issue tracking tools to identify and resolve root causes of system bugs"
                        ],
                        skills: ["Manual Automation", "QAT and UAT", "API Testing", "Bug Tracking"]
                      },
                      {
                        title: "Trainee QA",
                        company: "RiseUp Labs",
                        period: "May 2023",
                        color: "purple",
                        icon: BookOpen,
                        description: "Completed intensive 6-month QA training program",
                        achievements: [
                          "Gained hands-on experience in Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC) processes, including requirement analysis, test planning, test execution, and defect management",
                          "Worked on real-world projects under senior QA guidance",
                          "Developed expertise in various testing tools and frameworks"
                        ],
                        skills: ["Manual Testing", "Test Case Design", "JIRA", "SQL"]
                      },
                      {
                        title: "Motion Graphics and Video Editor",
                        company: "aTech (Remote)",
                        period: "2022 - 2023",
                        color: "pink",
                        icon: Palette,
                        description: "Edited promotional videos and documentaries for various clients",
                        achievements: [
                          "Collaborated with creative teams to produce engaging content",
                          "Managed multiple projects simultaneously while meeting tight deadlines",
                          "Created motion graphics and visual effects for enhanced storytelling"
                        ],
                        skills: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"]
                      }
                    ].map((job, index) => (
                      <div key={index} className="relative flex items-start gap-6">
                        <div className={`bg-gradient-to-br from-${job.color}-500 to-${job.color}-600 p-3 rounded-full shadow-lg z-10 border-4 border-white`}>
                          <job.icon className="h-6 w-6 text-white" />
                        </div>
                        
                        <Card className={`flex-1 card-hover border-l-4 border-l-${job.color}-500 bg-gradient-to-r from-${job.color}-50/50 to-white`}>
                          <CardHeader>
                            <div className="flex justify-between items-start flex-wrap gap-4">
                              <div>
                                <CardTitle className={`text-${job.color}-700`}>{job.title}</CardTitle>
                                <p className="text-muted-foreground flex items-center gap-2">
                                  <Building className="h-4 w-4" />
                                  {job.company}
                                </p>
                              </div>
                              <div className={`text-sm text-muted-foreground flex items-center gap-1 bg-${job.color}-100 px-3 py-1 rounded-full`}>
                                <Calendar className={`h-4 w-4 text-${job.color}-600`} />
                                {job.period}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4">{job.description}</p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                              {job.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill, i) => (
                                <Badge key={i} className={`skill-badge-${job.color} border`}>{skill}</Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === 'skills' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Skills & Expertise</h2>
                    <p className="text-gray-600">Technical and professional competencies</p>
                  </div>
                </div>
                
                {/* Skills Grid with Progress Bars */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="card-hover bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Target className="h-5 w-5 text-blue-600" />
                        Product Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { skill: "Product Strategy", level: 95 },
                          { skill: "Roadmapping", level: 90 },
                          { skill: "User Research", level: 85 },
                          { skill: "Market Analysis", level: 80 },
                          { skill: "Agile/Scrum", level: 92 }
                        ].map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-blue-700">{item.skill}</span>
                              <span className="text-sm text-blue-600">{item.level}%</span>
                            </div>
                            <div className="bg-blue-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                                style={{width: `${item.level}%`}}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-700">
                        <Award className="h-5 w-5 text-green-600" />
                        Quality Assurance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { skill: "Manual Testing", level: 98 },
                          { skill: "Documentation- QAT - UAT", level: 88 },
                          { skill: "API Testing", level: 85 },
                          { skill: "Selenium", level: 30 },
                          { skill: "Performance Testing", level: 80 }
                        ].map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-green-700">{item.skill}</span>
                              <span className="text-sm text-green-600">{item.level}%</span>
                            </div>
                            <div className="bg-green-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000"
                                style={{width: `${item.level}%`}}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-purple-700">
                        <Users className="h-5 w-5 text-purple-600" />
                        Project Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { skill: "Project Planning", level: 92 },
                          { skill: "Risk Management", level: 87 },
                          { skill: "Team Leadership", level: 95 },
                          { skill: "Resource Allocation", level: 85 },
                          { skill: "Budget Management", level: 82 }
                        ].map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-purple-700">{item.skill}</span>
                              <span className="text-sm text-purple-600">{item.level}%</span>
                            </div>
                            <div className="bg-purple-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                                style={{width: `${item.level}%`}}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-orange-700">
                        <Palette className="h-5 w-5 text-orange-600" />
                        Creative & Technical
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { skill: "JIRA", level: 95 },
                          { skill: "Figma", level: 80 },
                          { skill: "MIRO", level: 76 },
                          { skill: "Slack", level: 80 },
                          { skill: "PowerBI and Superset", level: 70 },
                        ].map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-orange-700">{item.skill}</span>
                              <span className="text-sm text-orange-600">{item.level}%</span>
                            </div>
                            <div className="bg-yellow-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                                style={{width: `${item.level}%`}}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Technical Proficiencies */}
                <Card className="bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 border-indigo-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-800">
                      <Code className="h-6 w-6 text-indigo-600" />
                      Technical Proficiencies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-indigo-700 mb-3">Tools & Platforms</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="skill-badge-blue border">JIRA</Badge>
                          <Badge className="skill-badge-green border">MIRO</Badge>
                          <Badge className="skill-badge-purple border">Figma</Badge>
                          <Badge className="skill-badge-pink border">Slack</Badge>
                          <Badge className="skill-badge-yellow border">Trello</Badge>
                          <Badge className="skill-badge-teal border">GitHub</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-indigo-700 mb-3">Testing Frameworks</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="skill-badge-green border">Selenium</Badge>
                          <Badge className="skill-badge-red border">Postman</Badge>
                          <Badge className="skill-badge-yellow border">Manual Testing</Badge>
                          <Badge className="skill-badge-teal border">JMeter</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-indigo-700 mb-3">Creative Software</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="skill-badge-pink border">Premiere Pro</Badge>
                          <Badge className="skill-badge-purple border">After Effects</Badge>
                          <Badge className="skill-badge-blue border">Photoshop</Badge>
                          <Badge className="skill-badge-green border">Illustrator</Badge>
                          <Badge className="skill-badge-yellow border">DaVinci</Badge>
                          <Badge className="skill-badge-red border">Final Cut</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeSection === 'activities' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Extracurricular Activities</h2>
                    <p className="text-gray-600">Club involvement and professional development</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="card-hover bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Globe className="h-5 w-5 text-blue-600" />
                        Professional Communities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100">
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-500 p-2 rounded-lg">
                              <Target className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-blue-800 mb-1">Graphics Design & Video Editor</h4>
                              <p className="text-blue-600 text-sm mb-2">2016- 2022</p>
                              <div className="text-blue-600 text-sm">
                                <ul className="list-disc list-inside space-y-1">
                                  <li>HTM Records, Bangladesh • 2019-2022</li> 
                                  <li>Graphics Design Director, CUET Model United Nations Club • 2021</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-blue-100">
                          <div className="flex items-start gap-3">
                            <div className="bg-pink-500 p-2 rounded-lg">
                              <Target className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-pink-800 mb-1">Event Management & Coordination</h4>
                              <p className="text-pink-600 text-sm mb-2">2016- 2022</p>
                              <div className="text-pink-600 text-sm">
                                <ul className="list-disc list-inside space-y-1">
                                  <li>Chief Coordinator • Pitha Utshab 2022, Bangladesh Navy</li> 
                                  <li>Coordinator, Alpona Utshab 1426, Rangpur, Bangladesh • 2019</li>
                                  <li>Project Coordinator, Project Notun Jama, Spriha (Non-Government Organization), Rangpur, Bangladesh • 2017- 2019</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-blue-100">
                          <div className="flex items-start gap-3">
                            <div className="bg-green-500 p-2 rounded-lg">
                              <Award className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-green-800 mb-1">Campus Leadership & Volunteer Roles</h4>
                              <p className="text-green-600 text-sm mb-2">Volunteer Organizer • 2021 - Present</p>
                              <p className="text-green-600 text-sm">
                                  <li>Campus Ambassador, Applink (Banglalink)</li> 
                                  <li>IT Secretary, HULT Prize Competition</li>
                                  <li>Design Coordinator, IEEE Face the Case 2.0</li>
                                <li>Organizing Secretary, Joyoddhoney, CUET</li>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                 
                </div>
                
                {/* Volunteer Impact */}
                <Card className="bg-gradient-to-r from-green-50 via-teal-50 to-blue-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Heart className="h-6 w-6 text-green-600" />
                      Volunteer Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-white rounded-lg border border-green-100">
                        <div className="text-3xl text-green-600 mb-2">500+</div>
                        <p className="text-green-700">People Mentored</p>
                      </div>
                       <div className="text-center p-4 bg-white rounded-lg border border-blue-100">
                        <div className="text-3xl text-blue-600 mb-2">15+</div>
                        <p className="text-blue-700">Voluntary Projects</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-pink-50 via-teal-50 to-blue-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-800">
                      <Heart className="h-6 w-6 text-blue-600" />
                      Achievements & Awards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-white rounded-lg border border-green-100">
                        <div className="text-3xl text-green-600 mb-2">UNFPA Award</div>
                        <p className="text-black-700">UNFPA ”Save the children” Award</p>
                      </div>
                       <div className="text-center p-4 bg-white rounded-lg border border-blue-100">
                        <div className="text-3xl text-blue-600 mb-2">Best Feature Film</div>
                        <p className="text-red-700">ANIMATIBA 2021 ( Festival Internacional de Anima ̧c ̃ao de Curitiba,Brazil) 2021</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-pink-100">
                        <div className="text-3xl text-pink-600 mb-2">Official Selection</div>
                        <p className="text-pink-700">International Children's Film Festival 2018-2019 </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            
            {activeSection === 'education' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Academic Qualifications</h2>
                    <p className="text-gray-600">Educational background and certifications</p>
                  </div>
                </div>
                
                <div className="grid gap-6">
                  <Card className="card-hover bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg">
                            <GraduationCap className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-purple-800">B.Sc. Electronics and Telecommunication Engineering</CardTitle>
                            <p className="text-purple-600">Chittagong University of Engineering & Technology</p>
                          </div>
                        </div>
                        <div className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">2019-2024</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-600 mb-3">
                        Graduated with a B.Sc. in Electronics and Telecommunication Engineering, majoring in Telecommunication with a thesis on Antenna Design.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge-purple border">Telecommunication</Badge>
                        <Badge className="skill-badge-blue border">Networking</Badge>
                        <Badge className="skill-badge-green border">Software Development</Badge>
                        <Badge className="skill-badge-yellow border">GPA: 3.19/4.0</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-blue-800">Higher Secondary Certificate</CardTitle>
                            <p className="text-blue-600">Cantonment Public School and College, Rangpur</p>
                          </div>
                        </div>
                        <div className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">2018</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge-blue border">Science</Badge>
                        <Badge className="skill-badge-green border">IoT Projects</Badge>
                        <Badge className="skill-badge-purple border">GPA 5.00/5.00</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-hover bg-gradient-to-r from-pink-50 to-white-50 border-blue-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-lg">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-blue-800">Secondary School Certificate</CardTitle>
                            <p className="text-blue-600">Police Lines School and College, Rangpur</p>
                          </div>
                        </div>
                        <div className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">2016</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge-blue border">Science</Badge>
                        <Badge className="skill-badge-green border">Club & ECA Activities</Badge>
                        <Badge className="skill-badge-purple border">GPA 5.00/5.00</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            
            {activeSection === 'training' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Training & Workshops</h2>
                    <p className="text-gray-600">Continuous learning and professional development</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="card-hover bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-yellow-800">
                        <Rocket className="h-5 w-5 text-yellow-600" />
                        Professional Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Professional Diploma in Digital Products Management",
                            org: "MTF Institute of Management, Technology & Finance",
                            year: "2025",
                            color: "blue"
                          },
                          {
                            title: "Product Owner Certification",
                            org: "Agile Enterprise Coach London",
                            year: "2025",
                            color: "green"
                          },
                          {
                            title: "Six Sigma: Lean Six Sigma Yellow Belt (Accredited)",                     
                            org: "OPEXLEADER",
                            year: "2025 - Ongoing",
                            color: "purple"
                          }
                        ].map((course, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg border border-yellow-100">
                            <div className="flex items-start gap-3">
                              <div className={`bg-${course.color}-500 p-2 rounded-lg`}>
                                <BookOpen className="h-4 w-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className={`text-${course.color}-800 mb-1`}>{course.title}</h4>
                                <p className={`text-${course.color}-600 text-sm`}>{course.org} • {course.year}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-teal-800">
                        <Code className="h-5 w-5 text-teal-600" />
                        Technical Training
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Power BI Essential Training:",
                            org: "Career Club",
                            year: "2024",
                            color: "yellow"
                          },
                          {
                            title: "Training on SDLC and STLC",
                            org: "QA Academy",
                            year: "2023",
                            color: "green"
                          },
                          {
                            title: "Basic API Implementation",
                            org: "AppLink",
                            year: "2022",
                            color: "pink"
                          }
                        ].map((course, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg border border-teal-100">
                            <div className="flex items-start gap-3">
                              <div className={`bg-${course.color}-500 p-2 rounded-lg`}>
                                <Zap className="h-4 w-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className={`text-${course.color}-800 mb-1`}>{course.title}</h4>
                                <p className={`text-${course.color}-600 text-sm`}>{course.org} • {course.year}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            
            {activeSection === 'achievements' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Key Achievements</h2>
                    <p className="text-gray-600">Notable accomplishments and recognitions</p>
                  </div>
                </div>
                
                <div className="grid gap-6">
                  {[
                    {
                      title: "Increased Product Adoption, DAU,MAU by 40%",
                      description: "Led product strategy initiatives that resulted in significant user growth and engagement improvements.",
                      icon: Target,
                      color: "blue",
                      metric: "40%",
                      metricLabel: "User Growth"
                    },
                    {
                      title: "Excellence in Quality Assurance",
                      description: "Implementing testing solutions that reduced defect rates by 60%.",
                      icon: Award,
                      color: "green",
                      metric: "60%",
                      metricLabel: "Defect Reduction"
                    },
                    {
                      title: "Team Leadership Recognition",
                      description: "Successfully managed cross-functional teams of 7+ members across multiple projects.",
                      icon: Users,
                      color: "purple",
                      metric: "7+",
                      metricLabel: "Team Members"
                    },
                    {
                      title: "Process Optimization",
                      description: "Streamlined QA processes, reducing testing cycles from 2 weeks to 5 days while maintaining quality standards.",
                      icon: Zap,
                      color: "yellow",
                      metric: "75%",
                      metricLabel: "Time Saved"
                    }
                  ].map((achievement, index) => (
                    <Card key={index} className={`card-hover bg-gradient-to-r from-${achievement.color}-50 to-${achievement.color}-100 border-${achievement.color}-200`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                          <div className={`bg-gradient-to-br from-${achievement.color}-500 to-${achievement.color}-600 p-4 rounded-lg shadow-lg`}>
                            <achievement.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className={`text-${achievement.color}-800 mb-2`}>{achievement.title}</h4>
                            <p className={`text-${achievement.color}-600 mb-4`}>{achievement.description}</p>
                            <div className={`bg-${achievement.color}-200 rounded-lg p-3 inline-block`}>
                              <div className={`text-2xl text-${achievement.color}-800 mb-1`}>{achievement.metric}</div>
                              <div className={`text-${achievement.color}-600 text-sm`}>{achievement.metricLabel}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {activeSection === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-teal-500 to-green-500 p-3 rounded-lg">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Notable Projects</h2>
                    <p className="text-gray-600">Key projects and technical implementations</p>
                  </div>
                </div>
                
                <div className="grid gap-6">
                  <Card className="card-hover bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                          <Globe className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-blue-800">E-commerce Platform Redesign</CardTitle>
                          <p className="text-blue-600">Product Management & QA Lead</p>
                        </div>
                        <Badge className="skill-badge-blue border">2023</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-600 mb-4">
                        Led the complete redesign of a major e-commerce platform, coordinating between design, 
                        development, and QA teams to deliver a seamless user experience.
                      </p>
                      <div className="mb-4">
                        <h4 className="text-blue-800 mb-2">Key Contributions:</h4>
                        <ul className="list-disc list-inside text-blue-600 space-y-1">
                          <li>Conducted user research and competitive analysis</li>
                          <li>Developed comprehensive test strategy and execution plan</li>
                          <li>Managed stakeholder communications and project timeline</li>
                          <li>Achieved 99.9% uptime during migration</li>
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge-blue border">React</Badge>
                        <Badge className="skill-badge-green border">Node.js</Badge>
                        <Badge className="skill-badge-yellow border">Selenium</Badge>
                        <Badge className="skill-badge-purple border">Agile</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-green-800">Automated Testing Framework</CardTitle>
                          <p className="text-green-600">SQA Engineer</p>
                        </div>
                        <Badge className="skill-badge-green border">2022</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-600 mb-4">
                        Designed and implemented a comprehensive automated testing framework that reduced 
                        testing time by 60% while improving test coverage.
                      </p>
                      <div className="mb-4">
                        <h4 className="text-green-800 mb-2">Technical Achievements:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Built reusable test components and utilities</li>
                          <li>Integrated with CI/CD pipeline for continuous testing</li>
                          <li>Created detailed reporting and analytics dashboard</li>
                          <li>Trained team members on framework usage</li>
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge-green border">Selenium WebDriver</Badge>
                        <Badge className="skill-badge-blue border">TestNG</Badge>
                        <Badge className="skill-badge-red border">Jenkins</Badge>
                        <Badge className="skill-badge-yellow border">Java</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <section className="mt-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-8 w-8 text-purple-500 animate-pulse" />
            </div>
            <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, collaborating on projects, 
              or sharing insights about product management and quality assurance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="text-center card-hover bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-blue-800">Email</h3>
                <p className="text-blue-600">Misbahsakin1@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-purple-800">LinkedIn</h3>
                <p className="text-purple-600">linkedin.com/in/misbahsakin</p>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-green-800">Phone</h3>
                <p className="text-green-600">+8801601802857</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Star className="h-6 w-6 text-yellow-400 mr-2" />
              <p className="text-lg">Built with passion for quality and excellence</p>
              <Star className="h-6 w-6 text-yellow-400 ml-2" />
            </div>
            <p className="text-gray-300">
              © 2025 Misbah Sakin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}