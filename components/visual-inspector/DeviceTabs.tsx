import Link from "next/link";
import type { VisualInspectorDevice } from "@/lib/visual-inspector/mockData";

type DeviceTabsProps = {
  klantId: string;
  selectedPageId: string;
  selectedDevice: VisualInspectorDevice;
  selectedVersionId: string;
  selectedPeriod: string;
  selectedTraffic: string;
};

const devices: { id: VisualInspectorDevice; label: string }[] = [
  { id: "desktop", label: "Desktop" },
  { id: "tablet", label: "Tablet" },
  { id: "mobile", label: "Mobile" },
];

export default function DeviceTabs({
  klantId,
  selectedPageId,
  selectedDevice,
  selectedVersionId,
  selectedPeriod,
  selectedTraffic,
}: DeviceTabsProps) {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {devices.map((device) => {
        const isActive = device.id === selectedDevice;

        return (
          <Link
            key={device.id}
            href={`/visual-inspector?klant=${klantId}&page=${selectedPageId}&device=${device.id}&version=${selectedVersionId}&period=${selectedPeriod}&traffic=${selectedTraffic}`}
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "13px",
              border: isActive ? "1px solid #1697e6" : "1px solid #d1d5db",
              color: isActive ? "#0b6fa4" : "#4b5563",
              background: isActive ? "#e9f6ff" : "white",
            }}
          >
            {device.label}
          </Link>
        );
      })}
    </div>
  );
}
