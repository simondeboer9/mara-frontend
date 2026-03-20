"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const klanten = [
  { id: "fitnessunique", naam: "Fitness Unique" },
  { id: "sanotie", naam: "Sanotie" },
  { id: "groeihero", naam: "Groeihero" },
  { id: "horizon", naam: "Horizon Hypotheek" },
  { id: "westnederlandbouw", naam: "West Nederland Bouw" },
];

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const actieveKlant = searchParams.get("klant") ?? "fitnessunique";

  function changeKlant(e: React.ChangeEvent<HTMLSelectElement>) {
    const nieuweKlant = e.target.value;

    router.push(`/scoreboard?klant=${nieuweKlant}`);
  }

  return (
    <aside
      style={{
        width: "260px",
        background: "#0b6fa4",
        color: "white",
        padding: "30px",
      }}
    >
      <h2>Groeihero</h2>

      <div style={{ marginTop: "30px" }}>
        <div style={{ fontSize: "14px", marginBottom: "8px" }}>
          Selecteer klant
        </div>

        <select
          value={actieveKlant}
          onChange={changeKlant}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          {klanten.map((k) => (
            <option key={k.id} value={k.id}>
              {k.naam}
            </option>
          ))}
        </select>
      </div>

      <nav style={{ marginTop: "40px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link href={`/scoreboard?klant=${actieveKlant}`}>
              Scoreboard
            </Link>
          </li>

          <li style={{ marginBottom: "10px" }}>
            <Link href={`/visual-inspector?klant=${actieveKlant}`}>
              Visual Inspector
            </Link>
          </li>

          <li>
            <Link href={`/instellingen?klant=${actieveKlant}`}>
              Instellingen
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
