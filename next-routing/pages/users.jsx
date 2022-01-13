import React from "react";
import User from "../components/user";

function users({ users }) {
  return (
    <>
      <div>users</div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}

export default users;
export async function getStaticProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  return {
    props: {
      users: data,
    },
  };
}
