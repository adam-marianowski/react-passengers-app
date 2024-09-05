import { useNavigate, useParams } from "react-router-dom";
import { Passenger } from "../typescript/Passenger";
import PassengersForm from "./PassengersForm";
import { useEffect, useState } from "react";

const PassengersEditor = () => {
  const [passenger, setPassenger] = useState({} as Passenger);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleGetPassenger = (id: string) => {
    fetch(`http://localhost:5000/passengers/${id}`)
      .then(res => res.json())
      .then(data => setPassenger(data));
  };

  const handleEditPassenger = (passenger: Passenger) => {
    fetch(`http://localhost:5000/passengers/${id}`, {
      method: "PATCH",
      body: JSON.stringify(passenger),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/passengers"));
  };

  useEffect(() => {
    if (id) handleGetPassenger(id);
  }, [id]);

  return <PassengersForm onSubmit={handleEditPassenger} passenger={passenger} />;
};

export default PassengersEditor;
