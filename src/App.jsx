
import Header from "./components/header.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./components/Hello/hello.jsx";
import Aboutme from "./components/About/about.jsx";
import Projects from "./components/Projects/project.jsx";
import Contacts from "./components/Contact/contact.jsx";


const App = () => {
  return (
    <>

    
     <BrowserRouter>
      {/*============ Header Componets Adding =============  */}
      <Header/>
      <Routes>
         
        <Route>
           <Route path="/" element={<Hello/>} />
           <Route path="/hello" element={<Hello/>} />
           <Route path="/about" element={<Aboutme/>}/>
           <Route path="/projects" element={<Projects/>}/>
           <Route path="/contacts" element={<Contacts/>}/>
        </Route>

      </Routes>

    </BrowserRouter>
     
    </>
  )
}

export default App