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
            content: "Sample content",
            type: "story",
            authorId: "123",
        });
        fetchPosts();
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Anonymous Writing Platform</h1>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
            />
            <button onClick={createPost}>Create</button>

            {posts.map((p) => (
                <div key={p._id}>
                    <h3>{p.title}</h3>
                    <p>Likes: {p.likes}</p>
                </div>
            ))}
        </div>
    );
}

export default App;