import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://localhost:8080/",
  realm: "example",
  clientId: "public-client",
});

export default keycloak;
