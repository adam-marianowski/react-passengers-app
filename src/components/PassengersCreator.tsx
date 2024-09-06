import { useNavigate } from "react-router-dom";
import { Passenger } from "../typescript/Passenger";
import PassengersForm from "./PassengersForm";

const PassengersCreator = () => {
  const navigate = useNavigate();

  const handleCreatePassenger = (passenger: Passenger) => {
    fetch("http://localhost:5000/passengers", {
      method: "POST",
      body: JSON.stringify(passenger),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/passengers"));
  };

  return <PassengersForm onSubmit={handleCreatePassenger} />;
};

export default PassengersCreator;
