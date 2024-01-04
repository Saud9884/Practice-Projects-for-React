import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import "./styles.css";

export default function GithubProfile() {
  const [userName, setUserName] = useState("Saud9884");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithuProfile() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();

      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch() {
    fetchGithuProfile();
  }

  useEffect(() => {
    fetchGithuProfile();
  }, []);

  if (loading) {
    return <div>Loading Data...</div>;
  }
  return (
    <div>
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search Github Profile by Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {userData !== null ? <User user={userData} /> : "something wrong"}
      </div>
    </div>
  );
}
