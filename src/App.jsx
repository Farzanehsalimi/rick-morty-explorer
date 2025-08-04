import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./shared/layout/Layout";
import Home from "./features/characters/pages/Home";
import CharacterDetail from "./features/characters/pages/CharacterDetail";
import Locations from "./features/locations/pages/Locations";
import LocationDetails from "./features/locations/pages/LocationDetails";
import Episodes from "./features/episodes/pages/Episodes";
import EpisodeDetails from "./features/episodes/pages/EpisodeDetails";
import PageTransitionWrapper from "./shared/components/PageTransitionWrapper";
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
