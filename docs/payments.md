# Payments

> **Applies to:** LibraryX **v2.x** (latest)

Charge a customer's card with a single call.

## Charge a card

```js
import * as libraryx from "libraryx";

// Charge $42.00 to the customer's card.
const receipt = libraryx.charge("tok_visa_demo", 4200);

console.log(receipt.status); // "succeeded"
```

Pass the **card token** and the **amount in cents**. The call returns a
receipt with an `id` and a `status`.
