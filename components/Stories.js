"use client";

import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Story from "./Story";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    // Correct minifaker syntax: array(length, callback)
    const stories = minifaker.array(20, (i) => ({
      id: i,
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?u=${Math.ceil(Math.random() * 80)}`,
    }));

    setStoryUsers(stories);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {storyUsers.map((user) => (
        <Story
          key={user.id}
          username={user.username}
          img={user.img}
        />
      ))}
    </div>
  );
}
