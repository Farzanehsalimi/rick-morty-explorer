import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./ui/AppLayout";
import PageTransitionWrapper from "./ui/PageTransitionWrapper";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import Locations from "./pages/Locations";
import LocationDetails from "./pages/LocationDetails";
import Episodes from "./pages/Episodes";
import EpisodeDetails from "./pages/EpisodeDetails";
import { DarkModeProvider } from "./context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
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
              <Route
                path="*"
                element={
                  <PageTransitionWrapper>
                    <NotFound />
                  </PageTransitionWrapper>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
