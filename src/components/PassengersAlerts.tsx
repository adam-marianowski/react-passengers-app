import { FC } from "react";
import { Alert } from "../typescript/Alert";

type Props = { alerts: Alert[] };

const PassengersAlerts: FC<Props> = props => {
  return (
    <>
      {props.alerts.map(alert => (
        <div className={`alert alert-${alert.type}`} style={{ width: "20vw" }}>
          <div>{alert.content}</div>
        </div>
      ))}
    </>
  );
};

export default PassengersAlerts;
