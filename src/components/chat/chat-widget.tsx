"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";

type Message = {
    id: string;
    role: "bot" | "user" | "system";
    content: string;
    options?: string[];
    isForm?: boolean;
};

type LeadData = {
    name: string;
    email: string;
    whatsapp: string;
    inquiryType: string;
    message: string;
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
    const [formStep, setFormStep] = useState<"idle" | "name" | "email" | "whatsapp" | "message" | "submitting" | "done">("idle");
    const [leadData, setLeadData] = useState<LeadData>({
        name: "",
        email: "",
        whatsapp: "",
        inquiryType: "General Inquiry",
        message: ""
    });

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const toggleChat = () => setIsOpen(!isOpen);

    const addMessage = (role: "bot" | "user" | "system", content: string, options?: string[]) => {
        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), role, content, options },
        ]);
    };

    const handleOptionClick = (option: string) => {
        addMessage("user", option);

        if (option === "Enrollment Process" || option === "Request Call Back" || option === "Talk to Support") {
            setLeadData(prev => ({ ...prev, inquiryType: option }));
            setFormStep("name");
            setTimeout(() => {
                addMessage("bot", "I'd be happy to help! Could you please share your full name so I know who I'm chatting with?");
            }, 600);
            return;
        }

        processBotResponse(option);
    };

    const handleSend = async () => {
        if (!inputValue.trim()) return;
        const input = inputValue.trim();
        addMessage("user", input);
        setInputValue("");

        if (formStep !== "idle") {
            handleFormFlow(input);
        } else {
            processBotResponse(input);
        }
    };

    const handleFormFlow = async (input: string) => {
        if (formStep === "name") {
            setLeadData(prev => ({ ...prev, name: input }));
            setFormStep("email");
            setTimeout(() => addMessage("bot", `Thanks ${input}! And what's your best email address?`), 400);
        } else if (formStep === "email") {
            if (!input.includes("@")) {
                addMessage("bot", "That doesn't look like a valid email. Could you please double-check?");
                return;
            }
            setLeadData(prev => ({ ...prev, email: input }));
            setFormStep("whatsapp");
            setTimeout(() => addMessage("bot", "Perfect. Lastly, please provide your WhatsApp number (with country code) so our experts can reach out."), 400);
        } else if (formStep === "whatsapp") {
            setLeadData(prev => ({ ...prev, whatsapp: input }));
            setFormStep("submitting");

            // Final Step - Process the Inquiry
            await submitInquiry({ ...leadData, whatsapp: input });
        }
    };

    const submitInquiry = async (data: LeadData) => {
        addMessage("bot", "Got it! Sending your details to our team...");

        try {
            const response = await fetch('/api/inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStep("done");
                setTimeout(() => {
                    addMessage("bot", "Success! Your inquiry has been sent to our admin via Email & WhatsApp Dashboard.");
                    addMessage("bot", "You can also message our admin directly on WhatsApp for an instant response:", ["Chat on WhatsApp Now"]);
                }, 800);
            } else {
                addMessage("bot", "I'm having a little trouble connecting to the server. But don't worry, you can still chat with us on WhatsApp.");
                setFormStep("done");
            }
        } catch (error) {
            setFormStep("done");
            addMessage("bot", "Your request is noted. Click below to start an instant WhatsApp chat with our admin.");
        }
    };

    const openWhatsApp = () => {
        const adminNumber = "919014985626"; // Updated admin number
        const text = `Hi Mathisi Academy, I am ${leadData.name}. I'm interested in ${leadData.inquiryType}. My email is ${leadData.email}. Please help me with more info.`;
        window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const processBotResponse = (input: string) => {
        const lowerInput = input.toLowerCase();

        if (input === "Chat on WhatsApp Now") {
            openWhatsApp();
            return;
        }

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
                response = "Our support team is available 24/7. You can reach us at akshjavahub@gmail.com or via WhatsApp.";
                options = ["Talk to Support"];
            } else if (lowerInput.includes("data science")) {
                response = "Our Data Science program covers Python, SQL, Machine Learning, and more. It's a 5-month job-ready course.";
                options = ["View Data Science Page", "Enroll in Data Science"];
            } else if (lowerInput.includes("ai") || lowerInput.includes("ml")) {
                response = "The AI/ML program dives deep into Neural Networks, Deep Learning, and GenAI. Perfect for aspiring AI Engineers.";
                options = ["View AI/ML Page"];
            } else if (lowerInput.includes("price") || lowerInput.includes("fee") || lowerInput.includes("cost")) {
                response = "For the latest fee structure and scholarship offers, please request a call back from our admissions team.";
                options = ["Request Call Back"];
            }

            addMessage("bot", response, options);
        }, 600);
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={toggleChat}
                    size="icon"
                    className="h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110 bg-primary hover:bg-primary/90"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
                </Button>
            </div>

            {isOpen && (
                <Card className="fixed bottom-24 right-6 z-50 w-[350px] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-5 border-none">
                    <CardHeader className="bg-primary px-4 py-4 text-primary-foreground">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                <Bot className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-bold">Mathisi Assistant</CardTitle>
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <CardDescription className="text-xs text-primary-foreground/90 font-medium">
                                        Online - We reply in seconds
                                    </CardDescription>
                                </div>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="p-0">
                        <ScrollArea className="h-[400px] bg-[#f8fafc] p-4">
                            <div className="flex flex-col gap-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-white text-slate-800 border rounded-tl-none"
                                                }`}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}

                                {messages[messages.length - 1].role === 'bot' && messages[messages.length - 1].options && (
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {messages[messages.length - 1].options!.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionClick(opt)}
                                                className={`text-xs px-4 py-2 rounded-full transition-all font-medium border ${opt.includes("WhatsApp")
                                                    ? "bg-emerald-500 border-emerald-500 text-white hover:bg-emerald-600"
                                                    : "bg-white border-slate-200 text-slate-700 hover:border-primary hover:text-primary"
                                                    }`}
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
                                placeholder={formStep === "idle" ? "Type a message..." : "Type your answer..."}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="h-10 border-slate-200 focus:border-primary focus:ring-0 rounded-xl"
                                disabled={formStep === "submitting"}
                            />
                            <Button type="submit" size="icon" className="h-10 w-10 shrink-0 rounded-xl" disabled={formStep === "submitting"}>
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}
        </>
    );
}
