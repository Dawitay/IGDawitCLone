"use client"
import React, { useEffect, useState } from 'react';
import minifaker from "minifaker";
import "minifaker/locales/en"; // required for name generation

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestionsArr = minifaker.array(5, i => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
      avatar: `https://i.pravatar.cc/150?img=${i + 10}` // add profile image
    }));

    setSuggestions(suggestionsArr);
  }, []);

  return (
    <div className="mt-4 ml-10">
      
      {/* Header */}
      <div className="flex justify-between mb-4 text-sm">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-xs font-semibold text-gray-600">See All</button>
      </div>

      {/* Suggestion List */}
      {suggestions.map(user => (
        <div 
          key={user.id} 
          className="flex items-center justify-between mt-3"
        >
          <img 
            src={user.avatar} 
            className="h-10 w-10 rounded-full border p-[2px]"
          />

          <div className="flex-1 ml-4">
            <h4 className="font-semibold text-sm">{user.username}</h4>
            <p className="text-xs text-gray-500">{user.jobTitle}</p>
          </div>

          <button className="text-blue-500 text-xs font-bold hover:text-blue-700">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
