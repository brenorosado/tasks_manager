import { createContext, useCallback, useContext, useState } from "react";
import { accounts } from "../services/accounts";
import { User } from "../entities/user";

interface UserContextTypes {
  userData: User;
  // eslint-disable-next-line @typescript-eslint/ban-types
  getUserData: Function;
}

interface UserProviderTypes {
  children: React.ReactNode
}

const initialValues = {
  id: "",
  name: "",
  email: "",
  createdAt: ""
};

const UserContext = createContext<UserContextTypes>({
  userData: initialValues,
  getUserData: () => initialValues
});

const logout = () => {
  if(window.location.pathname === "/login" || window.location.pathname === "/") return;
  localStorage.removeItem("@my_tasks_id");
  localStorage.removeItem("@my_tasks_token");
  window.location.href = "/login";
};

export const UserProvider = ({ children }: UserProviderTypes) => {
  const [userData, setUserData] = useState<User>(initialValues);

  const accountId = localStorage.getItem("@my_tasks_id");

  const getUserData = useCallback(
    async () => {
      if(userData.id) return userData;
      if(accountId) {
        try {
          const accountRes = await accounts.getAccountById(accountId);
          setUserData(accountRes.data);
          return accountRes.data;
        } catch (e) {
          console.log(e);
          logout();
        }
      }
    }, [accountId]
  ); 

  return (
    <UserContext.Provider value={{ userData, getUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if(!context) throw new Error("useUserActions must be used within a UserProvider");
  const { userData, getUserData } = context;
  return { userData, getUserData };
};