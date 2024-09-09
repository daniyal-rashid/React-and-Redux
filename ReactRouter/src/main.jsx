import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

const Setting = () => {
  return (
    <div>
      <h1>Settings Page</h1>
    </div>
  );
};

const User = () => {
  const params = useParams();
  return (
    <div>
      <h1>Your name is {params.username}</h1>
    </div>
  );
};

const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data.map((post) => (
        <NavLink
          style={{
            display: "block",
            textDecoration: "none",
            color: "black",
            borderBottom: "1px solid black",
            width: "50%",
            margin: "auto",
            padding: "10px",
            fontSize: "20px",
          }}
          to={`/post/${post.id}`}
        >
          {post.id} - {post.title}
        </NavLink>
      ))}
    </div>
  );
};

const Post = () => {
  const params = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  if (data === null) return <p>Loading...</p>;
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
