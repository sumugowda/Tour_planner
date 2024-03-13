import Tours from "./components/Tours";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Footer from "./components/Footer";

 
const App = () => {
  return (
    <div className="app">
    <Tours />
    <ToastContainer position="top-right" autoClose={2500} />
    <Footer />
    </div>
    
  );
}


export default App;
