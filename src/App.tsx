import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Passengers from "./components/Passengers";
import PassengersCreator from "./components/PassengersCreator";
import PassengersEditor from "./components/PassengersEditor";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="passengers" />} />
            <Route path="/passengers" element={<Passengers />} />
            <Route path="/passengers/creator" element={<PassengersCreator />} />
            <Route path="/passengers/:id" element={<PassengersEditor />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
