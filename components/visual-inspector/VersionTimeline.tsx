import Link from "next/link";
import type { VisualInspectorVersion } from "@/lib/visual-inspector/mockData";

type VersionTimelineProps = {
  klantId: string;
  selectedPageId: string;
  selectedDevice: string;
  selectedVersionId: string;
  selectedPeriod: string;
  selectedTraffic: string;
  versions: VisualInspectorVersion[];
};

export default function VersionTimeline({
  klantId,
  selectedPageId,
  selectedDevice,
  selectedVersionId,
  selectedPeriod,
  selectedTraffic,
  versions,
}: VersionTimelineProps) {
  return (
    <section
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        marginBottom: "24px",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          color: "#6b7280",
          marginBottom: "16px",
        }}
      >
        Timeline
      </div>
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        {versions.map((version) => {
          const isActive = version.id === selectedVersionId;

          return (
            <Link
              key={version.id}
              href={`/visual-inspector?klant=${klantId}&page=${selectedPageId}&device=${selectedDevice}&version=${version.id}&period=${selectedPeriod}&traffic=${selectedTraffic}`}
              style={{
                minWidth: "150px",
                textDecoration: "none",
                borderRadius: "14px",
                padding: "14px 16px",
                background: isActive ? "#0b6fa4" : "#f8fafc",
                color: isActive ? "white" : "#111827",
                border: isActive ? "1px solid #0b6fa4" : "1px solid #e5e7eb",
              }}
            >
              <div style={{ fontWeight: 800, marginBottom: "6px" }}>
                {version.label}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: isActive ? "rgba(255,255,255,0.8)" : "#6b7280",
                }}
              >
                {version.updatedAt}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
