import React from "react";
import Markdown from "react-markdown";
import { assets } from "../../assets/assets";

const Main = ({ input, setInput, messages, showResult, loading, onSent }) => {
  return (
    <div className="min-h-screen grow relative pb-32 flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between text-xl p-4 text-gray-500">
        <p>Gemini</p>
        <img
          src={assets.user_icon}
          className="w-12 h-12 shrink-0 rounded-full object-cover"
          alt="User"
        />
      </div>

      {/* Content Area */}
      <div className="max-w-3xl w-full m-auto px-4 overflow-y-auto flex-1">
        {!showResult ? (
          <>
            <div className="my-10 mx-0 p-2 text-6xl text-gray-200 font-bold">
              <p>
                <span className="bg-gradient-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  Hello, Sumit
                </span>
              </p>
              <p className="text-gray-400">How can I help you today?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2">
              <div
                onClick={() =>
                  onSent(
                    "Suggest beautiful places to see on an upcoming road trip",
                  )
                }
                className="h-44 p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-gray-200 transition"
              >
                <p className="text-sm text-gray-700">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img
                  src={assets.compass_icon}
                  className="absolute w-8 p-1 rounded-3xl bottom-3 right-3 bg-white shadow"
                  alt=""
                />
              </div>
              <div
                onClick={() =>
                  onSent("Briefly summarize this concept: urban planning")
                }
                className="h-44 p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-gray-200 transition"
              >
                <p className="text-sm text-gray-700">
                  Briefly summarize this concept: urban planning
                </p>
                <img
                  src={assets.bulb_icon}
                  className="absolute w-8 p-1 rounded-3xl bottom-3 right-3 bg-white shadow"
                  alt=""
                />
              </div>
              <div
                onClick={() =>
                  onSent(
                    "Brainstorm team bonding activities for our work retreat",
                  )
                }
                className="h-44 p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-gray-200 transition"
              >
                <p className="text-sm text-gray-700">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  src={assets.message_icon}
                  className="absolute w-8 p-1 rounded-3xl bottom-3 right-3 bg-white shadow"
                  alt=""
                />
              </div>
              <div
                onClick={() =>
                  onSent("Improve the readability of the following code")
                }
                className="h-44 p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-gray-200 transition"
              >
                <p className="text-sm text-gray-700">
                  Improve the readability of the following code
                </p>
                <img
                  src={assets.code_icon}
                  className="absolute w-8 p-1 rounded-3xl bottom-3 right-3 bg-white shadow"
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <div className="py-6 flex flex-col gap-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 ${msg.role === "user" ? "bg-transparent" : "bg-[#f8f9fa] p-4 rounded-xl"}`}
              >
                <img
                  src={
                    msg.role === "user"
                      ? assets.user_icon
                      : assets.gemini_icon || assets.bulb_icon
                  }
                  className="w-10 h-10 rounded-full shrink-0 object-cover"
                  alt={msg.role}
                />
                <div className="w-full overflow-hidden">
                  {msg.role === "user" ? (
                    <p className="text-lg font-medium text-gray-800 pt-1">
                      {msg.text}
                    </p>
                  ) : (
                    <div className="prose max-w-none text-gray-800">
                      <Markdown>{msg.text}</Markdown>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-4 bg-[#f8f9fa] p-4 rounded-xl">
                <img
                  src={assets.gemini_icon || assets.bulb_icon}
                  className="w-10 h-10 rounded-full shrink-0"
                  alt="Loading"
                />
                <div className="w-full flex flex-col gap-3 pt-2">
                  <hr className="border-none bg-gradient-to-r from-sky-500 via-[#f0f4f9] to-sky-500 bg-[length:800px_50px] animate-pulse h-4 rounded-full" />
                  <hr className="border-none bg-gradient-to-r from-sky-500 via-[#f0f4f9] to-sky-500 bg-[length:800px_50px] animate-pulse h-4 rounded-full" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Fixed Input Box */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 py-4 bg-white">
        <div className="flex items-center justify-between gap-2 px-4 py-3 bg-[#f0f4f9] rounded-full shadow-sm">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSent()}
            placeholder="Enter a prompt here..."
            className="bg-transparent border-none outline-none flex-1 text-sm text-gray-700 px-2"
          />

          <div className="flex items-center gap-3">
            <img
              src={assets.gallery_icon}
              alt="Gallery"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src={assets.mic_icon}
              alt="Mic"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              onClick={() => onSent()}
              src={assets.send_icon}
              alt="Send"
              className="w-5 h-5 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-2">
          Gemini may display inaccurate info, including about people, so
          double-check its responses.
        </p>
      </div>
    </div>
  );
};

export default Main;
