//import React from "react";
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Debit from "./components/Debit";
import Credit from "./components/Credit"

function App() {
  const [debitBalance, setDebitBalance] = useState("");
  const [creditBalance, setCreditBalance] = useState("");
  var accBalance = creditBalance - debitBalance;

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
      try {
        const debitResponse = await fetch("https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits");
        const debitData = await debitResponse.json();
        const creditResponse = await fetch("https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits");
        const creditData = await creditResponse.json();
        setDebitBalance(debitData);
        setCreditBalance(creditData);
      } catch (error) {
        console.error(error);
      }
  }
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Debit">Debit</Link>
            </li>
            <li>
              <Link to="/Credit">Credit</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home accBalance={accBalance}/>} />
          <Route path="/Debit/*" element={<Debit accBalance={accBalance}/>} />
          <Route path="/Credit/*" element={<Credit accBalance={accBalance}/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;