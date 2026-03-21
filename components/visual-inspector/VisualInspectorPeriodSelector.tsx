"use client";

import { useRouter } from "next/navigation";
import type {
  VisualInspectorPeriod,
  VisualInspectorPeriodOption,
} from "@/lib/visual-inspector/mockData";

type VisualInspectorPeriodSelectorProps = {
  klantId: string;
  selectedPageId: string;
  selectedDevice: string;
  selectedVersionId: string;
  selectedPeriod: VisualInspectorPeriod;
  selectedTraffic: string;
  periods: VisualInspectorPeriodOption[];
};

export default function VisualInspectorPeriodSelector({
  klantId,
  selectedPageId,
  selectedDevice,
  selectedVersionId,
  selectedPeriod,
  selectedTraffic,
  periods,
}: VisualInspectorPeriodSelectorProps) {
  const router = useRouter();

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
      <label
        htmlFor="visual-inspector-period-selector"
        style={{ display: "block", fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}
      >
        Periode
      </label>
      <select
        id="visual-inspector-period-selector"
        value={selectedPeriod}
        onChange={(e) => {
          router.push(
            `/visual-inspector?klant=${klantId}&page=${selectedPageId}&device=${selectedDevice}&version=${selectedVersionId}&period=${e.target.value}&traffic=${selectedTraffic}`
          );
        }}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #dbe4ee",
          background: "#f8fafc",
          color: "#111827",
        }}
      >
        {periods.map((period) => (
          <option key={period.id} value={period.id}>
            {period.label}
          </option>
        ))}
      </select>
    </section>
  );
}
