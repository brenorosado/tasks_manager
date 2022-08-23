import { GlobalStyle } from "./styles/Global";
import { RoutesContainer } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./store/UserContext";
import { LoadingProvider } from "./store/LoadingContext";

import { Loading } from "./components/Loading/Loading";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <UserProvider>
          <Loading />
          <ToastContainer />
          <GlobalStyle/>
          <RoutesContainer />
        </UserProvider>
      </LoadingProvider>
    </>
  );
};

export default App;
