import {
  chatbotFallback,
  chatbotKnowledge,
} from "@/lib/constants/chatbot";

export function getChatbotResponse(message: string) {
  const query = message.toLowerCase().trim();

  for (const item of chatbotKnowledge) {
    const matched = item.keywords.some((keyword) =>
      query.includes(keyword.toLowerCase())
    );

    if (matched) {
      return {
        title: item.title,
        answer: item.answer,
      };
    }
  }

  return {
    title: "School Assistant",
    answer: chatbotFallback,
  };
}