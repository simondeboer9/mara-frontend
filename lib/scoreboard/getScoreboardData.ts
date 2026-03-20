import type { ScoreboardData } from "@/types/scoreboard";
import { scoreboardDataByKlant } from "./mockData";

export async function getScoreboardData(
  klantId: string
): Promise<ScoreboardData> {
  console.log("Scoreboard data ophalen voor klant:", klantId);

  const key = klantId.toLowerCase();
  const fallbackData =
    scoreboardDataByKlant[key] ?? scoreboardDataByKlant.fitnessunique;

  try {
    const [mockResponse, realResponse] = await Promise.all([
      fetch(`http://localhost:3000/api/scoreboard?klant=${klantId}`, {
        cache: "no-store",
      }),
      fetch(`http://localhost:3000/api/scoreboard-real?klant=${klantId}`, {
        cache: "no-store",
      }),
    ]);

    if (!mockResponse.ok) {
      throw new Error("Kon mock scoreboard data niet ophalen");
    }

    const mockResult = await mockResponse.json();
    const realResult = realResponse.ok ? await realResponse.json() : null;

    const data: ScoreboardData = mockResult.data;

    if (realResult?.success) {
      if (typeof realResult.visitors !== "undefined") {
        data.kpi.visitors.value = String(realResult.visitors);
      }

      if (typeof realResult.visitorsToConversionPages !== "undefined") {
        data.kpi.visitors.subtitle = `${realResult.visitorsToConversionPages} naar conversiepagina's`;
      }

      if (typeof realResult.conversions !== "undefined") {
        data.kpi.conversions.value = String(realResult.conversions);
      }

      if (typeof realResult.conversionRate !== "undefined") {
        data.kpi.conversions.subtitle = `Conversiepercentage ${Number(
          realResult.conversionRate
        ).toFixed(1)}%`;
      }
    }

    return data;
  } catch (error) {
    console.error("Fallback naar mockData wegens fout:", error);
    return fallbackData;
  }
}
