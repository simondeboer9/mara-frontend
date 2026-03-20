import { NextRequest, NextResponse } from "next/server";
import { scoreboardDataByKlant } from "@/lib/scoreboard/mockData";

export async function GET(request: NextRequest) {
  const klantId = request.nextUrl.searchParams.get("klant") ?? "fitnessunique";

  const key = klantId.toLowerCase() as keyof typeof scoreboardDataByKlant;
  const data = scoreboardDataByKlant[key] ?? scoreboardDataByKlant.fitnessunique;

  return NextResponse.json({
    klantId,
    data,
  });
}
