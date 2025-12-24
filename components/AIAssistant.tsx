
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { getSchoolCounselorResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Genie, your Genius School AI Counselor. How can I assist you with admissions for the 2025-2026 session? 👋" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getSchoolCounselorResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-blue-950 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-sky-500 p-2 rounded-xl">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold leading-tight">School AI Assistant</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-sky-200 uppercase font-bold tracking-widest">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-sky-100 text-sky-600' : 'bg-white border shadow-sm text-slate-400'
                  }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-sky-500 text-white rounded-tr-none shadow-lg shadow-sky-500/20' 
                      : 'bg-white text-slate-800 shadow-sm border border-slate-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 items-center bg-white p-3 rounded-2xl shadow-sm border border-slate-200">
                  <Loader2 className="w-4 h-4 animate-spin text-sky-500" />
                  <span className="text-sm text-slate-400 font-medium">Genie is thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t flex gap-2">
            <input 
              type="text" 
              placeholder="Ask Genie anything..."
              className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-sky-500 transition-all outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-sky-500 text-white p-2.5 rounded-xl hover:bg-sky-600 transition-colors shadow-lg shadow-sky-200 disabled:opacity-50"
              disabled={isLoading || !input.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-blue-950 text-white rotate-90' : 'bg-sky-500 text-white'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-400"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;
