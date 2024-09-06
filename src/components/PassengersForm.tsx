import { useNavigate } from "react-router-dom";
import { Passenger } from "../typescript/Passenger";
import { FC, FormEvent, useEffect, useState } from "react";
import { Baggage } from "../typescript/Baggage";

type Props = {
  passenger?: Passenger;
  onSubmit: (passenger: Passenger) => void;
};

const baggageOptions = [
  { name: "none", value: "none" },
  { name: "hand only", value: "hand-only" },
  { name: "hold only", value: "hold-only" },
  { name: "hand and hold", value: "hand-hold" },
];

const PassengersForm: FC<Props> = props => {
  const [passenger, setPassenger] = useState(props.passenger ?? ({} as Passenger));
  const navigate = useNavigate();

  const navigateToPassengers = () => navigate("/passengers");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    let newPassenger = passenger;
    e.preventDefault();

    if (!passenger.checkInDate) {
      newPassenger = { ...newPassenger, checkInDate: undefined, baggage: undefined };
    }

    props.onSubmit(newPassenger);
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * 10000000000000).toString();
    if (props.passenger) setPassenger(props.passenger as Passenger);
    else setPassenger(p => ({ ...p, id: random }));
  }, [props.passenger]);

  return (
    <div className="mx-auto w-50">
      <button onClick={navigateToPassengers} className="btn btn-secondary">
        <i className="bi bi-chevron-double-left"></i>
        <span> Go back</span>
      </button>

      <form onSubmit={handleSubmit} className="d-flex flex-column mt-3">
        <div className="d-flex flex-column mb-3">
          <label htmlFor="id" className="form-label">
            Id:
          </label>
          <input name="id" value={passenger.id} className="form-control" disabled />
        </div>
        <div className="d-flex flex-column mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            className="form-control"
            name="name"
            onChange={e => setPassenger(p => ({ ...p, name: e.target.value }))}
            value={passenger.name}
          />
        </div>
        <div className=" flex-column mb-3 form-check">
          <label htmlFor="checkbox" className="form-check-label">
            Checked-in
          </label>
          <input
            type="checkbox"
            name="checked-in"
            className="form-check-input"
            onChange={e => setPassenger(p => ({ ...p, checkedIn: e.target.checked }))}
            checked={passenger.checkedIn}
          />
        </div>
        {passenger.checkedIn && (
          <>
            <div className="d-flex flex-column mb-3">
              <label htmlFor="checkInDate" className="form-label">
                Check-in date:
              </label>
              <input
                type="date"
                className="form-control"
                value={passenger.checkInDate}
                onChange={e => setPassenger(p => ({ ...p, checkInDate: e.target.value }))}
                name="checkInDate"
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label htmlFor="baggage" className="form-label">
                Baggage:
              </label>
              <select
                name="baggage"
                className="form-select"
                value={passenger.baggage}
                onChange={e => setPassenger(p => ({ ...p, baggage: e.target.value as Baggage }))}
                defaultValue={passenger.baggage ?? undefined}
              >
                {baggageOptions.map(option => (
                  <option value={option.value}>{option.name}</option>
                ))}
              </select>
            </div>
          </>
        )}

        <button className="btn btn-success w-25 ms-auto mt-5">Save</button>
      </form>
    </div>
  );
};

export default PassengersForm;
