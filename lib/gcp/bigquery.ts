import { BigQuery } from "@google-cloud/bigquery";

let bigqueryClient: BigQuery | null = null;

export function getBigQueryClient() {
  if (!bigqueryClient) {
    bigqueryClient = new BigQuery({
      projectId: process.env.GCP_PROJECT_ID || "mara-analytics",
    });
  }

  return bigqueryClient;
}
