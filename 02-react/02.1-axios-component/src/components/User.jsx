import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  /* En caso de que recibe un objeto vacio useState se debe verificar donde debe ir el encadanamiento opcional */
  const [user, setUser] = useState({});

  useEffect(() => {
    const URL = "https://randomuser.me/api/";
    axios
      .get(URL)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.error(err));
  }, []);
  console.log(user?.name);
  return (
    <div>
      <img src={user.picture?.medium} alt="" />
      <h1>{`${user.name?.title} ${user.name?.first} ${user.name?.last}`}</h1>
      <p>{`${user?.email}`}</p>
      <p>{`${user.location?.city}`}</p>
      <p>{`${user.location?.country}`}</p>
      <p>{`${user.location?.gender}`}</p>
    </div>
  );
};

export default User;
