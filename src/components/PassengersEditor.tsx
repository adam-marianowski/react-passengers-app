import { JSX, useEffect, useState } from "react";
import { Passenger } from "typescript/Passenger";
import PassengersFom from "./PassengersForm";
import {
  NavigateFunction,
  Params,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function PassengersEditor(): JSX.Element {
  const [passenger, setPassenger] = useState<Passenger>({} as Passenger);
  const params: Params = useParams();
  const navigate: NavigateFunction = useNavigate();

  function handleEditPassenger(passenger: Passenger): void {
    fetch(`http://localhost:4000/passengers/${passenger.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passenger),
    }).then(() => navigate("/passengers"));
  }

  useEffect(() => {
    if (params.id) {
      fetch(`http://localhost:4000/passengers/${params.id}`)
        .then(response => response.json())
        .then(data => setPassenger(data));
    }
  }, [params.id]);

  return (
    <PassengersFom
      formTitle="Edit Passenger"
      passenger={passenger}
      onCancel={() => navigate("/passengers")}
      onSubmit={handleEditPassenger}
    />
  );
}
