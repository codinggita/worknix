// // UserContext.js
// import React, { createContext, useState, useContext } from "react";

// // Create context
// export const UserContext = createContext();

// // UserProvider component that will wrap the app and provide the context value
// export const UserProvider = ({ children }) => {
//   const [username, setUsername] = useState("Default User"); // Default or fetched username

//   return (
//     <UserContext.Provider value={{ username, setUsername }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to use UserContext
// export const useUserContext = () => useContext(UserContext);

// UserContext.jsx
import React, { createContext, useState, useContext } from "react";

// Create the UserContext
const UserContext = createContext();

// UserProvider component to wrap the part of the app that needs access to the context
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext
export const useUser = () => useContext(UserContext);
