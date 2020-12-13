import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      {/* <Skills /> */}
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
