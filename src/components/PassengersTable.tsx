import { JSX } from "react";
import { Passenger } from "typescript/Passenger";

type Props = {
  passengers: Passenger[];
  onSelectPassenger: (id: string) => void;
  onDeletePassenger: (id: string) => void;
};

export default function PassengersTable(props: Props): JSX.Element {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th className="text-center">Checked In</th>
          <th>Check-In Date</th>
          <th>Baggage</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.passengers.map(passenger => (
          <tr key={passenger.id}>
            <td>{passenger.id}</td>
            <td>{passenger.name}</td>
            <td className="text-center">
              {passenger.checkedIn && (
                <i className="bi bi-x-circle-fill text-danger"></i>
              )}
              {!passenger.checkedIn && (
                <i className="bi bi-check-circle-fill text-success"></i>
              )}
            </td>
            <td>{passenger.checkInDate ?? "-"}</td>
            <td>{passenger.baggage}</td>
            <td>
              <button
                title="Edit"
                className="btn btn-primary me-3"
                onClick={() => props.onSelectPassenger(passenger.id)}
              >
                <i className="bi bi-pencil"></i>
              </button>
              <button
                title="Delete"
                className="btn btn-danger"
                onClick={() => props.onDeletePassenger(passenger.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
