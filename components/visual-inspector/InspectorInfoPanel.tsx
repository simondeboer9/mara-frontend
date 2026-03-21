import DeviceTabs from "@/components/visual-inspector/DeviceTabs";
import TrafficSourceSelector from "@/components/visual-inspector/TrafficSourceSelector";
import type {
  VisualInspectorDevice,
  VisualInspectorPageOption,
  VisualInspectorTraffic,
  VisualInspectorTrafficOption,
  VisualInspectorVersion,
} from "@/lib/visual-inspector/mockData";

type InspectorInfoPanelProps = {
  klantId: string;
  selectedPage: VisualInspectorPageOption;
  selectedVersion: VisualInspectorVersion;
  selectedDevice: VisualInspectorDevice;
  selectedPeriod: string;
  selectedTraffic: VisualInspectorTraffic[];
  selectedTrafficParam: string;
  trafficOptions: VisualInspectorTrafficOption[];
};

export default function InspectorInfoPanel({
  klantId,
  selectedPage,
  selectedVersion,
  selectedDevice,
  selectedPeriod,
  selectedTraffic,
  selectedTrafficParam,
  trafficOptions,
}: InspectorInfoPanelProps) {
  return (
    <aside style={{ alignSelf: "start" }}>
      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: "18px",
            fontSize: "24px",
            color: "#1697e6",
          }}
        >
          Weergave-instellingen
        </h2>

        <div style={{ display: "grid", gap: "18px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              padding: "14px",
              borderRadius: "14px",
              background: "#f8fafc",
              border: "1px solid #e5e7eb",
            }}
          >
            <div>
              <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
                Pagina
              </div>
              <div style={{ fontWeight: 700, color: "#111827", fontSize: "14px" }}>
                {selectedPage.label}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
                Versie
              </div>
              <div style={{ fontWeight: 700, color: "#111827", fontSize: "14px" }}>
                {selectedVersion.label}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
                Periode
              </div>
              <div style={{ fontWeight: 700, color: "#111827", fontSize: "14px" }}>
                {selectedPeriod}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
                Laatste update
              </div>
              <div style={{ color: "#4b5563", fontSize: "13px" }}>
                {selectedVersion.updatedAt}
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: "13px", color: "#6b7280", marginBottom: "10px" }}>
              Viewport
            </div>
            <DeviceTabs
              klantId={klantId}
              selectedPageId={selectedPage.id}
              selectedDevice={selectedDevice}
              selectedVersionId={selectedVersion.id}
              selectedPeriod={selectedPeriod}
              selectedTraffic={selectedTrafficParam}
            />
          </div>

          <div>
            <div style={{ fontSize: "13px", color: "#6b7280", marginBottom: "10px" }}>
              Traffic source
            </div>
            <TrafficSourceSelector
              klantId={klantId}
              selectedPageId={selectedPage.id}
              selectedDevice={selectedDevice}
              selectedVersionId={selectedVersion.id}
              selectedPeriod={selectedPeriod}
              selectedTraffic={selectedTraffic}
              trafficOptions={trafficOptions}
            />
            <div style={{ marginTop: "8px", fontSize: "12px", color: "#6b7280" }}>
              Maximaal 3 bronnen tegelijk
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
