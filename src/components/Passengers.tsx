import { useEffect, useState } from "react";
import PassengersTable from "./PassengersTable";
import { useNavigate } from "react-router-dom";
import { Passenger } from "../typescript/Passenger";

const Passengers = () => {
  const [passengers, setPassengers] = useState([] as Passenger[]);
  const navigate = useNavigate();

  const navigateToPassengerEditor = (id: string) => navigate(`/passengers/${id}`);
  const navigateToPassengerCreator = () => navigate("/passengers/creator");

  const handleRemovePassenger = (id: string) => {
    fetch(`http://localhost:5000/passengers/${id}`, { method: "DELETE" })
      .then(() => console.log("finished"))
      .then(() => handleGetPassengers())
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
  }, []);

  return (
    <div>
      <h1>Passengers</h1>
      <button onClick={navigateToPassengerCreator}>Add new passenger</button>
      <PassengersTable
        passengers={passengers}
        onSelectPassenger={navigateToPassengerEditor}
        onRemovePassenger={handleRemovePassenger}
      />
    </div>
  );
};

export default Passengers;
