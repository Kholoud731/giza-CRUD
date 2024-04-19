export interface FlightRecord {
  id: number
  date: string
  capacity: string
  code: string
}

export interface FlightState {
  flights: FlightRecord[];
  loading: boolean
  error: string | null
}

export interface AuthState {
  token: string | null;
  error: string | null;
}

export interface LoginInputs {
  email: string;
  password: string;
}

export interface FlightInputs {
  code: string;
  date: string;
  capacity: string;
  id?: string
}
