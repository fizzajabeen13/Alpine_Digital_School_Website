"use client";

import { useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { suggestedQuestions } from "@/lib/constants/chatbot";
import { getChatbotResponse } from "@/lib/chatbot/getChatbotResponse";

type Message = {
  role: "bot" | "user";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Assalamualaikum! I am Alpine School Assistant. Ask me about admissions, timings, faculty, or contact details.",
    },
  ]);

  function sendMessage(messageText?: string) {
    const text = messageText || input.trim();

    if (!text) return;

    const response = getChatbotResponse(text);

    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "bot", text: response.answer },
    ]);

    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 text-white shadow-xl hover:bg-blue-900"
        aria-label="Open chat assistant"
      >
        <Bot size={26} />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-blue-950 p-4 text-white">
            <div className="flex items-center gap-3">
              <Bot size={22} />
              <div>
                <h3 className="font-bold">School Assistant</h3>
                <p className="text-xs text-blue-100">Online support</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
            >
              <X size={18} />
            </button>
          </div>

          <div className="h-80 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[80%] rounded-2xl bg-blue-950 px-4 py-3 text-sm text-white"
                    : "mr-auto max-w-[80%] rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                }
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {suggestedQuestions.slice(0, 4).map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                  className="shrink-0 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                >
                  {question}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Type your question..."
                className="flex-1 rounded-full border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-950"
              />

              <button
                onClick={() => sendMessage()}
                className="rounded-full bg-blue-950 p-3 text-white hover:bg-blue-900"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}