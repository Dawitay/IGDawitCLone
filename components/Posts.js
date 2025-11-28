import React, { use } from 'react'
import Post from './Post';

export default function Posts() {
    const posts = [
      {
        id: 1,
        username: "john_doe",
        userImg: "https://i.pravatar.cc/150?u=1",
        img: "https://picsum.photos/500/500?random=1",
        caption: "Enjoying the sunny day!", 
    },

      {
        id: 2, 
        username: "jane_smith",
        userImg: "https://i.pravatar.cc/150?u=2",
        img: "https://picsum.photos/500/500?random=2",
        caption: "Another day, another post."
    },

      {
        id: 3,
        username: "alice_wonder",
        userImg: "https://i.pravatar.cc/150?u=3",
        img: "https://picsum.photos/500/500?random=3",
        caption: "Loving this new app!"
    },

    ]
  return (
    <div>
        {posts.map(post => (
          <Post
            key={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        ))}
    </div>
  )
}
