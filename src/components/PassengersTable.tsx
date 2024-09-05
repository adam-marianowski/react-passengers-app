import { FC } from "react";
import { Passenger } from "../typescript/Passenger";

type Props = {
  passengers: Passenger[];
  onSelectPassenger: (id: string) => void;
  onRemovePassenger: (id: string) => void;
};

const headers = ["id", "name", "checked-in", "check-in date", "baggage", "actions"];

const PassengersTable: FC<Props> = props => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.passengers.map(passenger => (
          <tr key={passenger.id}>
            <td>{passenger.id}</td>
            <td>{passenger.name}</td>
            <td>{passenger.checkedIn ? "yes" : "no"}</td>
            <td>{passenger.checkInDate}</td>
            <td>{passenger.baggage}</td>
            <td>
              <button onClick={() => props.onSelectPassenger(passenger.id)}>View</button>
              <button onClick={() => props.onRemovePassenger(passenger.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PassengersTable;
