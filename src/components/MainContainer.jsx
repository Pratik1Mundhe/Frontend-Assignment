import { useEffect, useState } from "react";
import Users from "./Users";

const MainContainer = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    console.log("Fetched data:", data);
    // setUsers(data.users); // This will correctly update the state
    setUsers(data.users.filter((user) => user.id<10))
  };

  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <Users users={users} setUsers={setUsers} />
    </div>
  );
};

export default MainContainer;
