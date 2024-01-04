import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showdropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((items) => items.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  async function fetchUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users, filteredUsers);

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <input
        placeholder="Seaech Users..."
        value={searchParam}
        onChange={handleChange}
      />

      {
        showdropDown ? <Suggestions data={filteredUsers}/> : null
      }
    </div>
  );
}
