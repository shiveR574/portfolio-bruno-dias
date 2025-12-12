import "./App.css"
import NavBar from "./components/NavBar.tsx";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Projects from "./pages/Projects.tsx"

function App() {

  return (
    <>
      <NavBar/>
        <main className="main-content">          
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            {/*<Route path="/techstack" element={<TechStack/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>*/}
          </Routes>
        </main>
    </>
  )
}

export default App;
