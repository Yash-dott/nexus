
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sessions = [
  {
    id: 1,
    title: "Advanced Machine Learning",
    mentor: "Dr. Sarah Johnson",
    date: "2025-04-26",
    time: "10:00 AM EST",
  },
  {
    id: 2,
    title: "Web Development Workshop",
    mentor: "Alex Chen",
    date: "2025-04-27",
    time: "2:00 PM EST",
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    mentor: "Mike Peterson",
    date: "2025-04-28",
    time: "11:00 AM EST",
  },
];

export default function LiveSessions() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Live Mentor-Led Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sessions.map((session) => (
            <Card key={session.id}>
              <CardHeader>
                <CardTitle>{session.title}</CardTitle>
                <CardDescription>with {session.mentor}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {session.date} at {session.time}
                </p>
                <Button className="w-full">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
