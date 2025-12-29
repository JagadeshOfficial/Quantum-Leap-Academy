"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";

type Message = {
    id: string;
    role: "bot" | "user";
    content: string;
    options?: string[];
};

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "bot",
            content: "Hello! Welcome to Mathisi Academy. How can I assist you today?",
            options: ["Explore Courses", "Enrollment Process", "Talk to Support"],
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: string) => {
        addMessage("user", option);
        processBotResponse(option);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        addMessage("user", inputValue);
        processBotResponse(inputValue);
        setInputValue("");
    };

    const addMessage = (role: "bot" | "user", content: string, options?: string[]) => {
        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), role, content, options },
        ]);
    };

    const processBotResponse = (input: string) => {
        const lowerInput = input.toLowerCase();

        setTimeout(() => {
            let response = "I'm not sure about that. Would you like to speak to a human agent?";
            let options: string[] | undefined;

            if (lowerInput.includes("course") || lowerInput.includes("explore")) {
                response = "We offer top-rated programs in trending technologies. Which one interests you?";
                options = ["Data Science", "AI & ML", "Cyber Security", "Full list"];
            } else if (lowerInput.includes("enroll") || lowerInput.includes("process") || lowerInput.includes("admission")) {
                response = "Enrollment is simple! You can download the brochure for detailed info or request a call back from our counselors.";
                options = ["Request Call Back", "Download Brochure Help"];
            } else if (lowerInput.includes("support") || lowerInput.includes("talk") || lowerInput.includes("contact")) {
                response = "Our support team is available 24/7. You can reach us at support@mathisi.info or +91 99999 99999.";
            } else if (lowerInput.includes("data science")) {
                response = "Our Data Science program covers Python, SQL, Machine Learning, and more. It's a 5-month job-ready course.";
                options = ["View Data Science Page", "Enroll in Data Science"];
            } else if (lowerInput.includes("ai") || lowerInput.includes("ml")) {
                response = "The AI/ML program dives deep into Neural Networks, Deep Learning, and GenAI. Perfect for aspiring AI Engineers.";
                options = ["View AI/ML Page"];
            }
            else if (lowerInput.includes("price") || lowerInput.includes("fee") || lowerInput.includes("cost")) {
                response = "For the latest fee structure and scholarship offers, please request a call back from our admissions team.";
                options = ["Request Call Back"];
            }

            addMessage("bot", response, options);
        }, 600);
    };

    return (
        <>
            {/* Trigger Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={toggleChat}
                    size="icon"
                    className="h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
                </Button>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <Card className="fixed bottom-24 right-6 z-50 w-[350px] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-5">
                    <CardHeader className="bg-primary px-4 py-3 text-primary-foreground">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                <Bot className="h-5 w-5" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Mathisi Assistant</CardTitle>
                                <CardDescription className="text-xs text-primary-foreground/80">
                                    Online - Replies instantly
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="p-0">
                        <ScrollArea className="h-[350px] bg-slate-50 p-4">
                            <div className="flex flex-col gap-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-white text-slate-800 shadow-sm border rounded-tl-none"
                                                }`}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {/* Render Options for the last message if it's from bot */}
                                {messages[messages.length - 1].role === 'bot' && messages[messages.length - 1].options && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {messages[messages.length - 1].options!.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionClick(opt)}
                                                className="text-xs border border-primary/20 bg-primary/5 text-primary px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors"
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                <div ref={scrollRef} />
                            </div>
                        </ScrollArea>
                    </CardContent>

                    <CardFooter className="bg-white p-3 border-t">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend();
                            }}
                            className="flex w-full gap-2"
                        >
                            <Input
                                placeholder="Type a message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="h-9 focus-visible:ring-1"
                            />
                            <Button type="submit" size="icon" className="h-9 w-9 shrink-0">
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}
        </>
    );
}
