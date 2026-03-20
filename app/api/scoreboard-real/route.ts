import { NextRequest, NextResponse } from "next/server";
import { getBigQueryClient } from "@/lib/gcp/bigquery";

export async function GET(request: NextRequest) {
  try {
    const klantId = request.nextUrl.searchParams.get("klant") ?? "fitnessunique";
    const datasetId = `mara_${klantId}`;

    const bigquery = getBigQueryClient();

    const query = `
      WITH conversion_pages AS (
        SELECT DISTINCT page_url
        FROM \`mara-analytics.${datasetId}.digital_twin_pages\`
        WHERE is_conversion_page = TRUE
      ),
      conversion_sessions AS (
        SELECT COUNT(DISTINCT sl.session_id) AS visitors_to_conversion_pages
        FROM \`mara-analytics.${datasetId}.session_logs\` sl
        INNER JOIN conversion_pages cp
          ON sl.page_url = cp.page_url
      ),
      conversion_events AS (
        SELECT COUNT(*) AS conversions
        FROM \`mara-analytics.${datasetId}.event_logs\`
        WHERE event IN ("form_submit")
      ),
      total_visitors AS (
        SELECT COUNT(DISTINCT session_id) AS visitors
        FROM \`mara-analytics.${datasetId}.session_logs\`
      )
      SELECT
        tv.visitors AS visitors,
        cs.visitors_to_conversion_pages AS visitors_to_conversion_pages,
        ce.conversions AS conversions,
        SAFE_DIVIDE(ce.conversions, tv.visitors) * 100 AS conversion_rate
      FROM total_visitors tv
      CROSS JOIN conversion_sessions cs
      CROSS JOIN conversion_events ce
    `;
    const [rows] = await bigquery.query({ query });

    return NextResponse.json({
      success: true,
      klantId,
      visitors: rows[0]?.visitors ?? 0,
      visitorsToConversionPages: rows[0]?.visitors_to_conversion_pages ?? 0,
      conversions: rows[0]?.conversions ?? 0,
      conversionRate: rows[0]?.conversion_rate ?? 0,
    });

  } catch (error) {
    console.error("Scoreboard real fout:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Onbekende fout",
      },
      { status: 500 }
    );
  }
}
