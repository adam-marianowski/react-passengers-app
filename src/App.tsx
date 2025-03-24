import { JSX } from "react";
import Passengers from "components/Passengers";
import PassengersEditor from "components/PassengersEditor";
import PassengersCreator from "components/PassengersCreator";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "components/ui/Header";

export default function App(): JSX.Element {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/passengers" />} />
          <Route path="/passengers" element={<Passengers />} />
          <Route path="/passengers/:id" element={<PassengersEditor />} />
          <Route path="/passengers/new" element={<PassengersCreator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
