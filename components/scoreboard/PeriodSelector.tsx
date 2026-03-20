"use client";

import { useState } from "react";

export default function PeriodSelector() {
  const [periode, setPeriode] = useState("maand");
  const [compare, setCompare] = useState(false);

  return (
    <div
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        marginBottom: "40px",
        maxWidth: "500px",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          marginBottom: "20px",
          color: "#1697e6",
        }}
      >
        Analyseperiode
      </h2>

      <select
        value={periode}
        onChange={(e) => setPeriode(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          marginBottom: "20px",
        }}
      >
        <option value="maand">Deze maand</option>
        <option value="30dagen">Laatste 30 dagen</option>
        <option value="7dagen">Laatste 7 dagen</option>
        <option value="gisteren">Gisteren</option>
      </select>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "14px",
        }}
      >
        <input
          type="checkbox"
          checked={compare}
          onChange={() => setCompare(!compare)}
        />
        Vergelijk met vorige periode
      </label>

      <div
        style={{
          marginTop: "14px",
          fontSize: "13px",
          color: "#6b7280",
        }}
      >
        Periode A: 01 Mar → 13 Mar
      </div>
    </div>
  );
}
