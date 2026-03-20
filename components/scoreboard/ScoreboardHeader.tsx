type ScoreboardHeaderProps = {
  klantNaam: string;
};

function formatKlantNaam(klantNaam: string) {
  const namen: Record<string, string> = {
    fitnessunique: "Fitness Unique",
    sanotie: "Sanotie",
    groeihero: "Groeihero",
    horizon: "Horizon Hypotheek",
    westnederlandbouw: "West Nederland Bouw",
  };

  return namen[klantNaam.toLowerCase()] ?? klantNaam;
}

export default function ScoreboardHeader({
  klantNaam,
}: ScoreboardHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "24px",
        marginBottom: "40px",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "40px",
            fontWeight: 900,
            marginBottom: "12px",
            textTransform: "uppercase",
          }}
        >
          {formatKlantNaam(klantNaam)}
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "#1697e6",
            margin: 0,
          }}
        >
          Scoreboard
        </h1>

        <p
          style={{
            marginTop: "12px",
            color: "#6b7280",
            fontSize: "16px",
          }}
        >
          Overzicht van bezoekers, conversie en focuspagina&apos;s
        </p>
      </div>

      <div
        style={{
          minWidth: "220px",
          background: "white",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "999px",
            background: "#dbeafe",
            margin: "0 auto 12px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            color: "#0b6fa4",
          }}
        >
          MARA
        </div>

        <div
          style={{
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Vraag het MARA
        </div>
      </div>
    </div>
  );
}
