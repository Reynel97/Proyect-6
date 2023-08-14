import axios from "axios";

const useAuth = () => {
  //CREATE
  const createUser = (data, navigate) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  //LOGIN
  const loginUser = (data, navigate) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        navigate("/");
        const userToken = res.data.token;
        localStorage.setItem("token", userToken);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
      });
  };

  return { createUser, loginUser };
};

export default useAuth;
