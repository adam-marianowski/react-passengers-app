import { Baggage } from "./Baggage";

export interface Passenger {
  id: string;
  name: string;
  checkedIn: boolean;
  checkInDate?: string;
  baggage?: Baggage;
}
