import type {
  DwellSection,
  VisualInspectorDevice,
  VisualInspectorPageOption,
  VisualInspectorTraffic,
  VisualInspectorTrafficOption,
  VisualInspectorVersion,
} from "@/lib/visual-inspector/mockData";

type PageBehaviorCanvasProps = {
  selectedPage: VisualInspectorPageOption;
  selectedDevice: VisualInspectorDevice;
  selectedVersion: VisualInspectorVersion;
  selectedTraffic: VisualInspectorTraffic[];
  trafficOptions: VisualInspectorTrafficOption[];
  dwellSections: DwellSection[];
  pageHeight: number;
};

function getCanvasWidth(device: VisualInspectorDevice) {
  if (device === "mobile") {
    return 360;
  }

  if (device === "tablet") {
    return 720;
  }

  return 960;
}

function getOverlayColor(index: number) {
  const colors = [
    "22, 151, 230",
    "56, 189, 248",
    "14, 165, 233",
    "59, 130, 246",
    "125, 211, 252",
    "14, 116, 144",
  ];

  return colors[index % colors.length];
}

export default function PageBehaviorCanvas({
  selectedPage,
  selectedDevice,
  selectedVersion,
  selectedTraffic,
  trafficOptions,
  dwellSections,
  pageHeight,
}: PageBehaviorCanvasProps) {
  const canvasWidth = getCanvasWidth(selectedDevice);
  const annotationWidth =
    selectedTraffic.length === 1 ? 320 : selectedTraffic.length === 2 ? 430 : 560;
  const annotationGap = 24;
  const annotationCardHeight = 190;

  return (
    <section
      style={{
        minHeight: "900px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "4px" }}>
            Page behavior map
          </div>
          <div style={{ fontSize: "20px", fontWeight: 800, color: "#111827" }}>
            {selectedPage.label} · {selectedVersion.label}
          </div>
        </div>
      </div>

      <div
        style={{
          overflowX: "auto",
          padding: "0 0 24px 0",
          borderTop: "1px solid #dbe4ee",
        }}
      >
        <div
          style={{
            position: "relative",
            width: `${canvasWidth + annotationGap + annotationWidth}px`,
            minHeight: `${pageHeight}px`,
            marginTop: "24px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: `${canvasWidth}px`,
              height: `${pageHeight}px`,
              borderRadius: "24px",
              background: "#ffffff",
              border: "1px solid #dbe4ee",
              boxShadow: "0 24px 50px rgba(15,23,42,0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "14px 18px",
                borderBottom: "1px solid #eef2f7",
                background: "#f8fafc",
                fontSize: "13px",
                color: "#64748b",
              }}
            >
              {selectedPage.path} · volledige pagina-inspectie
            </div>

            <div
              style={{
                position: "relative",
                height: `${pageHeight}px`,
                background:
                  "linear-gradient(180deg, #f9fbfd 0%, #ffffff 18%, #f8fafc 100%)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "32px",
                  left: "32px",
                  right: "32px",
                  height: "72px",
                  borderRadius: "20px",
                  background: "#0b6fa4",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "132px",
                  left: "32px",
                  width: "54%",
                  height: "22px",
                  borderRadius: "999px",
                  background: "#dbeafe",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "172px",
                  left: "32px",
                  width: "82%",
                  height: "14px",
                  borderRadius: "999px",
                  background: "#e5e7eb",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "198px",
                  left: "32px",
                  width: "68%",
                  height: "14px",
                  borderRadius: "999px",
                  background: "#e5e7eb",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "280px",
                  left: "32px",
                  right: "32px",
                  height: "220px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, #f3f4f6, #e0f2fe)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "540px",
                  left: "32px",
                  right: "32px",
                  height: "180px",
                  borderRadius: "24px",
                  background: "#f8fafc",
                  border: "1px solid #eef2f7",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "750px",
                  left: "32px",
                  width: "36%",
                  height: "140px",
                  borderRadius: "20px",
                  background: "#f3f4f6",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "750px",
                  right: "32px",
                  width: "54%",
                  height: "140px",
                  borderRadius: "20px",
                  background: "#eff6ff",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "940px",
                  left: "32px",
                  right: "32px",
                  height: "240px",
                  borderRadius: "24px",
                  background: "#f8fafc",
                  border: "1px solid #eef2f7",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "1220px",
                  left: "32px",
                  right: "32px",
                  height: "180px",
                  borderRadius: "24px",
                  background: "linear-gradient(180deg, #ffffff, #f3f4f6)",
                  border: "1px solid #eef2f7",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "1440px",
                  left: "32px",
                  right: "32px",
                  height: "190px",
                  borderRadius: "24px",
                  background: "#e5e7eb",
                }}
              />

              {dwellSections.map((section, index) => (
                <div
                  key={section.dwellId}
                  style={{
                    position: "absolute",
                    top: `${section.top}px`,
                    left: "24px",
                    right: "24px",
                    height: `${section.height}px`,
                    borderRadius: "18px",
                    border: `1.5px solid rgba(${getOverlayColor(index)}, ${0.16 + section.attentionIntensity * 0.34})`,
                    background: `rgba(${getOverlayColor(index)}, ${0.04 + section.attentionIntensity * 0.14})`,
                    boxShadow: `inset 0 0 0 1px rgba(255,255,255, ${0.28 + section.attentionIntensity * 0.22})`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "12px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "6px 9px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.94)",
                      border: "1px solid rgba(191,213,230,0.9)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        color: "#0b6fa4",
                      }}
                    >
                      {section.dwellId}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#111827",
                      }}
                    >
                      {section.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {dwellSections.map((section) => (
            <div
              key={`${section.dwellId}-annotation`}
              style={{
                position: "absolute",
                top: `${section.top + section.height / 2 - annotationCardHeight / 2}px`,
                left: `calc(${canvasWidth}px + ${annotationGap}px)`,
                width: `${annotationWidth}px`,
                minHeight: `${annotationCardHeight}px`,
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "14px",
                background: "#f8fafc",
                boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "10px",
                  alignItems: "baseline",
                }}
              >
                <div style={{ fontWeight: 800, color: "#0b6fa4" }}>{section.dwellId}</div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>{section.shareOfPage}</div>
              </div>

              <div
                style={{
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: "6px",
                }}
              >
                {section.label}
              </div>

              <div
                style={{
                  marginBottom: "12px",
                  fontSize: "12px",
                  color:
                    section.dropOffPercentage !== null && section.dropOffPercentage < 0
                      ? "#53718b"
                      : "#6b7280",
                }}
              >
                {section.dropOffPercentage === null
                  ? "Baseline aandacht"
                  : `${section.dropOffPercentage > 0 ? "+" : ""}${section.dropOffPercentage}% vs vorige sectie`}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${selectedTraffic.length}, minmax(0, 1fr))`,
                  gap: "10px",
                  fontSize: "13px",
                }}
              >
                {selectedTraffic.map((trafficId) => {
                  const traffic = trafficOptions.find((option) => option.id === trafficId);
                  const metrics = section.trafficMetrics[trafficId];

                  return (
                    <div
                      key={`${section.dwellId}-${trafficId}`}
                      style={{
                        border: "1px solid #dbe4ee",
                        borderRadius: "12px",
                        padding: "10px",
                        background: trafficId === "total" ? "#f8fafc" : "#ffffff",
                        minWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: trafficId === "total" ? "#4b5563" : "#0b6fa4",
                          marginBottom: "8px",
                        }}
                      >
                        {traffic?.label ?? trafficId}
                      </div>
                      <div style={{ display: "grid", gap: "6px" }}>
                        <div>
                          <div style={{ color: "#6b7280", fontSize: "11px" }}>Bezoekers</div>
                          <div style={{ color: "#111827", fontWeight: 700 }}>{metrics.visitors}</div>
                        </div>
                        <div>
                          <div style={{ color: "#6b7280", fontSize: "11px" }}>Aandeel</div>
                          <div style={{ color: "#111827", fontWeight: 700 }}>
                            {metrics.shareOfPage}
                          </div>
                        </div>
                        <div>
                          <div style={{ color: "#6b7280", fontSize: "11px" }}>
                            Actieve tijd
                          </div>
                          <div style={{ color: "#111827", fontWeight: 700 }}>
                            {metrics.avgActiveTime}
                          </div>
                        </div>
                        <div>
                          <div style={{ color: "#6b7280", fontSize: "11px" }}>Clicks</div>
                          <div style={{ color: "#111827", fontWeight: 700 }}>{metrics.clicks}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
