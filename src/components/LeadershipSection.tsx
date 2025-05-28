
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      bio: "Former BigLaw partner with 15+ years experience. Harvard Law graduate who led digital transformation at major firms.",
      credentials: ["Harvard Law JD", "Former Skadden Partner", "Legal Tech Innovator"],
      linkedin: "#"
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Technology Officer",
      image: "/placeholder.svg",
      bio: "AI researcher and former Google engineer. PhD in Machine Learning with focus on legal applications.",
      credentials: ["PhD Machine Learning", "Ex-Google", "20+ Patents"],
      linkedin: "#"
    },
    {
      name: "Jennifer Rodriguez",
      role: "Chief Learning Officer",
      image: "/placeholder.svg",
      bio: "Education technology expert with 12+ years designing learning experiences for professionals.",
      credentials: ["EdD Stanford", "Former Coursera", "Learning Design Expert"],
      linkedin: "#"
    },
    {
      name: "Robert Thompson",
      role: "Head of Legal Affairs",
      image: "/placeholder.svg",
      bio: "Compliance expert and former General Counsel. Specializes in regulatory technology and risk management.",
      credentials: ["Yale Law JD", "Former GC", "Compliance Specialist"],
      linkedin: "#"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-learnnexus-navy mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by industry veterans who understand the challenges facing legal professionals today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="card-hover bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-poppins font-bold text-learnnexus-navy mb-1">
                  {leader.name}
                </h3>
                
                <p className="text-learnnexus-orange font-medium mb-3">
                  {leader.role}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {leader.bio}
                </p>
                
                <div className="space-y-2">
                  {leader.credentials.map((credential, credIndex) => (
                    <Badge key={credIndex} variant="secondary" className="text-xs mr-1 mb-1">
                      {credential}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-poppins font-bold text-learnnexus-navy mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To democratize legal education and empower legal professionals with cutting-edge knowledge and tools. 
              We believe that every lawyer deserves access to world-class training that keeps pace with technological advancement 
              and regulatory changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
