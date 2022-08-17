import { GlobalStyle } from "./styles/Global";
import { RoutesContainer } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./store/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <ToastContainer />
        <GlobalStyle/>
        <RoutesContainer />
      </UserProvider>
    </>
  );
};

export default App;
