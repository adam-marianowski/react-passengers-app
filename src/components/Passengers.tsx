import { JSX, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Passenger } from "typescript/Passenger";
import PassengersTable from "./PassengersTable";
import PassengersCounter from "./PassengersCounter";
import PageTitle from "./ui/PageTitle";

export default function Passengers(): JSX.Element {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const navigate: NavigateFunction = useNavigate();

  function handleGetPassengers(): void {
    fetch("http://localhost:4000/passengers")
      .then(response => response.json())
      .then(data => setPassengers(data));
  }

  function handleDeletePassenger(id: string): void {
    fetch(`http://localhost:4000/passengers/${id}`, { method: "DELETE" }).then(
      () => handleGetPassengers()
    );
  }

  useEffect(() => {
    handleGetPassengers();
  }, []);

  return (
    <div className="d-flex gap-5">
      <section className="w-75">
        <div className="d-flex mb-5 justify-content-between align-items-center">
          <PageTitle title="Passengers" />
          <button
            className="btn btn-success"
            onClick={() => navigate("/passengers/new")}
          >
            <i className="bi bi-plus" />
            Add Passenger
          </button>
        </div>
        <PassengersTable
          passengers={passengers}
          onDeletePassenger={handleDeletePassenger}
          onSelectPassenger={id => navigate(`/passengers/${id}`)}
        />
      </section>

      <section className="w-25">
        <PassengersCounter passengers={passengers} />
      </section>
    </div>
  );
}
