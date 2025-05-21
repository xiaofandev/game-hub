import { Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Route>
    </Routes>
  );
};

export default Routing;
