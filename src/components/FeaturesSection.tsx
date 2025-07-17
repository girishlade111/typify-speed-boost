import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Target, 
  Trophy, 
  BarChart3, 
  Users, 
  Zap,
  Brain,
  Clock,
  Shield
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Structured Lessons",
    description: "Progressive learning from basic home row to advanced techniques",
    badge: "Learn",
    color: "text-blue-500"
  },
  {
    icon: Target,
    title: "Precision Training",
    description: "Focus on accuracy first, speed follows naturally",
    badge: "Accuracy",
    color: "text-green-500"
  },
  {
    icon: Trophy,
    title: "Achievements",
    description: "Unlock badges and compete on global leaderboards",
    badge: "Gamified",
    color: "text-yellow-500"
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Detailed insights into your typing performance over time",
    badge: "Analytics",
    color: "text-purple-500"
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Personalized recommendations based on your weaknesses",
    badge: "Smart",
    color: "text-pink-500"
  },
  {
    icon: Clock,
    title: "Flexible Testing",
    description: "Various time limits and text types to match your goals",
    badge: "Flexible",
    color: "text-orange-500"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to
            <span className="gradient-text block">Excel at Typing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional tools and features designed to accelerate your typing improvement journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/80 backdrop-blur">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-background shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Community Driven</h3>
              <p className="text-muted-foreground">Join thousands of users improving together</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">Real-time feedback and instant results</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Shield className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold">Privacy First</h3>
              <p className="text-muted-foreground">Your data stays secure and private</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};