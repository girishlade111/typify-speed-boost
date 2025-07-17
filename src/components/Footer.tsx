import { Keyboard } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Keyboard className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold gradient-text">TypeMaster</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional typing training platform for improving speed and accuracy.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Typing Tests</li>
              <li>Lessons</li>
              <li>Progress Tracking</li>
              <li>Leaderboards</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Typing Tips</li>
              <li>Keyboard Layouts</li>
              <li>Practice Texts</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 TypeMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};