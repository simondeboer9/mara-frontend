type KPICardProps = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function KPICard({
  title,
  value,
  subtitle,
}: KPICardProps) {
  return (
    <div
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          fontWeight: 800,
          fontSize: "18px",
          color: "#ff3c8d",
          marginBottom: "12px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "36px",
          fontWeight: 800,
          color: "#1697e6",
        }}
      >
        {value}
      </div>

      {subtitle && (
        <div
          style={{
            marginTop: "8px",
            color: "#6b7280",
            fontSize: "14px",
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}
