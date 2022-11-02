import { createContext, useState } from "react";

export const HaviContext = createContext();

const HaviContextProvider = ({ children }) => {
  const [role, setRole] = useState("");
const [regName,setRegName]=useState("")
  return (
    <HaviContext.Provider
      value={{
       role,setRole,regName,setRegName,
      }}
    >
      {children}
    </HaviContext.Provider>
  );
};

export default HaviContextProvider;