import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const [data, setData] = useState({});
  const a = useParams(); 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${a.id}`)
      .then((res) => res.json())
      .then((q) => {
        console.log(q);
        setData(q);
      })
      .catch((err) => console.log("Error fetching user:", err));
  }, [a.id]);

  return (
    <center>
      <h1 style={{ color: "green" }}>User Details</h1>
      {data.id ? (
        <div style={{
          border: "2px solid #ccc",
          padding: "20px",
          width: "50%",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
          textAlign: "left"
        }}>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Username:</strong> {data.username}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Website:</strong> {data.website}</p>
          <p><strong>Company:</strong> {data.company?.name}</p>
          <p><strong>Address:</strong> {data.address?.street}, {data.address?.city}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </center>
  );
}

export default UserDetails;

