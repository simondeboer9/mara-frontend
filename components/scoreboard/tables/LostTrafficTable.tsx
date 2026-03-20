type LostTrafficRow = {
  page: string;
  lost: number;
  share: string;
};

type LostTrafficTableProps = {
  rows: LostTrafficRow[];
};

export default function LostTrafficTable({
  rows,
}: LostTrafficTableProps) {
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
        Bronnen van gemorst bezoek
      </h2>

      <p
        style={{
          color: "#6b7280",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        Pagina&apos;s waar bezoekers afhaken zonder door te gaan naar een conversiepagina
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
                Startpagina
              </th>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>
                Gemorst bezoek
              </th>
              <th style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>
                Aandeel
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
                  {row.lost}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #f1f5f9" }}>
                  {row.share}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
