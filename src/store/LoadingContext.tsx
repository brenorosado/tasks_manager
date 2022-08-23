import { createContext, useContext, useState } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: (active: boolean) => void;
}

interface LoadingProviderTypes {
  children: React.ReactNode
}

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => true
});

export const LoadingProvider = ({ children }: LoadingProviderTypes) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if(!context) throw new Error("useUserActions must be used within a UserProvider");
  const { loading, setLoading } = context;
  return { loading, setLoading };
};