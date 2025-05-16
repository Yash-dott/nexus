
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "The Future of Online Learning",
    excerpt: "Exploring emerging trends in digital education...",
    link: "#",
  },
  {
    id: 2,
    title: "Study Tips for Remote Students",
    excerpt: "Maximize your learning potential with these strategies...",
    link: "#",
  },
  {
    id: 3,
    title: "Career Paths in Tech",
    excerpt: "Navigate your way through the tech industry...",
    link: "#",
  },
  {
    id: 4,
    title: "Learning in the Digital Age",
    excerpt: "How technology is reshaping education...",
    link: "#",
  },
  {
    id: 5,
    title: "Building Effective Study Habits",
    excerpt: "Develop lasting learning practices...",
    link: "#",
  },
];

export default function BlogPosts() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Recent Blog Posts</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="relative overflow-hidden">
          <div
            className={`flex gap-6 ${
              isPlaying ? "animate-slide" : ""
            } whitespace-nowrap`}
          >
            {[...blogs, ...blogs].map((blog, index) => (
              <div
                key={`${blog.id}-${index}`}
                className="w-80 shrink-0 bg-background rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {blog.excerpt}
                </p>
                <a
                  href={blog.link}
                  className="text-primary hover:underline text-sm"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
