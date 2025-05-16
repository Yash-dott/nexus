'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, Clock, Star, User, Award } from "lucide-react";
import { Header } from "@/components/global";
import { useParams } from 'next/navigation';

const CourseDetail = () => {
  const { departmentId, courseSlug } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data - in a real app this would come from an API
  const courseData = {
    // @ts-ignore
    title: courseSlug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Course Title",
    // @ts-ignore
    department: departmentId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Department",
    instructor: "Prof. Sarah Wilson",
    institution: "Harvard Law School",
    duration: "12 weeks",
    level: "Intermediate",
    rating: 4.8,
    enrolled: 1250,
    price: "$299",
    description: "This comprehensive course covers all aspects of intellectual property law, including patents, trademarks, copyrights, and trade secrets. You'll learn through a combination of video lectures, interactive case studies, and practical assignments.",
    learningOutcomes: [
      "Understand the fundamental principles of intellectual property law",
      "Navigate complex regulatory frameworks across different jurisdictions",
      "Draft effective intellectual property protection strategies",
      "Apply legal concepts to real-world business scenarios",
      "Identify potential intellectual property infringements"
    ],
    modules: [
      {
        title: "Introduction to Intellectual Property",
        lessons: ["What is IP?", "History of IP Law", "Types of IP Protection"],
        duration: "2 weeks"
      },
      {
        title: "Patent Law Fundamentals",
        lessons: ["Patent Requirements", "Filing Process", "Patent Infringement"],
        duration: "3 weeks"
      },
      {
        title: "Trademark Protection",
        lessons: ["Trademark Eligibility", "Registration Process", "Enforcement"],
        duration: "2 weeks"
      },
      {
        title: "Copyright in the Digital Age",
        lessons: ["Copyright Basics", "Fair Use", "Digital Rights Management"],
        duration: "3 weeks"
      },
      {
        title: "Trade Secrets & Confidentiality",
        lessons: ["Protecting Trade Secrets", "NDAs", "Enforcement Strategies"],
        duration: "2 weeks"
      }
    ]
  };
  
  // Interactive quiz data
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const quizQuestions = [
    {
      question: "Which of the following is NOT protected by copyright?",
      options: [
        "A novel",
        "A song",
        "An idea",
        "A painting"
      ],
      correctAnswer: 2
    },
    {
      question: "How long does a utility patent last in the United States?",
      options: [
        "10 years from filing",
        "20 years from filing",
        "15 years from grant",
        "Indefinitely with renewal"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the ® symbol indicate?",
      options: [
        "A patent has been filed",
        "A copyright has been registered",
        "A trademark has been registered",
        "A trade secret is claimed"
      ],
      correctAnswer: 2
    }
  ];
  
  const handleAnswerSelection = (answerIndex: number) => {
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const restartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 pb-16">
        {/* Course Header */}
        <section className="py-12 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
                <p className="text-lg text-primary mb-4">{courseData.department}</p>
                <p className="text-muted-foreground mb-6">{courseData.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    <span>{courseData.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{courseData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-[#FFDC00]" />
                    <span>{courseData.rating} (450+ reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookText className="h-4 w-4 text-primary" />
                    <span>{courseData.institution}</span>
                  </div>
                </div>
                
                <div className="space-x-4">
                  <Button className="bg-[#FF851B] hover:bg-[#FF851B]/90 text-white btn-hover-scale btn-hover-glow">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="btn-hover-scale">
                    Preview Course
                  </Button>
                </div>
              </div>
              
              <Card className="md:w-1/3 border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Course Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-bold">{courseData.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span>{courseData.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Students Enrolled:</span>
                      <span>{courseData.enrolled.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Updated:</span>
                      <span>June 2025</span>
                    </div>
                    
                    <Button className="w-full mt-4">Download Syllabus</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Course Content */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b mb-6">
              <div className="flex gap-8">
                <button 
                  className={`pb-2 px-1 ${activeTab === 'overview' ? 'border-b-2 border-primary font-medium' : 'text-muted-foreground'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`pb-2 px-1 ${activeTab === 'curriculum' ? 'border-b-2 border-primary font-medium' : 'text-muted-foreground'}`}
                  onClick={() => setActiveTab('curriculum')}
                >
                  Curriculum
                </button>
                <button 
                  className={`pb-2 px-1 ${activeTab === 'quiz' ? 'border-b-2 border-primary font-medium' : 'text-muted-foreground'}`}
                  onClick={() => setActiveTab('quiz')}
                >
                  Knowledge Check
                </button>
              </div>
            </div>
            
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-5 gap-12">
                <div className="md:col-span-3">
                  <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                  <ul className="space-y-3 mb-8">
                    {courseData.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                          ✓
                        </div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4">Certificate of Completion</h2>
                  <p className="mb-4">
                    Upon successful completion of this course, you'll receive a certificate that you can add to your LinkedIn profile or resume.
                  </p>
                  <div className="bg-muted/20 p-6 rounded-lg border border-muted flex items-center justify-center">
                    <div className="text-center">
                      <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-medium">Sample Certificate</h3>
                      <p className="text-sm text-muted-foreground">Click to preview</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <Card className="border-none shadow-lg overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button variant="outline" className="bg-background/80 hover:bg-background/90">
                          Watch Preview
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-2">Course Preview</h3>
                      <p className="text-sm text-muted-foreground">Get a taste of the course content and teaching style before enrolling.</p>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-8 space-y-4">
                    <h3 className="font-bold">Requirements</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Basic understanding of legal concepts</li>
                      <li>No prior IP law knowledge required</li>
                      <li>Access to a computer with internet connection</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'curriculum' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {courseData.modules.map((module, index) => (
                    <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>Module {index + 1}: {module.title}</span>
                          <span className="text-sm font-normal text-muted-foreground">{module.duration}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'quiz' && (
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Test Your Knowledge</h2>
                
                {!quizStarted ? (
                  <div className="text-center">
                    <p className="mb-6">Take this quick quiz to test your understanding of core intellectual property concepts.</p>
                    <Button onClick={() => setQuizStarted(true)}>Start Quiz</Button>
                  </div>
                ) : quizCompleted ? (
                  <Card className="border-none shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-5xl font-bold mb-4 text-primary">{score}/{quizQuestions.length}</div>
                        <h3 className="text-xl font-medium mb-2">Quiz Completed!</h3>
                        <p className="mb-6">
                          {score === quizQuestions.length 
                            ? "Perfect score! You're ready for this course!" 
                            : "Good effort! This course will help solidify these concepts."}
                        </p>
                        <div className="space-x-4">
                          <Button onClick={restartQuiz} variant="outline">Try Again</Button>
                          <Button className="bg-[#FF851B] hover:bg-[#FF851B]/90 text-white">Enroll Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-none shadow-lg">
                    <CardContent className="pt-6">
                      <div className="mb-2 text-sm text-muted-foreground">
                        Question {currentQuestion + 1} of {quizQuestions.length}
                      </div>
                      <h3 className="text-lg font-medium mb-6">{quizQuestions[currentQuestion].question}</h3>
                      <div className="space-y-3">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="w-full justify-start text-left h-auto py-3"
                            onClick={() => handleAnswerSelection(index)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetail;
