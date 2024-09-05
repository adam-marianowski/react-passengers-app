import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Passengers from "./components/Passengers";
import PassengersCreator from "./components/PassengersCreator";
import PassengersEditor from "./components/PassengersEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="passengers" />} />
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/passengers/creator" element={<PassengersCreator />} />
        <Route path="/passengers/:id" element={<PassengersEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
