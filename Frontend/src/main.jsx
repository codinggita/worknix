// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { LoadingProvider } from './components/Common/LoadingContext.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <LoadingProvider>
//       <App />
//     </LoadingProvider>
//   </StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoadingProvider } from "./components/Common/LoadingContext.jsx";
import { AuthProvider } from "./AuthContext"; // Import AuthProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </AuthProvider>
  </StrictMode>
);
