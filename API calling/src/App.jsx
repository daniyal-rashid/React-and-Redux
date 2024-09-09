import { useEffect, useState } from "react";

import "./App.css";
import { getPosts, getRandomUser } from "./api";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };

  return (
    <>
      {userData && <UserCard data={userData} />}
      <button onClick={refresh} className="btn">
        Refresh User
      </button>

      {data ? (
        data.map((item) => <PostCard title={item.title} body={item.body} />)
      ) : (
        <p>No data</p>
      )}
    </>
  );
}

export default App;
