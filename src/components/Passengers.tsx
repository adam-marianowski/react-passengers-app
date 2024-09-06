import { useEffect, useState } from "react";
import PassengersTable from "./PassengersTable";
import { useNavigate } from "react-router-dom";
import { Alert } from "../typescript/Alert";
import { Passenger } from "../typescript/Passenger";
import PassengersAlerts from "./PassengersAlerts";

const Passengers = () => {
  const [passengers, setPassengers] = useState([] as Passenger[]);
  const [alerts, setAlerts] = useState([] as Alert[]);
  const navigate = useNavigate();

  const navigateToPassengerEditor = (id: string) => navigate(`/passengers/${id}`);
  const navigateToPassengerCreator = () => navigate("/passengers/creator");

  const handleRemovePassenger = (id: string) => {
    fetch(`http://localhost:5000/passengers/${id}`, { method: "DELETE" })
      .then(() => handleGetPassengers())
      .catch(err => console.log(err));
  };

  const handleGetAlerts = () => {
    fetch("http://localhost:5000/alerts")
      .then(res => res.json())
      .then(data => setAlerts(data))
      .catch(err => console.log(err));
  };

  const handleGetPassengers = () => {
    fetch("http://localhost:5000/passengers")
      .then(res => res.json())
      .then(data => setPassengers(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    handleGetPassengers();
    handleGetAlerts();
  }, []);

  return (
    <div className="d-flex flex-column">
      <h1>Passengers</h1>

      <div className="d-flex gap-5">
        <div style={{ width: "90vw" }}>
          <button
            onClick={navigateToPassengerCreator}
            className="d-flex align-items-center gap-2 btn btn-success ms-auto mb-4"
          >
            <i className="bi bi-person-plus-fill"></i>
            <span>new passenger</span>
          </button>

          <PassengersTable
            passengers={passengers}
            onSelectPassenger={navigateToPassengerEditor}
            onRemovePassenger={handleRemovePassenger}
          />
        </div>

        <div className="">
          <h2 className="fs-5 ">
            <i className="bi text-secondary bi-bell-fill"></i>
            <span className="ms-2">Notifications</span>
          </h2>
          <hr />
          {alerts && <PassengersAlerts alerts={alerts} />}
          {alerts.length === 0 && <div>no alerts here yet... </div>}
        </div>
      </div>
    </div>
  );
};

export default Passengers;
