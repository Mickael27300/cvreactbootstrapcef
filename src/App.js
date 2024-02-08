import './App.css';
import {Routes,Route} from "react-router-dom";

import Blog from "./pages/pageBlog/Blog.js";
import Home from "./pages/pageHome/Home.js";
import Realisation from "./pages/pageRealisation/Realisation.js";
import Service from "./pages/pageService/Service.js";
import Contact from "./pages/pageContact/Contact.js";
import Legal from "./pages/pageLegal/Legal.js";
import Github from './pages/pageGithub/Github';

import Header from './component/Header/Header.js';
import Footer from './component/Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Services" element={<Service/>}></Route>
          <Route path="/Realisation" element={<Realisation/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Legal" element={<Legal/>}></Route>
          <Route path="/Github" element={<Github/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
