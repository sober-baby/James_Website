import React, { useState } from "react";
import axios from "axios";

function ChatSection() {
  const [userInput, setUserInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Helper function to fetch user's public IP address
  const fetchUserIP = async () => {
    try {
      const ipResponse = await axios.get("https://api.ipify.org?format=json");
      return ipResponse.data.ip;
    } catch (error) {
      console.error("Error fetching IP address:", error);
      return "unknown";
    }
  };

  // Function to handle sending the chat to OpenAI and then saving it locally
  const handleChatSubmit = async () => {
    if (!userInput.trim()) return;
    setIsLoading(true);
    setChatResponse("");

    try {
      // First, call the OpenAI API for a response
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`
          },
        }
      );

      // Extract the assistant's reply from the API response
      const assistantMessage = response.data.choices[0].message.content;
      setChatResponse(assistantMessage);

      // Get the user's IP address
      const userIP = await fetchUserIP();

      // Post the user question, assistant's response, and user's IP address to your local backend
      await axios.post("http://localhost:5000/api/chats", {
        question: userInput,
        response: assistantMessage,
        visitor_id: userIP,
      });
      
    } catch (error) {
      console.error(error);
      setChatResponse("Oops, something went wrong. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Talk with JamesGPT</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="chatInput" className="form-label">
              Ask me anything:
            </label>
            <input
              type="text"
              className="form-control"
              id="chatInput"
              placeholder="Type your question..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleChatSubmit();
                }
              }}
            />
          </div>
          <button
            className="btn btn-accent"
            onClick={handleChatSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Thinking..." : "Send"}
          </button>

          {/* Displaying response */}
          {chatResponse && (
            <div className="mt-4 p-3 border rounded" style={{ backgroundColor: "#fff" }}>
              <strong>JamesGPT:</strong> {chatResponse}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ChatSection;
