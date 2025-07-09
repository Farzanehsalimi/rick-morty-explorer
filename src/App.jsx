import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import CharacterDetail from "./pages/CharacterDetails/CharacterDetail";
import Locations from "./pages/Locations/Locations";
import LocationDetails from "./pages/LocationDetails/LocationDetails";
import Episodes from "./pages/Episodes/Episodes";
import EpisodeDetails from "./pages/EpisodeDetails/EpisodeDetails";
import { NavModalProvider } from "./contexts/NavModalContext";

function App() {
  return (
    <NavModalProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home key={window.location.pathname} />} />
          <Route path="character/:id" element={<CharacterDetail />} />
          <Route path="locations" element={<Locations />} />
          <Route path="location/:id" element={<LocationDetails />} />
          <Route path="episodes" element={<Episodes />} />
          <Route path="episode/:id" element={<EpisodeDetails />} />
        </Route>
      </Routes>
    </NavModalProvider>
  );
}

export default App;
