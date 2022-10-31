import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import LandingPage from "./pages/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
