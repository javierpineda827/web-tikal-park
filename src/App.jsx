import "./App.css";
import "./assets/scss/loader.scss";
import { Suspense, lazy } from "react";
import { useRouteError } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Blog = lazy(() => import("./pages/Blog/blog-grid"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/contact"));
const Tours = lazy(() => import("./pages/Tours/Tours"));
const CommingSoon = lazy(() => import("./pages/CommingSoon/CommingSoon"));
const Terms = lazy(() => import("./pages/Terms/terms"));
const PageMaps = lazy(() => import("./pages/Maps/PageMaps"));
const BlogDetail = lazy(() => import("./pages/Blog/BlogDetail"));
const Destination4 = lazy(() => import("./pages/Destination/Destination"));
const ArtsPage = lazy(() => import("./pages/Art/BlogArt"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ListHotelDetail2 = lazy(() => import("./pages/Hotels/ListHotel"));
const PageTransport = lazy(() =>
  import("./pages/Transportation/PageTransport")
);

import "./assets/css/styles.css";
import ParkReg from "./pages/TikalPark/ParkReg";
import ParkMag from "./pages/ParkMag/parkmag";
import Arts from "./pages/Art/Arts";
import Science from "./pages/Science/Science";
import SpecialTours from "./pages/Tours/SpecialTours";
import BirdingTours from "./pages/Tours/BirdingTours";
import Map from "./pages/Maps/Map";
import MapPennsylvania from "./pages/Maps/MapPennsylvania";
import TikalTrivia from "./pages/TikalPark/TikalTrivia";
import Co2Offset from "./pages/TikalPark/Co2Offset";
import Explorers from "./pages/Art/Explorers";
import TikGua from "./pages/Home/TikGua";
import Transport from "./pages/Transportation/Transport";
import Hotels from "./pages/Hotels/Hotels";
import Helitours03 from "./pages/Tours/Helitours03";
import Archaeology from "./pages/Archaeology";
import Ballcourts from "./pages/Ballcourts";
import Ancient from "./pages/Ancient";
import Calendar from "./pages/Calendar";
import Museums from "./pages/Museums";
import Twin from "./pages/Twin";
import Group from "./pages/Group";
import Temple from "./pages/Temple";
import Dynasty from "./pages/Dynasty";
import Glyph from "./pages/Glyph";
import Lostworld from "./pages/Lostworld";
import Grandplaza from "./pages/Grandplaza";
import Causeway from "./pages/Causeway";
import Penn from "./pages/Penn";
import Tiktour from "./pages/Tours/Tiktour";
import Tikbz from "./pages/tikbz";

const BlogAcropolis = lazy(() => import("./pages/Blog/BlogAcropolis"));

const BlogMeteorology = lazy(() => import("./pages/Blog/BlogMeteorology"));
const BlogTikal = lazy(() => import("./pages/Blog/BlogTikal"));
const BlogEcology = lazy(() => import("./pages/Blog/BlogEcology"));
const BlogHydrology = lazy(() => import("./pages/Blog/BlogHydrology"));
const BlogFauna = lazy(() => import("./pages/Blog/BlogFauna"));
const BlogFlora = lazy(() => import("./pages/Blog/BlogFlora"));
const BlogMayas = lazy(() => import("./pages/Blog/BlogMayas"));

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const WelcomeToTikal = lazy(() => import("./pages/Home/WelcomeToTikal"));

export const PreloaderBird = () => (
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

export const Preloader = () => (
  <div id="loader-tikal">
    <img src="/imgs/template/logo.png" loading="eager" width={360} />
  </div>
);

function AppRoutes() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<HomePage />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/tikalpark"
        element={<HomePage />}
        errorElement={<ErrorBoundary />}
      />

      <Route
        exact
        path="/parkreg"
        element={<ParkReg />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/parkmag"
        element={<ParkMag />}
        errorElement={<ErrorBoundary />}
      />

      <Route
        exact
        path="/tikal_home"
        element={<WelcomeToTikal />}
        errorElement={<ErrorBoundary />}
      />

      <Route
        exact
        path="/home"
        element={<HomePage />}
        errorElement={<ErrorBoundary />}
      />

      <Route
        exact
        path="/tikgua"
        element={<TikGua />}
        errorElement={<ErrorBoundary />}
      />

      <Route
        exact
        path="/arts"
        element={<Arts />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/explorers"
        element={<Explorers />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/science"
        element={<Science />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/transport"
        element={<Transport />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/hotels"
        element={<Hotels />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/temple"
        element={<Temple />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/lodging"
        element={<ArtsPage />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/glyph"
        element={<Glyph />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/dynasty"
        element={<Dynasty />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/specialtours"
        element={<SpecialTours />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/archaeology"
        element={<Archaeology />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/ballcourts"
        element={<Ballcourts />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/ancient"
        element={<Ancient />}
        errorElement={<ErrorBoundary />}
      />

      <Route
        exact
        path="/birdingmenu"
        element={<BirdingTours />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/group"
        element={<Group />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/twin"
        element={<Twin />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/museums"
        element={<Museums />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/tours"
        element={<Tours />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/tiktour"
        element={<Tiktour />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/tikbz"
        element={<Tikbz />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/maps"
        element={<Map />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/helitours03"
        element={<Helitours03 />}
        errorElement={<ErrorBoundary />}
      />

      <Route
        exact
        path="/penn"
        element={<Penn />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/MapPennsylvania"
        element={<MapPennsylvania />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/aboutmenu"
        element={<About />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/e-mail us"
        element={<ArtsPage />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/site map"
        element={<ArtsPage />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/tikaltrivia"
        element={<TikalTrivia />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/co2offset"
        element={<Co2Offset />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/contact"
        element={<Contact />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/acropolis"
        element={<BlogAcropolis />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/meteorology"
        element={<BlogMeteorology />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/calendar"
        element={<Calendar />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/lostworld"
        element={<Lostworld />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/causeways"
        element={<Causeway />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/grandplaza"
        element={<Grandplaza />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/hydrology"
        element={<BlogHydrology />}
        errorElement={<ErrorBoundary />}
      />

      <Route
        exact
        path="/fauna"
        element={<BlogFauna />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/flora"
        element={<BlogFlora />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        exact
        path="/ecology"
        element={<BlogEcology />}
        errorElement={<ErrorBoundary />}
      />
    </Routes>

    // <Routes>
    //   <Route
    //     exact
    //     path="/"
    //     element={<HomePage />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/arts"
    //     element={<BlogArt />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/acropolis"
    //     element={<BlogAcropolis />}
    //     errorElement={<ErrorBoundary />}
    //   />

    //   <Route
    //     exact
    //     path="/meteorology"
    //     element={<BlogMeteorology />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/hydrology"
    //     element={<BlogHydrology />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/tikal"
    //     element={<BlogTikal />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/tikal_trivia"
    //     element={<BlogTikal />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/arts/arqueología"
    //     element={<HomePage />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/science"
    //     element={<BlogDetail />}
    //     errorElement={<ErrorBoundary />}
    //   />

    //   <Route
    //     exact
    //     path="/fauna"
    //     element={<BlogFauna />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/flora"
    //     element={<BlogFlora />}
    //     errorElement={<ErrorBoundary />}
    //   />

    //   <Route
    //     exact
    //     path="/meteorologia"
    //     element={<BlogMeteorology />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/hydrology"
    //     element={<BlogHydrology />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/ecology"
    //     element={<BlogEcology />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/fauna"
    //     element={<HomePage />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/flora"
    //     element={<HomePage />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/transport"
    //     element={<PageTransport />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/hotels"
    //     element={<ListHotelDetail2 />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/tours"
    //     element={<Tours />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/tours/tours-especiales"
    //     element={<HomePage />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/tours-aveturismo"
    //     element={<HomePage />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/maps"
    //     element={<PageMaps />}
    //     errorElement={<ErrorBoundary />}
    //   />

    //   <Route
    //     exact
    //     path="/mayas"
    //     element={<BlogMayas />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/maps"
    //     element={<PageMaps />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/cantacto"
    //     element={<HomePage />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/acerca_de"
    //     element={<HomePage />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/blog"
    //     element={<Blog />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/about"
    //     element={<About />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/contact"
    //     element={<Contact />}
    //     errorElement={<ErrorBoundary />}
    //   />

    //   <Route
    //     exact
    //     path="/comming-soon"
    //     element={<CommingSoon />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/destination"
    //     element={<Destination4 />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/destination"
    //     element={<Destination4 />}
    //     errorElement={<ErrorBoundary />}
    //   />

    //   <Route
    //     exact
    //     path="/services"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/service-conditions"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/privacy"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/privacy-policy"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/security"
    //     element={<Destination4 />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/terms-legals"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/security"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/privacy-policy"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/aboutmenu"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/contact-us"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/services"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/service-conditions"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/privacy"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/cookie-policy"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/data-processing"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/data-policy"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/refund-policy"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/privacy-policy"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/legal-notice"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route
    //     exact
    //     path="/Accesibilidad"
    //     element={<Terms />}
    //     errorElement={<ErrorBoundary />}
    //   />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
  );
}

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
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
