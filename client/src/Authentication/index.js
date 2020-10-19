import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const call = async () => {
      const isAuth = await Axios.get("/api/authenticated")
        .then((data) => {
          setAuthenticated(data.data.authenticated);
        })
        .catch((err) => console.log(err));

      return isAuth;
    };

    call();
  }, []);

  return (
    <div>
      {load ? (
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
          {children}
        </AuthContext.Provider>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
