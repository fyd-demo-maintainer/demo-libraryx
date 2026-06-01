// LibraryX v2 — fictional payments SDK (demo only).
//
// v1 exposed a top-level `charge(token, amount)`.
// v2 (this version) renamed it to `payments.create({ token, amount })`.
// The old `charge` is intentionally NOT exported — calling it throws
// `TypeError: libraryx.charge is not a function`, which is the real
// signal the fixyourdocs demo hinges on.

export const payments = {
  create({ token, amount } = {}) {
    if (!token || typeof amount !== "number") {
      throw new Error("payments.create requires { token, amount }");
    }
    return { id: "ch_demo_123", status: "succeeded", amount };
  },
};
