import { JSX } from "react";
import PassengersFom from "./PassengersForm";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Passenger } from "typescript/Passenger";

export default function PassengersCreator(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  function handleCreatePassenger(passenger: Passenger): void {
    fetch(`http://localhost:4000/passengers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passenger),
    }).then(() => navigate("/passengers"));
  }
  return (
    <PassengersFom
      formTitle="Create Passenger"
      onCancel={() => navigate("/passengers")}
      onSubmit={handleCreatePassenger}
    />
  );
}
