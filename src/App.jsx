import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

const App = () => {
  // State for inputs, chat history, and loading
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  // State for Modals
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setInput("");
    setMessages([]);
  };

  const onSent = async (promptText) => {
    const textToSend = promptText !== undefined ? promptText : input;
    if (!textToSend.trim()) return;

    setLoading(true);
    setShowResult(true);

    // Add user message to chat log
    const updatedMessages = [...messages, { role: "user", text: textToSend }];
    setMessages(updatedMessages);
    setInput("");

    // Add to sidebar history if unique
    if (!prevPrompts.includes(textToSend)) {
      setPrevPrompts((prev) => [...prev, textToSend]);
    }

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textToSend }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages([...updatedMessages, { role: "model", text: data.text }]);
      } else {
        setMessages([
          ...updatedMessages,
          { role: "model", text: "Error: Something went wrong." },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages([
        ...updatedMessages,
        { role: "model", text: "Failed to connect to the server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex relative">
      <Sidebar
        onSent={onSent}
        prevPrompts={prevPrompts}
        newChat={newChat}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenActivity={() => setIsActivityOpen(true)}
      />

      <Main
        input={input}
        setInput={setInput}
        messages={messages}
        showResult={showResult}
        loading={loading}
        onSent={onSent}
      />

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Settings</h3>
            <p className="text-sm text-gray-600 mb-6">
              Manage your Gemini Clone preferences and API configuration.
            </p>
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="w-full py-2 bg-sky-500 text-white rounded-xl font-medium hover:bg-sky-600 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Help Modal */}
      {isHelpOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Help & Support
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              This is a custom-built Gemini clone using React, Tailwind CSS, and
              the Google Gemini API.
            </p>
            <button
              onClick={() => setIsHelpOpen(false)}
              className="w-full py-2 bg-sky-500 text-white rounded-xl font-medium hover:bg-sky-600 transition cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Activity Modal */}
      {isActivityOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-xl max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Recent Activity
            </h3>
            {prevPrompts.length === 0 ? (
              <p className="text-sm text-gray-500 mb-6">
                No recent search activity found.
              </p>
            ) : (
              <ul className="list-disc pl-5 text-sm text-gray-700 mb-6 flex flex-col gap-2">
                {prevPrompts.map((prompt, idx) => (
                  <li key={idx} className="truncate">
                    {prompt}
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => setIsActivityOpen(false)}
              className="w-full py-2 bg-sky-500 text-white rounded-xl font-medium hover:bg-sky-600 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
