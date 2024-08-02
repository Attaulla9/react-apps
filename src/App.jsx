import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Navbar from "@components/common/Navbar";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Form from "./pages/Form"
// import Redux from "@pages/Redux";

function App() {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8  ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/form" element={<Form />} />


          {/* <Route path="/redux" element={<Redux />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
