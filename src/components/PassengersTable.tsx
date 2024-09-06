import { FC } from "react";
import { Passenger } from "../typescript/Passenger";

type Props = {
  passengers: Passenger[];
  onSelectPassenger: (id: string) => void;
  onRemovePassenger: (id: string) => void;
};

const headers = ["id", "name", "checked-in", "check-in date", "baggage", "actions"];

const PassengersTable: FC<Props> = props => {
  const warningIcon = <i className="bi bi-exclamation-circle-fill text-warning"></i>;
  const successIcon = <i className="bi bi-check-circle-fill text-success"></i>;
  const binIcon = <i className="bi bi-trash-fill"></i>;
  const editIcon = <i className="bi bi-pen"></i>;
  const calendarIcon = <i className="bi bi-calendar-check"></i>;

  return (
    <div className="shadow rounded p-3">
      <table className="table">
        <thead>
          <tr className="text-center">
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.passengers.map(passenger => (
            <tr key={passenger.id} className="text-center">
              <td>
                <span className="fw-bold">{passenger.id}</span>
              </td>
              <td className="text-start">{passenger.name}</td>
              <td>{passenger.checkedIn ? successIcon : warningIcon}</td>
              <td>
                <>
                  {passenger.checkInDate && calendarIcon}
                  <span className="ms-2">{passenger.checkInDate ?? "-"}</span>
                </>
              </td>
              <td>
                <span className={passenger.baggage ? "badge text-bg-success" : ""}>
                  {passenger.baggage ?? "-"}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => props.onSelectPassenger(passenger.id)}
                >
                  {editIcon}
                </button>
                <button
                  className="btn btn-danger ms-2 btn-sm"
                  onClick={() => props.onRemovePassenger(passenger.id)}
                >
                  {binIcon}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <small className="d-block text-center text-secondary">
        Showing {props.passengers.length} {props.passengers.length === 1 ? "result" : "results"}
      </small>
    </div>
  );
};

export default PassengersTable;
