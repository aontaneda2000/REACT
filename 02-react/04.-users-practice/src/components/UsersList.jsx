import React from "react";

const UsersList = ({ user }) => {
  return (
    <article className="card__user">
      <h2>{`${user["first_name"]} ${user["last_name"]}`}</h2>
      <ul>
        <li>{user.email}</li>
        <li>{user.birthday}</li>
      </ul>
      <button className="card__btn">Update</button>
      <button className="card__btn">Delete</button>
    </article>
  );
};

export default UsersList;
