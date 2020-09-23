import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Breakdown } from "./components/Breakdown";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <Breakdown />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
