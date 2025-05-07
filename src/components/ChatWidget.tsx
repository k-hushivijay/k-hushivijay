
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send } from "lucide-react";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "👋 Hi there! How can I help you with selling your software licenses today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const faqResponses: Record<string, string> = {
    "how do i sell my license": 
      "It's simple to sell your license with us! Just upload your license details through our secure portal, receive a valuation within 24 hours, and if you accept, we'll process payment within 48 hours after verification.",
    
    "what types of licenses": 
      "We buy all major software licenses including Microsoft, Adobe, Oracle, SAP, Autodesk, VMware, and many others. Both perpetual and subscription-based licenses can be eligible.",
    
    "how much can i get": 
      "Values vary based on software type, remaining term, and market demand, but our clients typically receive 40-70% of the original purchase value. Upload your license details for a free valuation!",
    
    "how long does it take": 
      "The process is quick! Valuation takes 1-2 business days, and once approved, payment is processed within 48 hours. The entire process usually completes within a week.",
    
    "is it legal": 
      "Yes, absolutely! Our compliance team ensures all transfers adhere to the software publisher's terms and legal requirements. We've facilitated thousands of compliant transfers.",
  };
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);
    
    // Process response
    setTimeout(() => {
      let botResponse = "I'm not sure about that. Would you like to speak with one of our license specialists?";
      
      // Check against FAQ keywords
      const lowercaseMessage = message.toLowerCase();
      
      for (const [keyword, response] of Object.entries(faqResponses)) {
        if (lowercaseMessage.includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };
  
  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-50"
        aria-label="Chat support"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      
      {/* Chat widget */}
      <div className={`fixed bottom-20 right-6 w-80 sm:w-96 bg-background border rounded-lg shadow-xl overflow-hidden z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}>
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">SoftSell Support</h3>
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-green-400 rounded-full"></span>
              <span className="text-xs">Online</span>
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="p-4 h-80 overflow-y-auto bg-muted/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 max-w-[85%] ${
                msg.sender === "user" ? "ml-auto" : "mr-auto"
              }`}
            >
              <div
                className={`p-3 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-secondary/30 text-foreground rounded-bl-none"
                }`}
              >
                {msg.content}
              </div>
              <div
                className={`text-xs mt-1 text-muted-foreground ${
                  msg.sender === "user" ? "text-right" : ""
                }`}
              >
                {msg.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex space-x-2 p-3 rounded-lg bg-secondary/30 text-foreground w-16">
              <div className="h-2 w-2 bg-foreground rounded-full animate-pulse"></div>
              <div className="h-2 w-2 bg-foreground rounded-full animate-pulse delay-100"></div>
              <div className="h-2 w-2 bg-foreground rounded-full animate-pulse delay-200"></div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t p-4 flex items-center">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 mr-2"
          />
          <Button type="submit" size="icon" disabled={!message.trim()}>
            <Send size={18} />
          </Button>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
