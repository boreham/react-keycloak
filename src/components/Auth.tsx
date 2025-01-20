import { useKeycloak } from "@react-keycloak/web";

const Auth = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      {!keycloak.authenticated ? (
        <>
          <button onClick={() => keycloak.login()}>Войти</button>
          <button onClick={() => keycloak.register()}>Регистрация</button>
        </>
      ) : (
        <>
          <h2>Привет, {keycloak.tokenParsed?.preferred_username}!</h2>
          <button onClick={() => keycloak.logout()}>Выйти</button>
        </>
      )}
    </div>
  );
};

export default Auth;
