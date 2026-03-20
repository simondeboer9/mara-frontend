type ConversionEffectivenessRow = {
  page: string;
  visitors: number;
  conversions: number;
  rate: string;
};

type ConversionEffectivenessTableProps = {
  rows: ConversionEffectivenessRow[];
};

export default function ConversionEffectivenessTable({
  rows,
}: ConversionEffectivenessTableProps) {
  return (
    <section
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        marginBottom: "32px",
      }}
    >
      <h2
        style={{
          fontSize: "34px",
          fontWeight: 800,
          color: "#1697e6",
          marginBottom: "8px",
        }}
      >
        Effectiviteit per conversiepagina
      </h2>

      <p
        style={{
          color: "#6b7280",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        Overzicht van prestaties van je belangrijkste conversiepagina&apos;s
      </p>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr style={{ background: "#f8fafc", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>
                Pagina
              </th>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>
                Bezoekers
              </th>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>
                Conversies
              </th>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>
                Conversie %
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.page}>
                <td style={{ padding: "12px", borderBottom: "1px solid #f1f5f9" }}>
                  {row.page}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #f1f5f9" }}>
                  {row.visitors}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #f1f5f9" }}>
                  {row.conversions}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #f1f5f9" }}>
                  {row.rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
