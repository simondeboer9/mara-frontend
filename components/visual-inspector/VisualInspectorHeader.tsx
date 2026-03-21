type VisualInspectorHeaderProps = {
  klantNaam: string;
};

export default function VisualInspectorHeader({
  klantNaam,
}: VisualInspectorHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "24px",
        marginBottom: "32px",
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
          {klantNaam}
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "#1697e6",
            margin: 0,
          }}
        >
          Visual Inspector
        </h1>

        <p
          style={{
            marginTop: "12px",
            color: "#6b7280",
            fontSize: "16px",
          }}
        >
          Overzicht van pagina-varianten, devices en reviewstatus
        </p>
      </div>

      <div
        style={{
          minWidth: "220px",
          background: "white",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ color: "#6b7280", fontSize: "13px", marginBottom: "8px" }}>
          Context
        </div>
        <div style={{ fontWeight: 700, color: "#111827", marginBottom: "6px" }}>
          Klant: {klantNaam}
        </div>
        <div style={{ color: "#4b5563", fontSize: "14px" }}>
          Eerste MVP met mock designs en versie-overzicht
        </div>
      </div>
    </div>
  );
}
