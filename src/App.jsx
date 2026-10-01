import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./components/About.jsx";
import StoryPage from "./components/StoryPage.jsx";
import Ending from "./components/Ending.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/ending" element={<Ending />} />
      </Routes>
    </>
  );
}
