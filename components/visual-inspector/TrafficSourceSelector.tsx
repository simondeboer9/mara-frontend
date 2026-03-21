"use client";

import { useRouter } from "next/navigation";
import type {
  VisualInspectorTraffic,
  VisualInspectorTrafficOption,
} from "@/lib/visual-inspector/mockData";

type TrafficSourceSelectorProps = {
  klantId: string;
  selectedPageId: string;
  selectedDevice: string;
  selectedVersionId: string;
  selectedPeriod: string;
  selectedTraffic: VisualInspectorTraffic[];
  trafficOptions: VisualInspectorTrafficOption[];
};

export default function TrafficSourceSelector({
  klantId,
  selectedPageId,
  selectedDevice,
  selectedVersionId,
  selectedPeriod,
  selectedTraffic,
  trafficOptions,
}: TrafficSourceSelectorProps) {
  const router = useRouter();

  function toggleTraffic(trafficId: VisualInspectorTraffic) {
    const isActive = selectedTraffic.includes(trafficId);
    let nextTraffic = selectedTraffic;

    if (isActive) {
      nextTraffic = selectedTraffic.filter((value) => value !== trafficId);
    } else if (selectedTraffic.length < 3) {
      nextTraffic = [...selectedTraffic, trafficId];
    }

    if (nextTraffic.length === 0) {
      nextTraffic = ["total"];
    }

    if (nextTraffic.join(",") === selectedTraffic.join(",")) {
      return;
    }

    router.replace(
      `/visual-inspector?klant=${klantId}&page=${selectedPageId}&device=${selectedDevice}&version=${selectedVersionId}&period=${selectedPeriod}&traffic=${nextTraffic.join(",")}`,
      { scroll: false }
    );
  }

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {trafficOptions.map((traffic) => {
        const isActive = selectedTraffic.includes(traffic.id);
        const isDisabled = !isActive && selectedTraffic.length >= 3;

        return (
          <button
            key={traffic.id}
            type="button"
            onClick={() => toggleTraffic(traffic.id)}
            disabled={isDisabled}
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "13px",
              border: isActive ? "1px solid #1697e6" : "1px solid #d1d5db",
              color: isActive ? "#0b6fa4" : isDisabled ? "#9ca3af" : "#4b5563",
              background: isActive
                ? traffic.id === "total"
                  ? "#eef2f7"
                  : "#e9f6ff"
                : "white",
              cursor: isDisabled ? "not-allowed" : "pointer",
              opacity: isDisabled ? 0.55 : 1,
            }}
          >
            {traffic.label}
          </button>
        );
      })}
    </div>
  );
}
