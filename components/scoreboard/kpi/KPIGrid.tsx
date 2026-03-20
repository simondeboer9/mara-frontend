import KPICard from "./KPICard";

type KPIGridProps = {
  visitors: {
    value: string;
    subtitle: string;
  };
  conversions: {
    value: string;
    subtitle: string;
  };
  goal: {
    value: string;
    subtitle: string;
  };
};

export default function KPIGrid({
  visitors,
  conversions,
  goal,
}: KPIGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        marginBottom: "40px",
      }}
    >
      <KPICard
        title="Bezoekers"
        value={visitors.value}
        subtitle={visitors.subtitle}
      />

      <KPICard
        title="Conversie"
        value={conversions.value}
        subtitle={conversions.subtitle}
      />

      <KPICard
        title="Doel"
        value={goal.value}
        subtitle={goal.subtitle}
      />
    </div>
  );
}
