import { Passenger } from "typescript/Passenger";

type Props = { passengers: Passenger[] };

export default function PassengersCounter(props: Props) {
  const totalCheckedIn = props.passengers.filter(p => p.checkedIn).length;

  return (
    <div>
      <div className="alert alert-primary">
        <i className="bi bi-person-check me-2"></i>
        {totalCheckedIn} passengers checked in
      </div>
    </div>
  );
}
