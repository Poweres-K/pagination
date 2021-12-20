import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (followers.length === 0) {
      setFollowers(data);
    }
  }, [data, followers.length]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading" : "pagination"}</h1>
        <div className="underline"></div>
        {!loading && <Follower followers={followers} />}
      </div>
    </main>
  );
}

export default App;
