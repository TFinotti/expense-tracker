import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Breakdown = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Tiago</h4>
        <p>
          ${income}
        </p>
      </div>
      <div>
        <h4>Maryam</h4>
        <p>
          ${expense}
        </p>
      </div>
      <div>
        <h4>Total</h4>
        <p>
          ${total}
        </p>
      </div>
    </div>
  );
};
