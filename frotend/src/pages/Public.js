import React from "react";
import Keycloak from "keycloak-js";

const Public = () => {
  const client = new Keycloak({
    url: "http://localhost:8080",
    realm: "faizan",
    clientId: "myclient",
  });

  const logout = () => {
    client.logout();
  };

  return (
    <div>
      Public
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Public;
