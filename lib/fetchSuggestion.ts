import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodosForAI(board);

  try {
    const res = await fetch("/api/generateSummary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
      },
      body: JSON.stringify({ todos }),
    });

    if (!res.ok) {
      throw new Error("API Request Failed!!");
    }

    const GPTdata = await res.json();
    const { content } = GPTdata;

    return content;
  } catch (error) {
    console.log(error);
    return "Have a productive day!";
  }
};

export default fetchSuggestion;
