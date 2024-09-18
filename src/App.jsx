import "./App.css";
import "./assets/scss/loader.scss";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog/blog-grid";
import About from "./pages/About/About";
import Contact from "./pages/contact";
import Tours from "./pages/Tours/Tours";
import CommingSoon from "./pages/CommingSoon/CommingSoon";
import Terms from "./pages/Terms/terms";
import PageMaps from "./pages/Maps/PageMaps";
import BlogDetail from "./pages/Blog/BlogDetail";
import Destination4 from "./pages/Destination/Destination";
import BlogArt from "./pages/Art/BlogArt";
import HotelDetail from "./pages/Hotels/HotelDetail";
import HotelDetail2 from "./pages/Hotels/HotelDetail2";
import NotFound from "./pages/NotFound";

const HomePage = lazy(() => import("./pages/Home/HomePage"));

export const Preloader = () => (
  <div id="loader">
    <div id="bird">
      <div className="lowerLip"></div>
      <div className="crest"></div>
      <div className="face"></div>
      <div className="cheek"></div>
      <div className="eye"></div>
      <div className="upperLip"></div>
    </div>
  </div>
);

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/arte" element={<BlogArt />} />
      <Route path="/arte/arqueología" element={<HomePage />} />
      <Route path="/ciencia" element={<BlogDetail />} />
      <Route path="/ciencia/meteorología" element={<BlogDetail />} />
      <Route path="/ciencia/hidrología" element={<BlogDetail />} />
      <Route path="/ecología" element={<HomePage />} />
      <Route path="/fauna" element={<HomePage />} />
      <Route path="/flora" element={<HomePage />} />
      <Route path="/transporte" element={<HomePage />} />
      <Route path="/hoteles" element={<HotelDetail2 />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/tours-especiales" element={<HomePage />} />
      <Route path="/tours-aveturismo" element={<HomePage />} />
      <Route path="/mapas" element={<PageMaps />} />
      <Route path="/maps" element={<PageMaps />} />
      <Route path="/cantacto" element={<HomePage />} />
      <Route path="/acerca_de" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/comming-soon" element={<CommingSoon />} />
      <Route path="/destination" element={<Destination4 />} />
      <Route path="/destination" element={<Destination4 />} />
      <Route path="/tikal" element={<Destination4 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
