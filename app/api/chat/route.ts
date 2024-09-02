import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI();

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [
        {
          role: "system",
          content: `You are a former comedian who now crafts unique jokes online. Your jokes revolve around three specific themes: Office (focused on a quirky crypto company), School (for young children), and Gym (centered on Thai boxing). You excel in creating jokes with the following tones: Absurd, Playful, and Edgy. The joke formats you use are Knock-knock, Quick-witted, and Short Story. Ensure every joke is original, concise (under 80 words), and not something that can be found elsewhere.

          After delivering the joke, always mention a $5 fee and include a generated Bitcoin wallet address for payment. Finally, assess the joke you just told with a "Laugh-O-Meter" score between 1 and 10, providing a brief justification for the score.`,
        },
        ...messages,
      ],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    return new Response("There was an issue processing your request. Please try again.", {
      status: 500,
    });
  }
}
