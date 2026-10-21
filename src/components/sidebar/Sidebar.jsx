import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = ({
  onSent,
  prevPrompts,
  newChat,
  onOpenSettings,
  onOpenHelp,
  onOpenActivity,
}) => {
  const [extended, setExtended] = useState(false);

  return (
    <div
      className={`min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-4 py-2 transition-all duration-300 ease-in-out ${
        extended ? "w-64" : "w-20"
      }`}
    >
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="w-6 h-6 block ml-2 cursor-pointer"
          src={assets.menu_icon}
          alt="Menu"
        />

        {/* New Chat Button */}
        <div
          onClick={newChat}
          className={`inline-flex items-center mt-8 bg-[#e6eaf1] rounded-3xl cursor-pointer text-sm text-gray-500 transition-all duration-300 ${
            extended ? "p-3 gap-3 w-full" : "p-3 justify-center"
          }`}
        >
          <img
            src={assets.plus_icon}
            alt="New Chat"
            className="w-5 h-5 shrink-0"
          />
          {extended && (
            <p className="whitespace-nowrap font-medium text-gray-700">
              New Chat
            </p>
          )}
        </div>

        {/* Recent Prompts Section */}
        {extended && (
          <div className="flex flex-col overflow-hidden mt-4">
            <p className="mb-2 text-gray-400 text-xs whitespace-nowrap">
              Recent
            </p>
            <div className="max-h-60 overflow-y-auto flex flex-col gap-1">
              {prevPrompts.map((item, index) => (
                <div
                  key={index}
                  onClick={() => onSent(item)}
                  className="flex items-center gap-3 p-2 rounded-2xl cursor-pointer hover:bg-[#e6eaf1] overflow-hidden text-gray-700 text-sm"
                >
                  <img
                    src={assets.message_icon}
                    alt="Chat"
                    className="w-5 h-5 shrink-0"
                  />
                  <span className="whitespace-nowrap truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer Icons with Handlers */}
      <div className="flex flex-col gap-1 mb-2">
        <div
          onClick={onOpenHelp}
          className={`flex items-center p-2 rounded-2xl cursor-pointer hover:bg-[#e6eaf1] text-gray-700 ${
            extended ? "gap-3" : "justify-center"
          }`}
        >
          <img
            src={assets.question_icon}
            alt="Help"
            className="w-5 h-5 shrink-0"
          />
          {extended && <span className="whitespace-nowrap text-sm">Help</span>}
        </div>
        <div
          onClick={onOpenActivity}
          className={`flex items-center p-2 rounded-2xl cursor-pointer hover:bg-[#e6eaf1] text-gray-700 ${
            extended ? "gap-3" : "justify-center"
          }`}
        >
          <img
            src={assets.history_icon}
            alt="Activity"
            className="w-5 h-5 shrink-0"
          />
          {extended && (
            <span className="whitespace-nowrap text-sm">Activity</span>
          )}
        </div>
        <div
          onClick={onOpenSettings}
          className={`flex items-center p-2 rounded-2xl cursor-pointer hover:bg-[#e6eaf1] text-gray-700 ${
            extended ? "gap-3" : "justify-center"
          }`}
        >
          <img
            src={assets.setting_icon}
            alt="Settings"
            className="w-5 h-5 shrink-0"
          />
          {extended && (
            <span className="whitespace-nowrap text-sm">Settings</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
