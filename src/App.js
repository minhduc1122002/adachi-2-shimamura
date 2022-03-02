import Chapter from "./chapter/chapter";
import Header from "./header/header";
import Navigation from "./navigation/navigation";
import "./App.css"
import Footer from "./footer/footer";
import Home from "./home/home";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Navigation/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:path/id=:id" element={<Chapter/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
