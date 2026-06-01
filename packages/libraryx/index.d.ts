export interface ChargeInput {
  /** Card token, e.g. "tok_visa_demo". */
  token: string;
  /** Amount in the smallest currency unit (cents). */
  amount: number;
}

export interface Charge {
  id: string;
  status: "succeeded" | "failed";
  amount: number;
}

export declare const payments: {
  /** Charge a card. (Renamed from the v1 top-level `charge()`.) */
  create(input: ChargeInput): Charge;
};
