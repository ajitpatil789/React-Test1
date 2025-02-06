import React, { useState } from "react";
import useBankAccount from "./useBankAccount";
import "./BankAccount.css";
function BankAccount() {
  const { balance, credit, debit } = useBankAccount();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleTransaction = (transactionType) => {
    const num = parseFloat(amount);
    setError("");

    if (isNaN(num) || num <= 0) {
      setError("Please enter a valid positive amount");
      return;
    }

    const success = transactionType === "credit" ? credit(num) : debit(num);

    if (!success) {
      setError(
        transactionType === "credit"
          ? "Invalid credit amount"
          : "Insufficient funds or invalid debit amount"
      );
    } else {
      setAmount("");
    }
  };
  return (
    <div className="bank-container">
      <h1 className="balance">₹{balance.toFixed(2)}</h1>

      <div className="input-group">
        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="button-group">
        <button
          className="credit-btn"
          onClick={() => handleTransaction("credit")}
        >
          Deposit
        </button>
        <button
          className="debit-btn"
          onClick={() => handleTransaction("debit")}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default BankAccount;
