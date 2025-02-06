import React, { useState } from "react";

function useBankAccount() {
  const [balance, setBalance] = useState(0);
  // Credit Amout
  const credit = (amount) => {
    if (amount > 0) {
      setBalance((prev) => prev + amount);
      return true;
    }
    return false;
  };
  // Debit Amount
  const debit = (amount) => {
    if (amount > 0 && balance >= amount) {
      setBalance((pre) => pre - amount);
      return true;
    }
    return false;
  };
  return { balance, credit, debit };
}

export default useBankAccount;
