import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/api/posts");
    setPosts(res.data);
  };

  const createPost = async () => {
    await axios.post("http://localhost:5000/api/posts", {
      title,
      content: "Hello world",
      type: "story",
      authorId: "user1",
    });
    setTitle("");
    fetchPosts();
  };

  const likePost = async (id) => {
    await axios.put(`http://localhost:5000/api/posts/like/${id}`);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🔥 VibeCon</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <button onClick={createPost}>Post</button>

      {posts.map((p) => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <button onClick={() => likePost(p._id)}>
            ❤️ {p.likes}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;