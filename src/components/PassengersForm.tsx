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
    e.preventDefault();
    props.onSubmit(passenger);
  };

  useEffect(() => {
    if (props.passenger) setPassenger(props.passenger as Passenger);
  }, [props.passenger]);

  return (
    <div>
      <button onClick={navigateToPassengers}>Go back</button>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">Id</label>
          <input name="id" value={passenger.id} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            onChange={e => setPassenger(p => ({ ...p, name: e.target.value }))}
            value={passenger.name}
          />
        </div>
        <div>
          <label htmlFor="checkbox">Checked-in</label>
          <input
            type="checkbox"
            name="checked-in"
            onChange={e => setPassenger(p => ({ ...p, checkedIn: e.target.checked }))}
            checked={passenger.checkedIn}
          />
        </div>
        <div>
          <label htmlFor="checkInDate">Check-in date</label>
          <input
            type="date"
            value={passenger.checkInDate}
            onChange={e => setPassenger(p => ({ ...p, checkInDate: e.target.value }))}
            name="checkInDate"
          />
        </div>
        <div>
          <label htmlFor="baggage">Baggage</label>
          <select
            name="baggage"
            value={passenger.baggage}
            onChange={e => setPassenger(p => ({ ...p, baggage: e.target.value as Baggage }))}
            defaultValue={passenger.baggage ?? undefined}
          >
            {baggageOptions.map(option => (
              <option value={option.value}>{option.name}</option>
            ))}
          </select>
        </div>

        <button>Save</button>
      </form>
    </div>
  );
};

export default PassengersForm;
