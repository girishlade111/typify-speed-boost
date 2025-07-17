import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Users, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-typing.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master Your
                <span className="gradient-text block">Typing Speed</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Professional typing training with personalized lessons, real-time feedback, and progress tracking.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Start Free Test
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Lessons
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm text-muted-foreground">Tests Completed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
                <div className="text-2xl font-bold">40%</div>
                <div className="text-sm text-muted-foreground">Speed Increase</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional typing interface" 
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};