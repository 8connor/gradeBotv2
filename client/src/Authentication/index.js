import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";

export const AuthContext = createContext();

export default ({ children }) => {
  const [user, setUser] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const call = async () => {
      const isAuth = await Axios.get("/api/authenticated")
        .then((data) => {
          console.log("ran the auth")
          console.log(data.data)
          setUser(data.data);
        })
        .catch((err) => console.log(err));

      return isAuth;
    };

    call();
  }, []);

  return (
    <div>
      {load ? (
        <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
