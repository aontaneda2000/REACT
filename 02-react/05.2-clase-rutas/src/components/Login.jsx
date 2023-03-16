import React from "react";

const Login = ({ changeIsLogged }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    changeIsLogged();
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
