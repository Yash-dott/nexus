
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Introduction to AI",
    department: "Computer Science",
    description: "Learn the fundamentals of Artificial Intelligence",
    hours: "40+ hours",
  },
  {
    id: 2,
    title: "Digital Marketing",
    department: "Marketing",
    description: "Master modern marketing strategies",
    hours: "30+ hours",
  },
  {
    id: 3,
    title: "UI/UX Design",
    department: "Design",
    description: "Create beautiful and functional interfaces",
    hours: "25+ hours",
  },
  {
    id: 4,
    title: "Business Analytics",
    department: "Business",
    description: "Data-driven decision making",
    hours: "35+ hours",
  },
];

export default function TrendingCourses() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Trending Courses</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.department}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {course.description}
                </p>
                <p className="text-sm font-medium">{course.hours}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
