import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://192.168.8.149/",
  realm: "elephant",
  clientId: "public-client",
});

export default keycloak;
