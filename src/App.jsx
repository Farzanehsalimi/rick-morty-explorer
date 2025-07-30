import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import CharacterDetail from "./pages/CharacterDetails/CharacterDetail";
import Locations from "./pages/Locations/Locations";
import LocationDetails from "./pages/LocationDetails/LocationDetails";
import Episodes from "./pages/Episodes/Episodes";
import EpisodeDetails from "./pages/EpisodeDetails/EpisodeDetails";
import PageTransitionWrapper from "./components/PageTransitionWrapper/PageTransitionWrapper";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PageTransitionWrapper>
                <Home />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="character/:id"
            element={
              <PageTransitionWrapper>
                <CharacterDetail />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="locations"
            element={
              <PageTransitionWrapper>
                <Locations />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="location/:id"
            element={
              <PageTransitionWrapper>
                <LocationDetails />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="episodes"
            element={
              <PageTransitionWrapper>
                <Episodes />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="episode/:id"
            element={
              <PageTransitionWrapper>
                <EpisodeDetails />
              </PageTransitionWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
