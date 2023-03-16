import React from "react";

const Card = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h2>{`${users[0].name.first} ${users[0].name.last}`}</h2>
      <img src={users[0].picture.large} alt="" />
    </div>
  );
};

export default Card;
