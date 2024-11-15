
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Paquetes from "./Pages/Paquetes";

import Header from "./components/Header";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
     <Router>
     <Header />
     <Navbar />
     <Routes>
     
      <Route path="/" element={<HomePage />}/>
      <Route path="/Paquetes" element={<Paquetes />}/>
      <Route path="/*" element={<NotFound />}/>
      
     </Routes>
     <Footer />

     </Router>

    </>
  );
}

export default App;
