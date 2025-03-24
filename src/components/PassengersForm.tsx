import { JSX, useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Passenger } from "typescript/Passenger";
import PageTitle from "./ui/PageTitle";

type Props = {
  passenger?: Passenger;
  formTitle: string;
  onCancel: () => void;
  onSubmit: (passenger: Passenger) => void;
};

export default function PassengersForm(props: Props): JSX.Element {
  const [passenger, setPassenger] = useState<Passenger>({} as Passenger);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    setPassenger(prevPassenger => ({
      ...prevPassenger,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    props.onSubmit(passenger);
  }

  useEffect(() => {
    if (props.passenger) {
      setPassenger(props.passenger);
    } else {
      const randomId = Math.floor(Math.random() * 1000000).toString();
      setPassenger(prevPassenger => ({ ...prevPassenger, id: randomId }));
    }
  }, [props.passenger]);

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <PageTitle title={props.formTitle} />
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={passenger.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="checkedIn"
          name="checkedIn"
          checked={passenger.checkedIn}
          onChange={handleChange}
        />
        <label htmlFor="checkedIn" className="form-check-label ms-3">
          Checked In
        </label>
      </div>

      {passenger.checkedIn && (
        <>
          <div className="alert alert-warning">
            Checked-in passengers must have a check-in date and baggage
            information recorded.
          </div>
          <div className="mb-3">
            <label htmlFor="checkInDate" className="form-label">
              Check-In Date
            </label>
            <input
              type="date"
              className="form-control"
              id="checkInDate"
              name="checkInDate"
              value={passenger.checkInDate}
              onChange={handleChange}
              disabled={!passenger.checkedIn}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="baggage" className="form-label">
              Baggage
            </label>
            <select
              className="form-select"
              id="baggage"
              name="baggage"
              value={passenger.baggage}
              onChange={handleChange}
            >
              <option value="hand-only">Hand Only</option>
              <option value="hold-only">Hold Only</option>
              <option value="hand-hold">Hand and Hold</option>
              <option value="none">None</option>
            </select>
          </div>
        </>
      )}
      <div className="mb-3 d-flex ms-auto gap-3 ms-2">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
}
