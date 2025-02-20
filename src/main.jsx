import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

function Root() {
   return (
      <>
         <App />
         <Toaster position="top-center" reverseOrder={false} />
      </>
   );
}

createRoot(document.getElementById("root")).render(<Root />);
