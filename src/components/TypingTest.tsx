import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, Play, Pause } from "lucide-react";

const sampleTexts = [
  "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet and is perfect for typing practice.",
  "Technology has revolutionized the way we communicate, work, and live. From smartphones to artificial intelligence, our world continues to evolve rapidly.",
  "Practice makes perfect. The more you type, the faster and more accurate you become. Focus on precision first, then speed will naturally follow."
];

export const TypingTest = () => {
  const [currentText, setCurrentText] = useState(sampleTexts[0]);
  const [userInput, setUserInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  useEffect(() => {
    if (userInput.length > 0) {
      const words = userInput.trim().split(' ').length;
      const minutes = (60 - timeLeft) / 60;
      const calculatedWpm = minutes > 0 ? Math.round(words / minutes) : 0;
      setWpm(calculatedWpm);

      const correctChars = userInput.split('').filter((char, index) => 
        char === currentText[index]
      ).length;
      const calculatedAccuracy = Math.round((correctChars / userInput.length) * 100);
      setAccuracy(calculatedAccuracy);

      const errorCount = userInput.split('').filter((char, index) => 
        char !== currentText[index]
      ).length;
      setErrors(errorCount);
    }
  }, [userInput, timeLeft, currentText]);

  const handleStart = () => {
    setIsActive(true);
    inputRef.current?.focus();
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(60);
    setUserInput("");
    setCurrentIndex(0);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setCurrentText(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isActive && e.target.value.length > 0) {
      setIsActive(true);
    }
    setUserInput(e.target.value);
    setCurrentIndex(e.target.value.length);
  };

  const renderText = () => {
    return currentText.split('').map((char, index) => {
      let className = "text-muted-foreground";
      
      if (index < userInput.length) {
        className = userInput[index] === char 
          ? "text-success bg-success/10" 
          : "text-destructive bg-destructive/10";
      } else if (index === currentIndex) {
        className = "bg-primary/20 text-primary";
      }

      return (
        <span key={index} className={`${className} transition-colors duration-200`}>
          {char}
        </span>
      );
    });
  };

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Typing Speed Test</h2>
            <p className="text-muted-foreground">Test your typing speed and accuracy with our professional interface</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{wpm}</div>
                  <div className="text-sm text-muted-foreground">WPM</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">{accuracy}%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-destructive">{errors}</div>
                  <div className="text-sm text-muted-foreground">Errors</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{timeLeft}s</div>
                  <div className="text-sm text-muted-foreground">Time Left</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Typing Test</span>
                <div className="flex gap-2">
                  {!isActive ? (
                    <Button onClick={handleStart} size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Start
                    </Button>
                  ) : (
                    <Button onClick={handlePause} size="sm" variant="outline">
                      <Pause className="h-4 w-4 mr-2" />
                      Pause
                    </Button>
                  )}
                  <Button onClick={handleReset} size="sm" variant="outline">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="typing-text text-lg leading-relaxed">
                  {renderText()}
                </div>
              </div>
              
              <textarea
                ref={inputRef}
                value={userInput}
                onChange={handleInputChange}
                placeholder="Start typing here..."
                className="w-full h-32 p-4 border rounded-lg typing-text focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                disabled={timeLeft === 0}
              />
              
              <Progress value={((60 - timeLeft) / 60) * 100} className="h-2" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};