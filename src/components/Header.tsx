import { Button } from "@/components/ui/button";
import { Keyboard, User, Trophy, BookOpen } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Keyboard className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold gradient-text">TypeMaster</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-sm font-medium">
            <BookOpen className="mr-2 h-4 w-4" />
            Lessons
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            <Keyboard className="mr-2 h-4 w-4" />
            Tests
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            <Trophy className="mr-2 h-4 w-4" />
            Leaderboard
          </Button>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Sign In</span>
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};