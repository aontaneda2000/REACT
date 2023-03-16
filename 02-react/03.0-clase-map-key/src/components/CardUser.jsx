import React from "react";

const CardUser = ({ user }) => {
  console.log(user);
  return (
    <article>
      <img src={user.picture.large} alt="" />
      <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
    </article>
  );
};

export default CardUser;
