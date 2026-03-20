import { NextResponse } from "next/server";
import { getBigQueryClient } from "@/lib/gcp/bigquery";

export async function GET() {
  try {
    const bigquery = getBigQueryClient();

    const query = `
      SELECT 1 as test_value
    `;

    const [rows] = await bigquery.query({
      query,
    });

    return NextResponse.json({
      success: true,
      rows,
    });
  } catch (error) {
    console.error("BigQuery test fout:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Onbekende fout",
      },
      { status: 500 }
    );
  }
}
