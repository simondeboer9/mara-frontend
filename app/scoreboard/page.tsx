import DashboardLayout from "@/components/layout/DashboardLayout";
import ScoreboardHeader from "@/components/scoreboard/ScoreboardHeader";
import PeriodSelector from "@/components/scoreboard/PeriodSelector";
import KPIGrid from "@/components/scoreboard/kpi/KPIGrid";
import TopPagesTable from "@/components/scoreboard/tables/TopPagesTable";
import LostTrafficTable from "@/components/scoreboard/tables/LostTrafficTable";
import ConversionEffectivenessTable from "@/components/scoreboard/tables/ConversionEffectivenessTable";
import { getScoreboardData } from "@/lib/scoreboard/getScoreboardData";

type ScoreboardPageProps = {
  searchParams: Promise<{
    klant?: string;
  }>;
};

export default async function ScoreboardPage({
  searchParams,
}: ScoreboardPageProps) {
  const params = await searchParams;
  const klantNaam = params.klant ?? "fitnessunique";
  const data = await getScoreboardData(klantNaam);

  return (
<DashboardLayout>
  <ScoreboardHeader klantNaam={klantNaam} />
  <PeriodSelector />
  <KPIGrid
    visitors={data.kpi.visitors}
    conversions={data.kpi.conversions}
    goal={data.kpi.goal}
  />
  <TopPagesTable rows={data.topPages} />
  <LostTrafficTable rows={data.lostTraffic} />
  <ConversionEffectivenessTable rows={data.conversionEffectiveness} />
</DashboardLayout>
  );
}
