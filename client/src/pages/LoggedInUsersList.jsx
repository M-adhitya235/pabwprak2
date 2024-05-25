import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode"; 

export default function LoggedInUsersList() {
  const [cookies] = useCookies(["TOKEN"]);
  const [loggedInUsers, setLoggedInUsers] = useState([]);

  useEffect(() => {
    if (cookies.TOKEN) {
      const decodedToken = jwtDecode(cookies.TOKEN);
      // Misalnya, jika token menyimpan email pengguna
      const userEmail = decodedToken.email;
      // Anda bisa menambahkan email pengguna ke dalam daftar loggedInUsers
      setLoggedInUsers(prevUsers => [...prevUsers, userEmail]);
    }
  }, [cookies.TOKEN]);

  return (
    <div>
      <h2>Logged In Users</h2>
      <ul>
        {loggedInUsers.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
}
