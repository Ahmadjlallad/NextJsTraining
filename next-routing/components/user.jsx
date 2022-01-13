import React from "react";

function user({ user }) {
  const { name, email, id } = user;
  return (
    <div key={id}>
      <div>name: {name}</div>
      <div>email: {email}</div>
    </div>
  );
}

export default user;
